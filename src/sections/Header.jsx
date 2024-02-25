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
          className="hidden md:block lg:hidden mx-auto"
        />
        <img
          src={headerBgDesktop}
          alt="pasta plate"
          className="hidden lg:block mx-auto w-full"
        />
      </div>

      <div className="header-content z-10 absolute top-[230px] text-center px-5">
        <img
          src={logo}
          alt="dine website logo"
          width={80}
          className="mx-auto"
        />
        <div className="header-content ">
          <h1 className="text-white font-League py-10 text-[2.1em] font-light tracking-tight leading-[1.2]">
            Exquisite dining <br />
            since 1989
          </h1>
          <p className="text-white px-2">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <button className="uppercase mt-12 text-white font-semibold tracking-[2px] text-lg border-2 border-white w-[245px] h-[70px]">
            Book a table
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;