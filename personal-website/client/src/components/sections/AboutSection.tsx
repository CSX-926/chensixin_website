import { motion } from 'framer-motion'
import { MapPin, Calendar, ChevronDown, ChevronUp, Download } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const AboutSection = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
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
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-50 rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  <span className="text-black">iOS & Backend Developer</span>{' '}
                  <span className="text-gray-700">focused on high-performance systems</span>
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Based in</p>
                    <p className="text-lg font-semibold text-gray-900">Chengdu, Sichuan, China</p>
                  </div>
                </div>

                {/* Coding Since */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Currently Studying</p>
                    <p className="text-lg font-semibold text-gray-900">Northeast Petroleum University</p>
                  </div>
                </div>
              </motion.div>

              {/* Code Snippet */}
              <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg p-4 text-sm">
                <div className="text-gray-400 font-mono">
                  <div className="text-blue-400">&lt;!DOCTYPE html&gt;</div>
                  <div className="text-blue-400">&lt;html lang="en"&gt;</div>
                  <div className="text-blue-400 ml-2">&lt;head&gt;</div>
                  <div className="text-gray-300 ml-4">&lt;meta charset="UTF-8"/&gt;</div>
                  <div className="text-gray-300 ml-4">&lt;title&gt;Hi, I'm CSX&lt;/title&gt;</div>
                  <div className="text-blue-400 ml-2">&lt;/head&gt;</div>
                  <div className="text-blue-400 ml-2">&lt;body&gt;</div>
                  <div className="text-blue-400 ml-2">&lt;/body&gt;</div>
                  <div className="text-blue-400">&lt;/html&gt;</div>
                </div>
              </motion.div>

              {/* Download Resume Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/CHENSIXIN_Resume.pdf'
                    link.download = 'CHENSIXIN_Resume.pdf'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  <span>Download My Resume</span>
                </motion.button>
              </motion.div>

              {/* Expandable Sections */}
              <motion.div variants={itemVariants} className="space-y-4">
                {/* What I Do */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('whatIDo')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">What I Do</span>
                    {expandedSection === 'whatIDo' ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === 'whatIDo' ? 'auto' : 0,
                      opacity: expandedSection === 'whatIDo' ? 1 : 0
                    }}
                    transition={{
                      height: { duration: 0.3, ease: "easeInOut" },
                      opacity: { duration: 0.2, ease: "easeInOut" }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-gray-600">
                      I specialize in iOS development and backend systems design. My expertise includes distributed systems architecture, high-concurrency optimization, and full-stack development with C/C++, Objective-C, and modern web technologies. I focus on building scalable, performant systems that handle real-world challenges.
                    </div>
                  </motion.div>
                </div>

                {/* Always Learning */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('alwaysLearning')}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">Always Learning</span>
                    {expandedSection === 'alwaysLearning' ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === 'alwaysLearning' ? 'auto' : 0,
                      opacity: expandedSection === 'alwaysLearning' ? 1 : 0
                    }}
                    transition={{
                      height: { duration: 0.3, ease: "easeInOut" },
                      opacity: { duration: 0.2, ease: "easeInOut" }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-gray-600">
                      My philosophy is: "先跑通，再完善，再加速" (Get it working, then refine it, then optimize it). I'm constantly learning new technologies and best practices. Currently exploring advanced system design patterns, AI integration, and emerging backend architectures.
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Character Illustration */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/developer-workspace.jpg" 
                  alt="Developer Workspace" 
                  className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">💻</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

