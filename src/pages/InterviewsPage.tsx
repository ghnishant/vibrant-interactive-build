
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InterviewCard from "@/components/InterviewCard";
import { interviews } from "@/lib/data";
import { Search, Calendar, Video, User } from "lucide-react";

const InterviewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  
  // Filter interviews based on search term and type filter
  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          interview.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || interview.type.toLowerCase().includes(typeFilter.toLowerCase());
    
    return matchesSearch && matchesType;
  });
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-12 bg-gradient-to-br from-white to-purple/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Mock Interviews</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practice and refine your interview skills through realistic mock interviews with AI, peers, or industry experts.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search interviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Interview Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="ai">AI Simulation</SelectItem>
                <SelectItem value="peer">Peer Interview</SelectItem>
                <SelectItem value="expert">Expert Review</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {filteredInterviews.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredInterviews.map(interview => (
                <motion.div
                  key={interview.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <InterviewCard {...interview} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">No interviews found matching your criteria.</p>
              <Button onClick={() => { setSearchTerm(""); setTypeFilter("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Interview Types Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Interview Options Explained</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white to-purple/10 rounded-xl p-6 shadow-md">
              <div className="bg-purple w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Video size={24} className="text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Simulation</h3>
              <p className="text-gray-600 mb-4">
                Practice with our AI-powered interviewer that adapts to your responses. Available 24/7 for unlimited practice.
              </p>
              <ul className="space-y-2 pl-5 list-disc text-gray-600">
                <li>Practice anytime, anywhere</li>
                <li>Instant feedback on your answers</li>
                <li>Covers common interview questions</li>
                <li>No scheduling required</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white to-softYellow/20 rounded-xl p-6 shadow-md">
              <div className="bg-softYellow w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <User size={24} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Peer Interview</h3>
              <p className="text-gray-600 mb-4">
                Connect with other job seekers for collaborative practice. Take turns interviewing each other and share feedback.
              </p>
              <ul className="space-y-2 pl-5 list-disc text-gray-600">
                <li>Real human interaction</li>
                <li>Experience both sides of the interview</li>
                <li>Receive peer perspectives</li>
                <li>Build your professional network</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white to-softGreen/20 rounded-xl p-6 shadow-md">
              <div className="bg-softGreen w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar size={24} className="text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Review</h3>
              <p className="text-gray-600 mb-4">
                Get interviewed by industry professionals who can provide detailed feedback and insider insights.
              </p>
              <ul className="space-y-2 pl-5 list-disc text-gray-600">
                <li>Professional-grade assessment</li>
                <li>Industry-specific feedback</li>
                <li>Personalized improvement plan</li>
                <li>Career advice from experts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interview Tips Section */}
      <section className="py-12 bg-gradient-to-br from-white to-peach/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Tips for Interview Success</h2>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">1</span>
                    </div>
                    <p className="text-gray-700">Research the company thoroughly before your interview.</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">2</span>
                    </div>
                    <p className="text-gray-700">Prepare specific examples that demonstrate your skills.</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">3</span>
                    </div>
                    <p className="text-gray-700">Practice your answers but avoid sounding rehearsed.</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">4</span>
                    </div>
                    <p className="text-gray-700">Dress professionally and arrive 10-15 minutes early.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">5</span>
                    </div>
                    <p className="text-gray-700">Maintain good eye contact and positive body language.</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">6</span>
                    </div>
                    <p className="text-gray-700">Ask thoughtful questions about the role and company.</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">7</span>
                    </div>
                    <p className="text-gray-700">Follow up with a thank-you email within 24 hours.</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">8</span>
                    </div>
                    <p className="text-gray-700">Record and review your mock interviews to identify areas for improvement.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button className="bg-sky text-white hover:bg-sky/90">
                  Download Complete Interview Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InterviewsPage;
