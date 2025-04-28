
import { useState } from "react";
import { Link } from "react-router-dom";
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
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/data";
import { Search } from "lucide-react";

const StudyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  
  // Filter courses based on search term and level filter
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === "all" || course.level.toLowerCase() === levelFilter.toLowerCase();
    
    return matchesSearch && matchesLevel;
  });
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-12 bg-gradient-to-br from-white to-purple/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Study Materials</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive collection of study materials designed to enhance your knowledge and skills.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {filteredCourses.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredCourses.map(course => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">No courses found matching your criteria.</p>
              <Button onClick={() => { setSearchTerm(""); setLevelFilter("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Request Section */}
      <section className="py-12 bg-gradient-to-r from-peach/20 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-gray-600 mb-6">
              Let us know what topics you'd like to see. We regularly update our content based on user requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="Suggest a topic" className="flex-grow" />
              <Button className="bg-sky text-white hover:bg-sky/90">
                Submit Request
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StudyPage;
