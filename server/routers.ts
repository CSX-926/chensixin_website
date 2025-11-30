import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createContactMessage, getContactMessages, getBlogArticles, getBlogArticleBySlug, createBlogArticle } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        subject: z.string().min(1),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        await createContactMessage({
          name: input.name,
          email: input.email,
          subject: input.subject,
          message: input.message,
          status: 'unread',
        });
        
        await notifyOwner({
          title: `New contact form submission from ${input.name}`,
          content: `Email: ${input.email}\nSubject: ${input.subject}\n\nMessage:\n${input.message}`,
        });
        
        return { success: true };
      }),
    list: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN' });
        }
        return await getContactMessages();
      }),
  }),
  
  blog: router({
    list: publicProcedure
      .query(async () => {
        return await getBlogArticles(true);
      }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return await getBlogArticleBySlug(input.slug);
      }),
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        slug: z.string(),
        excerpt: z.string(),
        content: z.string(),
        tags: z.string().optional(),
        readTime: z.number().optional(),
        published: z.boolean().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN' });
        }
        return await createBlogArticle({
          title: input.title,
          slug: input.slug,
          excerpt: input.excerpt,
          content: input.content,
          tags: input.tags,
          readTime: input.readTime || 5,
          published: input.published || false,
        });
      }),
  }),
});

export type AppRouter = typeof appRouter;
