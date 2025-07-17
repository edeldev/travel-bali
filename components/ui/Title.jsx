export const Title = ({ label, color, className }) => {
  return (
    <h2 className={`text-5xl font-semibold ${color} ${className}`}>{label}</h2>
  );
};
