import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "NexusChat - Distributed Instant Messaging System",
      description: "A high-performance distributed instant messaging system built with C++. Features include a Qt-based client, distributed microservices architecture with gRPC communication, TCP long-connection support, and support for 8000+ concurrent connections per server.",
      testimonial: {
        text: "The system architecture is impressive. Successfully handles high concurrency with elegant service separation and efficient resource pooling.",
        author: "System Architecture Review",
        role: "Performance Metrics"
      },
      image: "/system-architecture.jpg",
      tags: ["C++", "gRPC", "Distributed Systems", "ASIO", "MySQL", "Redis"],
      link: "https://github.com/CSX-926/NexusChat_Clean"
    },
    {
      id: 2,
      title: "Voice Social App - iOS Development",
      description: "iOS app for voice-based social interactions at Beijing Xiaochuan. Developed core modules including voice social, user matching, and personal homepage. Implemented MVVM architecture with dynamic rendering, optimized high-concurrency matching, and real-time WebSocket synchronization.",
      testimonial: {
        text: "Successfully improved new user matching success rate through intelligent architecture design and lifecycle management optimization.",
        author: "Product Impact",
        role: "User Engagement"
      },
      image: "/ios-development.jpg",
      tags: ["iOS", "Objective-C", "MVVM", "WebSocket", "Real-time", "Performance Optimization"]
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
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

  const project = projects[currentProject]

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-50 rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              PROJECTS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
          </motion.div>

          {/* Project Showcase */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Info */}
              <div className="space-y-6">
                {/* Testimonial */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <blockquote className="text-lg text-gray-700 mb-4">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {project.testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{project.testimonial.author}</p>
                      <p className="text-sm text-gray-500">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <Button className="gap-2">
                      View on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Image */}
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevProject}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentProject ? 'bg-blue-400' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
