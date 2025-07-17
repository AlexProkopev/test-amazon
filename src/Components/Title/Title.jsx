function Title({ children }) {
  return (
    <h1
      className="
        w-full h-auto
        sm:w-[600px] sm:text-[35px] sm:leading-[35px]
        lg:w-[903px] lg:h-[77px] lg:text-[48px] lg:leading-[41px]
        font-bold text-center mx-auto
      "
    >
      {children}
    </h1>
  );
}


export default Title;
