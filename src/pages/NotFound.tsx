
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple/10 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="inline-block rounded-full bg-purple/10 p-6 mb-4">
            <Search size={60} className="text-sky" />
          </div>
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for isn't in our curriculum.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/">
              <Button className="bg-sky text-white hover:bg-sky/90 w-full sm:w-auto">
                <Home size={18} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-sky text-sky hover:bg-sky hover:text-white w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </Button>
          </div>
        </div>
        
        <p className="text-gray-500">
          Need help finding something? Visit our <Link to="/help" className="text-sky hover:underline">help center</Link>.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
