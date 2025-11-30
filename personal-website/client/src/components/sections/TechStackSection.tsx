import { motion } from 'framer-motion'

const TechStackSection = () => {
  const techStack = {
    languages: [
      { 
        name: "C/C++", 
        description: "Expert in modern C++11+ with OOP and memory management",
        icon: "⚙️",
        color: "bg-blue-100 text-blue-600"
      },
      { 
        name: "Objective-C", 
        description: "Proficient iOS development with UIKit and Foundation",
        icon: "📱",
        color: "bg-gray-100 text-gray-800"
      },
      { 
        name: "Python", 
        description: "Data structures, algorithms, and scripting",
        icon: "🐍",
        color: "bg-blue-100 text-blue-600"
      }
    ],
    backend: [
      { 
        name: "Distributed Systems", 
        description: "gRPC, microservices, service communication",
        icon: "🔗",
        color: "bg-blue-100 text-blue-600"
      },
      { 
        name: "ASIO & Networking", 
        description: "TCP/IP, async I/O, socket programming, epoll/select",
        icon: "🌐",
        color: "bg-gray-100 text-gray-800"
      },
      { 
        name: "Database Systems", 
        description: "MySQL optimization, Redis caching, connection pooling",
        icon: "🗄️",
        color: "bg-blue-100 text-blue-600"
      }
    ],
    architecture: [
      { 
        name: "Concurrency Design", 
        description: "Thread pools, io_context, load balancing",
        icon: "🧵",
        color: "bg-gray-100 text-gray-800"
      },
      { 
        name: "System Architecture", 
        description: "MVVM, design patterns, CRTP, singleton patterns",
        icon: "🏗️",
        color: "bg-blue-100 text-blue-600"
      },
      { 
        name: "Performance Optimization", 
        description: "Profiling, memory management, rendering optimization",
        icon: "⚡",
        color: "bg-gray-100 text-gray-800"
      }
    ],
    tools: [
      { 
        name: "Version Control", 
        description: "Git, GitHub, collaborative workflows",
        icon: "🐙",
        color: "bg-blue-100 text-blue-600"
      },
      { 
        name: "Development Tools", 
        description: "Qt Framework, Xcode, Linux development",
        icon: "🛠️",
        color: "bg-gray-100 text-gray-800"
      },
      { 
        name: "AI & Productivity", 
        description: "ChatGPT, prompt engineering, development efficiency",
        icon: "🤖",
        color: "bg-blue-100 text-blue-600"
      }
    ]
  }

  const categories = [
    { key: 'languages', title: 'Programming Languages', items: techStack.languages },
    { key: 'backend', title: 'Backend & Systems', items: techStack.backend },
    { key: 'architecture', title: 'Architecture & Design', items: techStack.architecture },
    { key: 'tools', title: 'Tools & Workflow', items: techStack.tools }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              TECH STACK
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Skills & Technologies
            </h2>
          </motion.div>

          {/* Tech Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      variants={cardVariants}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg ${tech.color} flex items-center justify-center text-lg font-bold flex-shrink-0`}>
                          {tech.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mt-16"
          >
            <div className="flex gap-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStackSection
