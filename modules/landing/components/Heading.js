const Heading = ({ title, subtitle }) => (
  <div className="flex flex-col space-y-4 items-center mx-auto text-center mb-8 max-w-md">
    <h1 className="text-5xl font-black">{title}</h1>
    <h3 className="text-lg">{subtitle}</h3>
  </div>
);

export default Heading;
