import logo from "../assets/logo.svg";
import { headerBgMobile, headerBgTablet, headerBgDesktop } from "../index";
function Header() {
  return (
    <header className="header relative bg-[#111111]">
      <div className="header-img z-0 w-full">
        <img
          src={headerBgMobile}
          className="block md:hidden mx-auto"
          alt="pasta plate"
        />
        <img
          src={headerBgTablet}
          alt="pasta plate"
          className="hidden md:block xl:hidden mx-auto"
        />
        <img
          src={headerBgDesktop}
          alt="pasta plate"
          className="hidden xl:block mx-auto w-full"
        />
      </div>

      <div className="header-content z-10 absolute top-[230px] left-0 right-0 text-center px-5 xl:text-left  xl:top-[10%] xl:left-[100px]">
        <img
          src={logo}
          width={80}
          alt="dine website logo"
          className="mx-auto md:mt-[9em] sm:w-[80px] md:w-[105px] xl:m-0"
        />{" "}
        <div className="header-content mt-[3em] xl:mt-[7em] ">
          <h1 className="text-white font-League p-0 text-[2em] font-light tracking-tight leading-[1.2] sm:mt-0 md:text-[3em] md:p-0 xl:text-[4.8em]">
            Exquisite dining <br />
            since 1989
          </h1>
          <p className="text-white mt-[1em] px-2 w-3/4 mx-auto md:text-[1.2em] md:pt-4 font-medium lg:w-1/2 xl:text-left xl:m-0 xl:w-[40%] xl:px-0 xl:mt-5">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <button className="uppercase mt-12 text-white font-semibold tracking-[2px] text-[1.1em] border-2 border-white w-[245px] h-[70px]">
            Book a table
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;