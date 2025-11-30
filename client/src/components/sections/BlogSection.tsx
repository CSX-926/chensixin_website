import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'iOS性能优化：从启动速度到内存管理',
      excerpt: '深入探讨iOS应用的性能优化技巧，包括启动速度优化、内存泄漏检测和渲染性能提升。',
      date: '2025-01-15',
      tags: ['iOS', '性能优化', 'Swift'],
      readTime: '8 min read'
    },
    {
      id: 2,
      title: '分布式系统设计：从理论到实践',
      excerpt: '分享在构建NexusChat时学到的分布式系统设计经验，包括一致性、可用性和分区容错性的权衡。',
      date: '2025-01-10',
      tags: ['分布式系统', '架构设计', 'gRPC'],
      readTime: '12 min read'
    },
    {
      id: 3,
      title: '高并发场景下的用户匹配算法',
      excerpt: '介绍在语音社交应用中实现高效用户匹配的算法和优化技巧，处理日均百万级匹配请求。',
      date: '2025-01-05',
      tags: ['算法', '高并发', '优化'],
      readTime: '10 min read'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="blog" className="py-20 sm:py-32 bg-background">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">
              技术博客
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              分享我在iOS开发、分布式系统和高并发优化方面的技术见解和经验。
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`}>
                <motion.div
                  variants={itemVariants}
                  className="group bg-card text-card-foreground rounded-2xl border border-border p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.date).toLocaleDateString('zh-CN')}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    阅读全文
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* View All Link */}
          <motion.div variants={itemVariants} className="flex justify-center pt-8">
            <Link href="/blog">
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                查看所有文章
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
