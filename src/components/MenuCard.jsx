function MenuCard({name, description, mobileImg, desktopImg, index}) {
  return (
    <div className="pt-[4em] px-3">
      <img src={mobileImg} className="mx-auto md:hidden" />
      <img src={desktopImg} className="hidden md:block" />
      <div>
        <h4 className="font-extrabold mt-5 text-[1.2em]">
          {name}
        </h4>
        <p className="w-[80%] mx-auto pt-3 pb-[2em]">
          {description}
        </p>
        <p className={`w-[95%] ${index !== "" && `border-[0.3px] border-[#333333]`} mx-auto `}></p>
      </div>
    </div>
  );
}

export default MenuCard;