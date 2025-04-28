
interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, role, company, testimonial, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-start space-x-4">
        <img 
          src={image} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-600 italic mb-4">"{testimonial}"</p>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-gray-500 text-sm">{role}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
