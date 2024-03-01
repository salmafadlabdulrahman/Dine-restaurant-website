function MenuCard({ name, description, mobileImg, desktopImg, index }) {
  return (
    <div className="pt-[4em] px-3 food-card md:pt-0">
      <div className="recipe-info-wrapper ">
        <div className="md:w-[600px] md:mx-auto lg:w-[60%]">
          <div className="md:flex md:items-center">
            <div className="md:mt-6">
              <img src={mobileImg} className="mx-auto md:hidden" />
              <img src={desktopImg} className="hidden md:block " width={140} />
            </div>

            <div className="md:text-left md:flex items-start">
              <div className="hidden md:block md:w-[8%] border-[0.3px] border-[#9E7F66] md:self-center"></div>
              <div className="pl-[1em] ">
                <h4 className="font-extrabold mt-5 text-[1.2em] md:mt-0">
                  {name}
                </h4>
                <p className="w-[75%] mx-auto pt-3 pb-[2em] md:w-[65%] md:pb-0 md:m-0 md:pt-1">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <p
            className={`w-[full] ${
              index !== "" && `border-[0.3px] border-[#333333] md:mt-6`
            } mx-auto `}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
