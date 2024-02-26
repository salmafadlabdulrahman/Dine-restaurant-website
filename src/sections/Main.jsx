import {
  enjoyablePlaceMobile,
  enjoyablePlaceTablet,
  enjoyablePlaceDesktop,
  locallySourcedMobile,
  locallySourcedTablet,
  locallySourcedDesktop
} from "../index";
import patternImg from "../assets/patterns/pattern-divide.svg";

function Main() {
  return (
    <main className="text-center absolute top-[670px] z-50">
      <div className="our-restaurant">
        <img
          src={enjoyablePlaceMobile}
          alt="green forest"
          className="block md:hidden mx-auto top-[70px] main-section-img"
        />
        <img
          src={enjoyablePlaceTablet}
          alt="green forest"
          className="hidden md:block xl:hidden main-section-img"
        />
        <img
          src={enjoyablePlaceDesktop}
          alt="green forest"
          className="hidden xl:block main-section-img"
        />
        <div className="relative py-9">
          <img src={patternImg} alt="pattern img" className="mx-auto mt-4" />
          <h2 className="text-[#242B37] font-bold text-[2em] pt-8 py-3 leading-10 tracking-tight">
            Enjoyable place <br />
            for all the family
          </h2>
          <p className="text-[#242B37] pt-5 w-[80%] mx-auto">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
      <div className="our-restaurant mx-auto mt-10">
        <img
          src={locallySourcedMobile}
          alt="a man is cooking"
          className="mx-auto md:hidden main-section-img"
        />
        <img
          src={locallySourcedTablet}
          alt="a man is cooking"
          className="hidden md:block xl:hidden main-section-img mx-auto main-section-img"
        />
        <img
          src={locallySourcedDesktop}
          alt="a man is cooking"
          className="mx-auto hidden xl:block main-section-img"
        />
        <div>
          <img src={patternImg} alt="pattern img" className="mx-auto mt-12" />
          <h2 className="text-[#242B37] font-bold text-[2em] pt-8 leading-10 tracking-tight">
            The most locally <br />
            sourced food
          </h2>
          <p className="text-[#242B37] pt-5 w-[80%] mx-auto pb-[5em]">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
