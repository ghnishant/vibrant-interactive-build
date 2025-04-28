
import { Link } from "react-router-dom";
import { Book, Mail, HelpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-sky to-purple flex items-center justify-center">
                <Book size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl">JobPrep</span>
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              Your comprehensive platform for job preparation, interview skills, and career growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/study" className="text-gray-500 hover:text-sky">Study Materials</Link></li>
              <li><Link to="/practice" className="text-gray-500 hover:text-sky">Practice Tests</Link></li>
              <li><Link to="/interviews" className="text-gray-500 hover:text-sky">Mock Interviews</Link></li>
              <li><Link to="/blog" className="text-gray-500 hover:text-sky">Career Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-sky">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-500 hover:text-sky">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-sky">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-sky">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="flex items-start space-x-2 mb-2">
              <Mail size={18} className="text-sky mt-1" />
              <span className="text-gray-500">support@jobprep.com</span>
            </div>
            <div className="flex items-start space-x-2">
              <HelpCircle size={18} className="text-sky mt-1" />
              <span className="text-gray-500">Need help? Visit our <Link to="/help" className="text-sky hover:underline">help center</Link></span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} JobPrep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
