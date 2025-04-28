
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses, learningPaths, testimonials } from "@/lib/data";
import { Book, Video, Search, Award, Compass, User } from "lucide-react";

const Home = () => {
  const [selectedPath, setSelectedPath] = useState(learningPaths[0].id);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-purple/10 pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Prepare Effectively for Your <span className="text-sky">Dream Job</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Access curated study materials, take interactive practice tests, and experience realistic mock interviews to build your skills and confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-sky text-white hover:bg-sky/90 button-hover text-lg py-6 px-8">
                  Get Started
                </Button>
                <Button variant="outline" className="border-sky text-sky hover:bg-sky hover:text-white button-hover text-lg py-6 px-8">
                  Explore Courses
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Job preparation"
                    className="w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-sky text-white p-4 rounded-full shadow-lg animate-pulse-soft">
                    <Award size={32} />
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-purple text-purple-800 p-3 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2">
                    <User size={20} />
                    <span className="font-medium">2000+ Success Stories</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How JobPrep Helps You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform offers a comprehensive approach to job preparation through these key features
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <FeatureCard
                title="Curated Study Materials"
                description="Access expert-created resources that cover all important topics for job preparation."
                icon={<Book size={24} className="text-white" />}
                color="bg-sky"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FeatureCard
                title="Interactive Practice Tests"
                description="Test your knowledge with our adaptive tests that match your skill level."
                icon={<Search size={24} className="text-white" />}
                color="bg-purple"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FeatureCard
                title="Realistic Mock Interviews"
                description="Practice with AI-driven simulations or get feedback from real experts."
                icon={<Video size={24} className="text-white" />}
                color="bg-peach"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FeatureCard
                title="Personalized Learning Paths"
                description="Follow curated paths designed for specific career goals and roles."
                icon={<Compass size={24} className="text-white" />}
                color="bg-softGreen"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FeatureCard
                title="Progress Tracking"
                description="Monitor your improvement and identify areas that need more focus."
                icon={<Award size={24} className="text-white" />}
                color="bg-softYellow"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FeatureCard
                title="Feedback & Improvement"
                description="Receive detailed feedback to continuously improve your skills."
                icon={<User size={24} className="text-white" />}
                color="bg-sky"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Learning Paths Section */}
      <section className="py-16 bg-gradient-to-br from-white to-peach/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Learning Path</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Targeted preparation plans designed for different career goals
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {learningPaths.map((path) => (
              <Button
                key={path.id}
                variant={selectedPath === path.id ? "default" : "outline"}
                className={selectedPath === path.id ? 
                  "bg-sky text-white" : 
                  "border-sky text-sky hover:bg-sky hover:text-white"
                }
                onClick={() => setSelectedPath(path.id)}
              >
                {path.title}
              </Button>
            ))}
          </div>
          
          <motion.div
            key={selectedPath}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {learningPaths.map((path) => (
              path.id === selectedPath && (
                <div key={path.id} className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3">{path.title}</h3>
                  <p className="text-gray-600 mb-6">{path.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Book size={18} className="mr-2 text-sky" /> Recommended Courses
                      </h4>
                      <ul className="space-y-2">
                        {path.courses.map((courseId: string) => {
                          const course = courses.find(c => c.id === courseId);
                          return course ? (
                            <li key={courseId} className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-sky rounded-full"></span>
                              <Link to={`/study/${courseId}`} className="text-gray-700 hover:text-sky">
                                {course.title}
                              </Link>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Search size={18} className="mr-2 text-sky" /> Practice Tests
                      </h4>
                      <ul className="space-y-2">
                        {path.tests.map((testId: string) => (
                          <li key={testId} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-purple rounded-full"></span>
                            <Link to={`/practice/${testId}`} className="text-gray-700 hover:text-sky">
                              {testId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Video size={18} className="mr-2 text-sky" /> Mock Interviews
                      </h4>
                      <ul className="space-y-2">
                        {path.interviews.map((interviewId: string) => (
                          <li key={interviewId} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-peach rounded-full"></span>
                            <Link to={`/interviews/${interviewId}`} className="text-gray-700 hover:text-sky">
                              {interviewId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="bg-sky text-white hover:bg-sky/90">
                      Start This Learning Path
                    </Button>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how JobPrep has helped candidates succeed in their interviews and career journeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky/10 to-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Job Preparation?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of successful candidates who have improved their skills and landed their dream jobs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-sky text-white hover:bg-sky/90 button-hover text-lg py-6 px-8">
                Get Started for Free
              </Button>
              <Button variant="outline" className="border-sky text-sky hover:bg-sky hover:text-white button-hover text-lg py-6 px-8">
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
