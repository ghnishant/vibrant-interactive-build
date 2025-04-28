
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface InterviewCardProps {
  id: string;
  title: string;
  description: string;
  type: "AI Simulation" | "Peer Interview" | "Expert Review";
  duration: number; // in minutes
  availableSlots: number;
}

const InterviewCard = ({ id, title, description, type, duration, availableSlots }: InterviewCardProps) => {
  // Set color based on interview type
  const typeColor = {
    "AI Simulation": "bg-purple text-purple-700",
    "Peer Interview": "bg-softYellow text-amber-700",
    "Expert Review": "bg-softGreen text-green-700"
  }[type];
  
  return (
    <div className="bg-white rounded-xl p-5 shadow-md card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${typeColor}`}>
          {type}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
        <div className="flex items-center space-x-1">
          <Calendar size={14} />
          <span>{duration} mins</span>
        </div>
        <span>{availableSlots} {availableSlots === 1 ? "slot" : "slots"} available</span>
      </div>
      
      <Link to={`/interviews/${id}`}>
        <Button className="w-full bg-sky hover:bg-sky/80">
          Schedule Now
        </Button>
      </Link>
    </div>
  );
};

export default InterviewCard;
