import { events } from "../index";

function FamilyGathering() {
  return (
    <div className="flex flex-col justify-center items-center py-[7em]">
      <img
        src={events[0].mobileImg}
        width={"90%"}
        className="main-section-img"
      />
      <div>
        <div className="btns flex flex-col mt-10">
          <button className="uppercase tracking-[3px] font-semibold text-[1em] mt-2">
            Family Gathering
          </button>
          <div className="mx-auto w-[15%] border-[0.3px] border-[#9E7F66] mt-1"></div>
          <button className="uppercase tracking-[3px] font-semibold text-[1em] mt-2 text-[#4C4C4C]">
            Special Events
          </button>
        </div>

        <div className="px-3">
          <h2 className="mt-5 text-[2em] font-bold text-[#242B37] tracking-[-1px]">
            Family Gathering
          </h2>
          <p className="px-2 mt-2 text-[#242B37]">
            We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            experience for all.
          </p>
          <button className="mt-10 uppercase bg-black text-white w-[250px] h-[65px] tracking-[3px] font-semibold">
            Book A Table
          </button>
        </div>
      </div>
    </div>
  );
}

export default FamilyGathering;
