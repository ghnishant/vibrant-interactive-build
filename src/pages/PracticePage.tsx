
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
import PracticeCard from "@/components/PracticeCard";
import { practiceTests } from "@/lib/data";
import { Search, Clock } from "lucide-react";

const PracticePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  
  // Filter tests based on search term and difficulty filter
  const filteredTests = practiceTests.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          test.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === "all" || test.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
    
    return matchesSearch && matchesDifficulty;
  });
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-12 bg-gradient-to-br from-white to-softGreen/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Practice Tests</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Test your knowledge and skills with our interactive practice assessments designed to help you prepare for real interviews.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search tests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {filteredTests.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredTests.map(test => (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <PracticeCard {...test} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">No practice tests found matching your criteria.</p>
              <Button onClick={() => { setSearchTerm(""); setDifficultyFilter("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Practice Tips Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Tips for Effective Practice</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white to-purple/10 p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-purple p-2 rounded-lg mr-4">
                    <Clock size={24} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Time Management</h3>
                    <p className="text-gray-600">
                      Practice with a timer to simulate real test conditions and improve your speed.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-10 list-disc text-gray-600">
                  <li>Allocate time based on point value</li>
                  <li>Don't get stuck on difficult questions</li>
                  <li>Leave time to review your answers</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white to-peach/10 p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-peach p-2 rounded-lg mr-4">
                    <Search size={24} className="text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Review Mistakes</h3>
                    <p className="text-gray-600">
                      Carefully analyze questions you got wrong to learn from your mistakes.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-10 list-disc text-gray-600">
                  <li>Understand why your answer was incorrect</li>
                  <li>Create flashcards for difficult concepts</li>
                  <li>Revisit problem areas in future practice sessions</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white to-softYellow/20 p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-softYellow p-2 rounded-lg mr-4">
                    <Search size={24} className="text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Progressive Difficulty</h3>
                    <p className="text-gray-600">
                      Start with easier tests and gradually move to more challenging ones.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-10 list-disc text-gray-600">
                  <li>Build confidence with basic concepts first</li>
                  <li>Track your improvement over time</li>
                  <li>Challenge yourself with harder tests as you improve</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white to-softGreen/20 p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-softGreen p-2 rounded-lg mr-4">
                    <Clock size={24} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Regular Practice</h3>
                    <p className="text-gray-600">
                      Consistency is key. Set a regular practice schedule to build skills over time.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-10 list-disc text-gray-600">
                  <li>Schedule dedicated practice sessions</li>
                  <li>Mix different types of questions</li>
                  <li>Take breaks to avoid burnout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PracticePage;
