
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Book,
  Video,
  User,
  Menu,
  X,
  Search,
  Home
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-sky to-purple flex items-center justify-center">
              <Book size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl">JobPrep</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="link-underline text-gray-700 hover:text-sky flex items-center gap-1">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/study" className="link-underline text-gray-700 hover:text-sky flex items-center gap-1">
            <Book size={18} />
            <span>Study</span>
          </Link>
          <Link to="/practice" className="link-underline text-gray-700 hover:text-sky flex items-center gap-1">
            <Search size={18} />
            <span>Practice</span>
          </Link>
          <Link to="/interviews" className="link-underline text-gray-700 hover:text-sky flex items-center gap-1">
            <Video size={18} />
            <span>Interviews</span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-sky text-sky hover:bg-sky hover:text-white">
            Sign In
          </Button>
          <Button className="bg-sky text-white hover:bg-sky/90">
            Sign Up
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-2 pb-4 bg-white border-b border-gray-200 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/study" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Book size={18} />
              <span>Study</span>
            </Link>
            <Link 
              to="/practice" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Search size={18} />
              <span>Practice</span>
            </Link>
            <Link 
              to="/interviews" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Video size={18} />
              <span>Interviews</span>
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <Button variant="outline" className="border-sky text-sky hover:bg-sky hover:text-white">
                Sign In
              </Button>
              <Button className="bg-sky text-white hover:bg-sky/90">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
