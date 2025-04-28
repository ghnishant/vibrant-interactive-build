
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const FeatureCard = ({ title, description, icon, color }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md card-hover">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
