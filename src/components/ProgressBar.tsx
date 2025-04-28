
interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
}

const ProgressBar = ({ value, label }: ProgressBarProps) => {
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1 text-sm">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-sky transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
