import { useState } from 'react'
import {motion} from "motion/react"
import './App.css'
import UnicornScene from 'unicornstudio-react'
import { Terminal, TypingAnimation, AnimatedSpan } from './components/magicui/terminal'
import { ArcTimeline } from "@/components/magicui/arc-timeline";
import { CodeBlock } from './components/ui/code-block'
import { Navbar } from './components/ui/navbar'
import meImage from './assets/mee.jpeg'

function App() {
  return (
    <div className="relative w-full">
      <Navbar />
      {/* First section - Hero with UnicornScene */}
      <div id="home" className="relative h-screen">
        <UnicornScene 
          projectId="mhLlYCyCooqdwsHcsEqW" 
          width="100%" 
          height="100%" 
          className="background-scene"
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="glass-card p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0px 12px 48px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              {/* Photo Section */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  <motion.img 
                    src={meImage} 
                    alt="Christopher Ooi" 
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgba(255, 255, 255, 0.6)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                  <div className="absolute inset-0 rounded-full"></div>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <motion.h1 
                  className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 drop-shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Little bit about me...
                </motion.h1>
                <motion.ul 
                  className="text-white space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {[
                    "My name is Chris, 21 years old, passionate about startups, coding, poker, and basketball.",
                    "Specializes in full stack development, where I help clients build their ideas into reality.",
                    "Currently working on mentor-trader.com, a platform for financial traders.",
                  ].map((text, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-blue-300 mr-2 sm:mr-3 mt-1 flex-shrink-0">•</span>
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Smooth blur transition effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-18 bg-gradient-to-t from-gray-900 via-gray-900/60 via-gray-900/30 via-gray-900/10 to-transparent backdrop-blur-lg z-20"></div>
      </div>
      
      {/* Next section with Terminal */}
      <div id="terminal" className="bg-black min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="text-center text-white w-full max-w-7xl"> 
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">My Resume Terminal</h2>
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <div className="border-dotted border-2 border-white p-2 sm:p-4 md:p-6 rounded-lg">
              <Terminal className="w-full mx-auto">
                <TypingAnimation>&gt; whoami</TypingAnimation>
                
                <AnimatedSpan className="text-blue-400">
                  Christopher Ooi En Shen - Full Stack Developer
                </AnimatedSpan>
                
                <AnimatedSpan className="text-gray-400">
                  Location: Waterloo, Ontario | CGPA: 3.85
                </AnimatedSpan>
                
                <TypingAnimation className="text-green-400">
                  &gt; cat experience.txt
                </TypingAnimation>
                
                <AnimatedSpan className="text-yellow-400">
                  === Bolttech (Software Engineer Intern) ===
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  💰 Saved $50K+ annually with serverless ETL pipeline
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  ⚡ Processed 1M+ daily inventory records across Europe
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  🔧 Achieved 90% cost reduction with AWS Lambda
                </AnimatedSpan>
                
                <AnimatedSpan className="text-yellow-400">
                  === Sensoft Technologies (Software Engineer Intern) ===
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  📊 Built React dashboard for 15,000 IoT sensors
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  🤖 80%+ accuracy energy forecasting with Prophet + OpenAI
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  👁️ Real-time people detection: sub-0.1s response time
                </AnimatedSpan>
                
                <TypingAnimation className="text-purple-400">
                  &gt; ls projects/
                </TypingAnimation>
                
                <AnimatedSpan className="text-yellow-400">
                  === MENTORTRADER (Marketplace Platform) ===
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  🎯 Connected 120+ trading mentors with students
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  🔐 OAuth2.0 + Supabase + TypeScript architecture
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  🚀 Kubernetes CI/CD + Redis caching + AWS S3
                </AnimatedSpan>
                
                <AnimatedSpan className="text-yellow-400">
                  === URL SHORTENER (Full-Stack Analytics) ===
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  🔗 Rails 8 + PostgreSQL + advanced click tracking
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  📍 Geolocation + referral sources + page title extraction
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  🛡️ Rack::Attack + Cloudflare Turnstile security
                </AnimatedSpan>
                
                <AnimatedSpan className="text-yellow-400">
                  === NBA INSIGHTS (AI Prediction Platform) ===
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  🏀 Win probability predictions with natural language
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  🤖 GPT-4o integration + microservices architecture
                </AnimatedSpan>
                
                <AnimatedSpan className="text-green-500">
                  ⚡ Real-time interactive updates + async processing
                </AnimatedSpan>
                
                <TypingAnimation className="text-cyan-400">
                  &gt; skills --show-all
                </TypingAnimation>
                
                <AnimatedSpan className="text-blue-400">
                  Languages: Python, Java, C, TypeScript, Ruby, SQL, Bash
                </AnimatedSpan>
                
                <AnimatedSpan className="text-blue-400">
                  Frontend: React, Next.js, Tailwind CSS, HTML/CSS
                </AnimatedSpan>
                
                <AnimatedSpan className="text-blue-400">
                  Backend: Node.js, Flask, FastAPI, Ruby on Rails
                </AnimatedSpan>
                
                <AnimatedSpan className="text-blue-400">
                  Cloud: AWS, Docker, Kubernetes, Redis, PostgreSQL
                </AnimatedSpan>
                
                <TypingAnimation className="text-green-400">
                  &gt; echo "Ready to build the future! 🚀"
                </TypingAnimation>
              </Terminal>
            </div>
          </div>
        </div>
      </div>
      
      {/* Arc Timeline Section */}
      <div id="timeline" className="bg-black min-h-[50vh] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div 
          className="text-center text-white w-full max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            My Work Journey Timeline
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <ArcTimeline 
              data={[
                {
                  time: "2023",
                  steps: [
                    { icon: <span>🎓</span>, content: "Started Computer Science at Wilfrid Laurier University" },
                    { icon: <span>📚</span>, content: "Began Data Structures & Algorithms coursework" },
                  ],
                },
                {
                  time: "2024",
                  steps: [
                    { icon: <span>🏢</span>, content: "Software Engineer Intern at Sensoft Technologies" },
                    { icon: <span>📊</span>, content: "Built React dashboard for 15,000 IoT sensors" },
                    { icon: <span>🤖</span>, content: "80%+ accuracy energy forecasting with Prophet + OpenAI" },
                    { icon: <span>👁️</span>, content: "Real-time people detection: sub-0.1s response time" },
                  ],
                },
                {
                  time: "2025",
                  steps: [
                    { icon: <span>💼</span>, content: "Software Engineer Intern at Bolttech" },
                    { icon: <span>💰</span>, content: "Saved $50K+ annually with serverless ETL pipeline" },
                    { icon: <span>⚡</span>, content: "Processed 1M+ daily inventory records across Europe" },
                    { icon: <span>🔧</span>, content: "90% cost reduction with AWS Lambda" },
                    { icon: <span>💼</span>, content: "Currently working as a freelancer developing websites for clients" },
                  ],
                },
                {
                  time: "2026",
                  steps: [
                    { icon: <span>🎯</span>, content: "Graduating with 3.85 CGPA" },
                    { icon: <span>🚀</span>, content: "Ready to launch career in full-stack development" },
                  ],
                },
              ]} 
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Contact & FAQ Section */}
      <div id="contact" className="bg-black min-h-screen flex items-start justify-center pt-16 p-4 sm:p-6 lg:p-8">
        <div className="text-center text-white w-full max-w-7xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Contact & FAQ</h2>
          <p className="text-gray-300 mb-8 text-lg">Get in touch and learn more about me :)</p>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CodeBlock 
                language="json"
                filename="contact.json"
                code={
                  `{
                    "personal_info": {
                      "name": "Christopher Ooi",
                      "title": "Young, Asian, Gifted",
                      "location": ["Waterloo", "Toronto", "Kuala Lumpur"],
                      "education": "Computer Science at Wilfrid Laurier University",
                      "gpa": "3.85 CGPA"
                    },
                    "contact": {
                      "email": "oichristopher1234@gmail.com",
                      "linkedin": "https://www.linkedin.com/in/christopher-ooi-en-shen-825138207",
                      "github": "https://github.com/Chriss0309"
                    },
                    "availability": {
                      "status": "Open to opportunities",
                      "freelance": true,
                      "full_time": true,
                      "remote": true,
                      "relocation": "Open to discussion"
                    }
                  }`
                }
              />
            </motion.div>
            
            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CodeBlock 
                language="json"
                filename="faq.json"
                code={
                  `{
                    "frequently_asked_questions": [
                      {
                        "question": "What technologies do you specialize in?",
                        "answer": "React, TypeScript, Node.js, Python, AWS, Docker, Kubernetes, PostgreSQL, Redis"
                      },
                      {
                        "question": "What's your development philosophy?",
                        "answer": "Clean, readible, maintainable code with a focus on user experience and scalable architecture"
                      },
                      {
                        "question": "Do you work with startups or enterprise?",
                        "answer": "Both! I've worked with startups (Sensoft Technologies) and enterprise companies (Bolttech)"
                      },
                      {
                        "question": "What's your approach to problem-solving?",
                        "answer": "If the problem is logical, and it doesn't defy the laws of physics, it can be solved."
                      },
                      {
                        "question": "Are you available for freelance projects?",
                        "answer": "Yes! I'm currently taking on freelance web development projects for clients"
                      },
                      {
                        "question": "What's your favourite food?",
                        "answer": "Nobody asked, but I love burgers, fried chicken, and poutine :)"
                      }
                    ]
                  }`
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </div>


      
    </div>
  )
}

export default App
