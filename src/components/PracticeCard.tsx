
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface PracticeCardProps {
  id: string;
  title: string;
  description: string;
  questions: number;
  duration: number; // in minutes
  difficulty: "Easy" | "Medium" | "Hard";
}

const PracticeCard = ({ id, title, description, questions, duration, difficulty }: PracticeCardProps) => {
  // Set color based on difficulty
  const difficultyColor = {
    Easy: "bg-softGreen text-green-700",
    Medium: "bg-softYellow text-amber-700",
    Hard: "bg-peach text-orange-700"
  }[difficulty];
  
  return (
    <div className="bg-white rounded-xl p-5 shadow-md card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColor}`}>
          {difficulty}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
        <span>{questions} Questions</span>
        <div className="flex items-center space-x-1">
          <Clock size={14} />
          <span>{duration} mins</span>
        </div>
      </div>
      
      <Link to={`/practice/${id}`}>
        <Button variant="outline" className="w-full border-sky text-sky hover:bg-sky hover:text-white">
          Start Practice
        </Button>
      </Link>
    </div>
  );
};

export default PracticeCard;
