
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  lessons: number;
  duration: string;
  level: string;
}

const CourseCard = ({ id, title, description, image, lessons, duration, level }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white text-sky px-2 py-1 rounded-full text-xs font-medium">
          {level}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{lessons} Lessons</span>
          <span>{duration}</span>
        </div>
        <Link to={`/study/${id}`}>
          <Button className="w-full bg-sky hover:bg-sky/80">Start Learning</Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
