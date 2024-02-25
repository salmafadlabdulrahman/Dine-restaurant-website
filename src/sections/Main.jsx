import {
  enjoyablePlaceMobile,
  enjoyablePlaceTablet,
  enjoyablePlaceDesktop,
  locallySourcedMobile,
} from "../index";
import patternImg from "../assets/patterns/pattern-divide.svg";

function Main() {
  return (
    <main className="text-center absolute top-[670px] z-50">
      <div className="our-restaurant ">
        <img
          src={enjoyablePlaceMobile}
          alt="green forest"
          className="block md:hidden mx-auto top-[70px]"
        />
        <img
          src={enjoyablePlaceTablet}
          alt="green forest"
          className="hidden md:block lg:hidden"
        />
        <img
          src={enjoyablePlaceDesktop}
          alt="green forest"
          className="hidden lg:block"
        />
        <div className="relative">
          <img src={patternImg} alt="pattern img" className="mx-auto" />
          <h2>Enjoyable place for all the family</h2>
          <p>
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
      <div className="our-restaurant mx-auto">
        <img
          src={locallySourcedMobile}
          alt="a man is cooking"
          className="mx-auto"
        />
        <div>
          <img src={patternImg} alt="pattern img" className="mx-auto" />
          <h2>The most locally sourced food</h2>
          <p>
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
