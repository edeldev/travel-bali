export const Container = ({ children, className }) => {
  return (
    <section className={`py-20 px-5 md:px-0 ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};
