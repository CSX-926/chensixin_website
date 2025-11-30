import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { trpc } from '@/lib/trpc'
import { toast } from 'sonner'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      toast.success('消息已发送！感谢您的联系。')
      setTimeout(() => setIsSubmitted(false), 3000)
    },
    onError: (error) => {
      toast.error(`发送失败: ${error.message}`)
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('请填写所有字段')
      return
    }
    submitMutation.mutate(formData)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6">
              联系我
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              有任何想法或合作机会？我很乐意听到您的声音。直接发送消息给我，我会在24小时内回复。
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <div className="bg-card text-card-foreground rounded-2xl border border-border p-8 sm:p-12 shadow-lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">消息已发送！</h3>
                  <p className="text-muted-foreground">感谢您的联系，我会尽快回复您。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="您的姓名"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="您的邮箱地址"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      主题
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="消息主题"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      消息
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="请输入您的消息..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {submitMutation.isPending ? '发送中...' : '发送消息'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Email Card */}
            <div className="bg-card text-card-foreground rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">邮箱</h3>
              <a href="mailto:jinsaheun0926@outlook.com" className="text-primary hover:underline">
                jinsaheun0926@outlook.com
              </a>
            </div>

            {/* GitHub Card */}
            <div className="bg-card text-card-foreground rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
              <a href="https://github.com/CSX-926" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                github.com/CSX-926
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
