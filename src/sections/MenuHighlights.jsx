import patternImg from "../assets/patterns/pattern-divide.svg";

function MenuHighlights() {
  return (
    <div className="bg-[#111111] text-white pt-[4em] px-3">
      <img src={patternImg} className="mx-auto" />
      <h3 className="mt-6 text-[1.8em] font-extrabold">A few highlights from <br/> our menu</h3>
      <p className="mt-3 w-[85%] mx-auto">
        We cater for all dietary requirements, but here’s a glimpse at some of
        our diner’s favorites. Our menu is revamped every season.
      </p>
    </div>
  );
}

export default MenuHighlights;

/*--tw-bg-opacity: 1;
    background-color: rgb(17 17 17 / var(--tw-bg-opacity));*/
