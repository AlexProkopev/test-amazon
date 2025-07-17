const SliderDots = ({ total, current, onClick }) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          className={`w-2 h-1 lg:w-4 lg:h-4 rounded-full mt-[39px] ${
            current === i ? "bg-black" : "bg-[#B6B1B1]"
          }`}
        />
      ))}
    </div>
  );
};

export default SliderDots;
