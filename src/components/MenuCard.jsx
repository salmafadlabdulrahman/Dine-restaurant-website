function MenuCard({ name, description, mobileImg, desktopImg, index }) {
  return (
    <div className="pt-[4em] px-3 food-card md:pt-0">
      <div className="recipe-info-wrapper ">
        <div className="md:w-[80%] md:mx-auto lg:w-[60%]">
          <div className="md:flex md:items-center">
            <div className="md:ml-5">
              <img src={mobileImg} className="mx-auto md:hidden" />
              <img src={desktopImg} className="hidden md:block " />
            </div>

            <div>
              <h4 className="font-extrabold mt-5 text-[1.2em] md:mt-0">{name}</h4>
              <p className="w-[75%] mx-auto pt-3 pb-[2em] md:w-[50%] md:pb-0">
                {description}
              </p>
            </div>
          </div>
          <p
            className={`w-[95%] ${
              index !== "" && `border-[0.3px] border-[#333333]`
            } mx-auto md:w-[full]  `}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
//border border-blue-900
/*<div className="recipe-info-wrapper md:flex md:items-center justify-center md:w-[full] md:mx-auto"> */

/*border border-violet-950  */