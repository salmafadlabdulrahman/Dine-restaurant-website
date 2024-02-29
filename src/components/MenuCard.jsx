function MenuCard({ name, description, mobileImg, desktopImg, index }) {
  return (
    <div className="pt-[4em] px-3  food-card border border-blue-900 ">
      <div className="recipe-info md:flex md:items-center justify-center  md:w-[70%] md:mx-auto">
        <img src={mobileImg} className="mx-auto md:hidden" />
        <img
          src={desktopImg}
          className="hidden md:block border border-violet-800"
        />
        <div>
          <h4 className="font-extrabold mt-5 text-[1.2em]">{name}</h4>
          <p className="w-[75%] mx-auto pt-3 pb-[2em] md:w-[50%]">
            {description}
          </p>
          <p
            className={`w-[95%] ${
              index !== "" && `border-[0.3px] border-[#333333]`
            } mx-auto md:w-[full]`}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
