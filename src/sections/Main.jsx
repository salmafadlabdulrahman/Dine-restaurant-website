import {
  enjoyablePlaceMobile,
  enjoyablePlaceTablet,
  enjoyablePlaceDesktop,
  locallySourcedMobile,
  locallySourcedTablet,
  locallySourcedDesktop,
} from "../index";

//Patterns
import patternImg from "../assets/patterns/pattern-divide.svg";
import topRightPattern from "../assets/patterns/pattern-curve-top-right.svg";
import topLeftPattern from "../assets/patterns/pattern-curve-top-left.svg";
import linePatterns from "../assets/patterns/pattern-lines.svg";

function Main() {
  return (
    <main className="text-center absolute top-[670px] z-50 md:top-[900px] w-full xl:top-[780px]">
      <div className="our-restaurant xl:flex xl:w-[80%] xl:mx-auto xl:gap-[6em] xl:items-center">
        <img
          src={enjoyablePlaceMobile}
          alt="green forest"
          className="block md:hidden mx-auto top-[70px] main-section-img"
        />
        <img
          src={enjoyablePlaceTablet}
          alt="green forest"
          className="hidden md:block xl:hidden mx-auto main-section-img"
        />
        <img
          src={enjoyablePlaceDesktop}
          alt="green forest"
          className="hidden xl:block mx-auto main-section-img"
        />
        <img
          src={topRightPattern}
          className="hidden md:block z-[-222px] absolute h-[310px] top-[200px] right-[50%] w-[50%]"
        />
        <div className="relative py-9 xl:text-left">
          <img
            src={patternImg}
            alt="pattern img"
            className="mx-auto mt-4 xl:m-0"
          />
          <h2 className="text-[#242B37] font-bold text-[2em] pt-8 py-3 leading-10 tracking-tight md:text-[3em] md:leading-[1em]">
            Enjoyable place <br />
            for all the family
          </h2>
          <p className="text-[#242B37] pt-5 w-[80%] mx-auto md:text-[1.3em] md:w-[60%] xl:m-0 xl:w-[80%]">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>

      <div className="our-restaurant mx-auto mt-10 relative w-[100%] ">
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
        <img
          src={linePatterns}
          className="hidden md:block absolute top-[230px] left-[50%] transform translate-x-[115%]"
        />
        <img
          src={topLeftPattern}
          className="hidden md:block absolute h-[310px] top-[400px] left-[50%] w-[50%] z-[-2222]"
        />
        <div>
          <img src={patternImg} alt="pattern img" className="mx-auto mt-12" />
          <h2 className="text-[#242B37] font-bold text-[2em] pt-8 leading-10 tracking-tight md:text-[3em] md:leading-[1em]">
            The most locally <br />
            sourced food
          </h2>
          <p className="text-[#242B37] pt-5 w-[80%] mx-auto md:text-[1.2em] md:w-[60%]">
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
