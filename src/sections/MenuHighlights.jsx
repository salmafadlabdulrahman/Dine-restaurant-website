import patternImg from "../assets/patterns/pattern-divide.svg";
import MenuCard from "../components/MenuCard";
import { menu } from "../index";

function MenuHighlights() {
  return (
    <div className="bg-[#111111] text-white pt-[4em] px-3 xl:flex">
      <div className="menu-hightlight-container">
        <img src={patternImg} className="mx-auto md:mt-3" />
        <h3 className="mt-6 text-[1.8em] font-extrabold md:text-[2.9em] md:font-bold md:leading-[1em] md:mt-10">
          A few highlights from <br /> our menu
        </h3>
        <p className="mt-3 w-[85%] mx-auto md:w-[55%] text-[1.2em] md:pb-[4em] md:mt-5">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favorites. Our menu is revamped every season.
        </p>
      </div>

      <div className="menu-cards-wrapper">
        {menu.map((item, index) => (
          <MenuCard
            key={index}
            name={item.name}
            description={item.description}
            mobileImg={item.mobileImg}
            desktopImg={item.desktopImg}
            index={index !== menu.length - 1 ? index : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuHighlights;
