const Cover = ({ img, title, details }) => {
  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" bg-[#15151599] opacity-90 p-12 md:w-[800px]  h-[200px]">
            <h1 className="mb-5 md:text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
