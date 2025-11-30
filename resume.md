# CHENSIXIN (陈思欣)
**Also known as: jinsaheun / chris**

📍 Chengdu, Sichuan, China | 📧 your-email@example.com | 🔗 [GitHub](https://github.com/CSX-926)

---

## Professional Summary

Passionate iOS Developer and Full-Stack Engineer with expertise in building high-performance distributed systems and mobile applications. Specialized in C/C++ backend development, iOS application architecture, and system optimization. Philosophy: "先跑通，再完善，再加速" (Get it working, then refine it, then optimize it).

---

## Work Experience

### iOS Development Engineer
**Beijing Xiaochuan Voice Interactive Department** | July 2025 - November 2025

**Core Responsibilities:**
- Architected and developed core business modules including voice social features, user matching system, and personal homepage functionality
- Designed MVVM architecture with field-driven rendering supporting multiple scenarios (feed, detail view, profile) with 40% code reuse improvement
- Optimized high-concurrency user matching system through dual-acceptance architecture with mutex mechanism between polling and long-connection signaling
- Implemented real-time interaction features using WebSocket signaling with millisecond-level synchronization for masked voice sessions
- Developed monetization features including gesture-based interactive popups and optimized personal profile with offline data persistence
- Enhanced user retention and engagement through intelligent lifecycle management and navigation stack optimization

**Key Achievements:**
- Significantly improved new user matching success rate through architectural optimization
- Supported concurrent user interactions with seamless session transitions
- Implemented dynamic history record sorting using timestamp-based algorithms

---

## Education

### Bachelor of Science in Computer Science and Technology
**Northeast Petroleum University, Heilongjiang, China** | September 2022 - June 2026

- Major: Computer Science and Technology
- Focus Areas: Software Engineering, System Design, Network Programming

---

## Technical Skills

### Programming Languages
- **C/C++**: Expert in modern C++11+ with OOP principles, memory management, and design patterns
- **Objective-C**: Proficient in iOS development with UIKit, Foundation, and advanced frameworks
- **Python**: Data structures, algorithms, and scripting

### Backend & Systems
- **Distributed Systems**: gRPC, microservices architecture, service communication
- **Network Programming**: TCP/IP, ASIO async I/O, socket programming, epoll/select
- **Database Systems**: MySQL optimization, Redis caching, connection pooling strategies
- **System Architecture**: MVVM pattern, design patterns (CRTP, Singleton), system design principles

### iOS Development
- UIKit framework and modern iOS development patterns
- Multi-threading and concurrent programming
- Network communication and real-time data synchronization
- Data persistence using WCDB
- Performance optimization including list scrolling, rendering strategies, and memory management

### Infrastructure & Tools
- **Version Control**: Git, GitHub, collaborative workflows
- **Development Tools**: Xcode, Qt Framework, Linux development environment
- **DevOps**: Docker containerization, deployment strategies
- **AI & Productivity**: ChatGPT prompt engineering, AI-driven development efficiency

---

## Featured Projects

### NexusChat - Distributed Instant Messaging System
**February 2025 - July 2025** | [GitHub Repository](https://github.com/CSX-926/NexusChat_Clean)

A high-performance distributed instant messaging system built with C++ supporting 8000+ concurrent connections per server.

**Architecture & Components:**
- **Client**: Qt-based UI with HTTP short-connection for authentication and custom TCP long-connection for real-time messaging
- **Distributed Backend**: Microservices architecture with GateServer (HTTP gateway), ChatServer (core messaging), StatusServer (state management), and VerifyServer (authentication)
- **Inter-service Communication**: gRPC with automatic reconnection support
- **Data Layer**: MySQL with connection pooling, Redis caching, and connection pool management

**Key Responsibilities:**
- Designed and implemented distributed system architecture with gRPC communication
- Engineered IO thread pool with singleton pattern and multi-threaded io_context model
- Developed database connection pool with keepalive mechanism and thread-safe borrowing/returning
- Implemented complete TCP async server architecture using Boost.Asio
- Applied CRTP pattern to simplify factory pattern implementation
- Designed load balancing algorithm for server distribution during client login

**Performance Metrics:**
- Single server: 8000+ stable concurrent connections
- System capacity: 10,000-20,000 active users
- Efficient resource pooling and high concurrency support

---

## Core Competencies

| Category | Skills |
|----------|--------|
| **System Design** | Distributed architecture, microservices, load balancing, concurrent system design |
| **Performance** | High-concurrency optimization, thread pool design, memory management, profiling |
| **Backend** | gRPC, ASIO async I/O, TCP/IP networking, database optimization |
| **Mobile** | iOS development, MVVM architecture, real-time synchronization |
| **Tools & DevOps** | Git, Docker, Linux, Xcode, Qt Framework |
| **Soft Skills** | System architecture, problem-solving, rapid prototyping, optimization mindset |

---

## Development Philosophy

**"先跑通，再完善，再加速"** - Get it working, then refine it, then optimize it.

This philosophy guides my approach to software development, emphasizing:
1. **Rapid Prototyping**: Quickly validate ideas and get working solutions
2. **Iterative Refinement**: Improve code quality, architecture, and maintainability
3. **Performance Optimization**: Fine-tune systems for production-grade performance

---

## Languages

- **Chinese**: Native
- **English**: Professional Working Proficiency

---

## Interests & Continuous Learning

- Advanced system design patterns and distributed computing
- AI integration in mobile and backend applications
- Performance optimization and scalability
- Emerging backend architectures and technologies

---

**Last Updated**: November 2025
