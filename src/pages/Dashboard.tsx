
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import { courses, practiceTests, interviews, userProgress } from "@/lib/data";
import { Book, Video, Award, Calendar, Clock, CheckCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Get courses in progress
  const coursesInProgress = Object.keys(userProgress.courseProgress)
    .map(id => {
      const course = courses.find(c => c.id === id);
      return course ? { ...course, progress: userProgress.courseProgress[id as keyof typeof userProgress.courseProgress] } : null;
    })
    .filter((course): course is (typeof courses[0] & { progress: number }) => course !== null);
  
  // Get completed courses
  const completedCourses = courses.filter(course => userProgress.completedCourses.includes(course.id));
  
  // Get completed tests
  const completedTests = practiceTests.filter(test => userProgress.completedTests.includes(test.id));
  
  // Get completed interviews
  const completedInterviews = interviews.filter(interview => userProgress.completedInterviews.includes(interview.id));
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
              <p className="text-gray-600">Track your progress and continue your job preparation journey</p>
            </div>
            
            <Card className="mt-4 sm:mt-0 bg-gradient-to-r from-sky/10 to-purple/10 border-none shadow-sm">
              <CardContent className="p-4 flex items-center space-x-2">
                <Award size={24} className="text-sky" />
                <div>
                  <p className="text-sm text-gray-600">Your Streak</p>
                  <p className="font-bold text-lg">7 days</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Book size={20} className="mr-2 text-sky" />
                  Study Progress
                </CardTitle>
                <CardDescription>Courses completed and in progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-medium">{completedCourses.length}/{courses.length}</span>
                </div>
                <ProgressBar value={Math.round((completedCourses.length / courses.length) * 100)} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Search size={20} className="mr-2 text-purple" />
                  Practice Tests
                </CardTitle>
                <CardDescription>Tests attempted and passed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-medium">{completedTests.length}/{practiceTests.length}</span>
                </div>
                <ProgressBar value={Math.round((completedTests.length / practiceTests.length) * 100)} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Video size={20} className="mr-2 text-peach" />
                  Interviews
                </CardTitle>
                <CardDescription>Mock interviews completed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-medium">{completedInterviews.length}/{interviews.length}</span>
                </div>
                <ProgressBar value={Math.round((completedInterviews.length / interviews.length) * 100)} />
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="courses">
            <TabsList className="mb-6">
              <TabsTrigger value="courses">In Progress</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses">
              <h2 className="text-xl font-bold mb-4">Courses in Progress</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coursesInProgress.map(course => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-lg bg-sky/10 flex items-center justify-center mr-4">
                            <Book size={20} className="text-sky" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold">{course.title}</h3>
                              <span className="text-sm text-gray-500">{course.duration}</span>
                            </div>
                            <ProgressBar value={course.progress} label="Progress" />
                            <div className="mt-4">
                              <Link to={`/study/${course.id}`}>
                                <Button className="bg-sky text-white hover:bg-sky/90">
                                  Continue Learning
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                
                {coursesInProgress.length === 0 && (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-gray-500 mb-4">You don't have any courses in progress.</p>
                    <Link to="/study">
                      <Button className="bg-sky text-white hover:bg-sky/90">
                        Browse Courses
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
              
              <h2 className="text-xl font-bold my-6">Recent Activity</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center mr-4">
                        <Search size={18} className="text-purple" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium">Verbal Ability Assessment</p>
                        <p className="text-gray-500 text-sm">Completed practice test with score: 85%</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        2 days ago
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-peach/10 flex items-center justify-center mr-4">
                        <Video size={18} className="text-peach" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium">AI-Powered Basic Interview</p>
                        <p className="text-gray-500 text-sm">Completed mock interview</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        3 days ago
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center mr-4">
                        <Book size={18} className="text-sky" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium">Aptitude Fundamentals</p>
                        <p className="text-gray-500 text-sm">Completed course</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        5 days ago
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="recommended">
              <h2 className="text-xl font-bold mb-4">Recommended For You</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recommended Course</CardTitle>
                    <CardDescription>Based on your progress and goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-sky/10 flex items-center justify-center mr-4">
                        <Book size={20} className="text-sky" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Technical Interview Crash Course</h3>
                        <p className="text-gray-500 text-sm mb-4">Prepare for technical questions with data structures and algorithms.</p>
                        <Link to={`/study/tech-interview-prep`}>
                          <Button className="bg-sky text-white hover:bg-sky/90">
                            Start Course
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recommended Practice Test</CardTitle>
                    <CardDescription>Challenge yourself with this test</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center mr-4">
                        <Search size={20} className="text-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Logical Reasoning Test</h3>
                        <p className="text-gray-500 text-sm mb-4">Improve your logical thinking and problem-solving skills.</p>
                        <Link to={`/practice/logical-reasoning`}>
                          <Button className="bg-purple text-white hover:bg-purple/90">
                            Take Test
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Complete Your Learning Path</CardTitle>
                    <CardDescription>Software Engineering career path</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <CheckCircle size={16} className="text-green-600" />
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium">Aptitude Fundamentals</p>
                          <p className="text-gray-500 text-sm">Completed</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-sky/10 flex items-center justify-center mr-4 relative">
                          <div className="absolute inset-0 rounded-full border-2 border-sky border-dashed animate-spin" style={{ animationDuration: '8s' }}></div>
                          <span className="text-sky text-xs font-medium">45%</span>
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium">Technical Interview Crash Course</p>
                          <p className="text-gray-500 text-sm">In progress</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                          <span className="text-gray-400 text-xs font-medium">0%</span>
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium">System Design for Interviews</p>
                          <p className="text-gray-500 text-sm">Not started</p>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="bg-sky text-white hover:bg-sky/90">
                          View Full Learning Path
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="completed">
              <h2 className="text-xl font-bold mb-4">Your Achievements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Book size={20} className="mr-2 text-sky" />
                      Completed Courses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {completedCourses.length > 0 ? (
                      <ul className="space-y-3">
                        {completedCourses.map(course => (
                          <li key={course.id} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-green-600" />
                            <span>{course.title}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500">No courses completed yet.</p>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Search size={20} className="mr-2 text-purple" />
                      Completed Tests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {completedTests.length > 0 ? (
                      <ul className="space-y-3">
                        {completedTests.map(test => (
                          <li key={test.id} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-green-600" />
                            <span>{test.title}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500">No tests completed yet.</p>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Video size={20} className="mr-2 text-peach" />
                      Completed Interviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {completedInterviews.length > 0 ? (
                      <ul className="space-y-3">
                        {completedInterviews.map(interview => (
                          <li key={interview.id} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-green-600" />
                            <span>{interview.title}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500">No interviews completed yet.</p>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Certificates</CardTitle>
                    <CardDescription>Showcase these on your resume and LinkedIn profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-md p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">Aptitude Fundamentals</h3>
                            <p className="text-gray-500 text-sm">Completed on April 20, 2025</p>
                          </div>
                          <Button variant="outline" className="ml-2 text-sky border-sky hover:bg-sky hover:text-white">
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule">
              <h2 className="text-xl font-bold mb-4">Your Schedule</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-lg">Upcoming Events</h3>
                    <Button variant="outline" className="text-sky border-sky hover:bg-sky hover:text-white">
                      <Calendar size={16} className="mr-2" />
                      Add Event
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start p-4 border border-gray-200 rounded-md">
                      <div className="w-12 h-12 bg-peach/20 rounded-md flex flex-col items-center justify-center mr-4 text-peach">
                        <span className="text-sm font-bold">APR</span>
                        <span className="text-lg font-bold">30</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Technical Interview with Expert</h4>
                            <p className="text-gray-500 text-sm">Practice with an industry expert in your technical domain.</p>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock size={14} className="mr-1" />
                            <span>2:00 PM • 60 mins</span>
                          </div>
                        </div>
                        <div className="flex mt-3">
                          <Button variant="outline" size="sm" className="text-sm">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm" className="ml-2 text-sm">
                            Cancel
                          </Button>
                          <Button size="sm" className="ml-auto bg-sky text-white hover:bg-sky/90 text-sm">
                            Join Meeting
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 border border-gray-200 rounded-md">
                      <div className="w-12 h-12 bg-purple/20 rounded-md flex flex-col items-center justify-center mr-4 text-purple">
                        <span className="text-sm font-bold">MAY</span>
                        <span className="text-lg font-bold">03</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Mock Placement Aptitude Test</h4>
                            <p className="text-gray-500 text-sm">Scheduled practice test</p>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock size={14} className="mr-1" />
                            <span>10:00 AM • 90 mins</span>
                          </div>
                        </div>
                        <div className="flex mt-3">
                          <Button variant="outline" size="sm" className="text-sm">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm" className="ml-2 text-sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-6 text-gray-500">
                    <p>Need to set your study schedule?</p>
                    <Button variant="link" className="text-sky">Create a Study Plan</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
