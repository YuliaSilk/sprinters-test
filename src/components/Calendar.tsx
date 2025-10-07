import React from "react";
import ReactCalendar from "react-calendar";

const SELECTED_DAYS_OF_MONTH = [2, 4, 20, 24];
const isDateSelected = (date: Date): boolean => {
 return SELECTED_DAYS_OF_MONTH.includes(date.getDate());
};

const NavArrow: React.FC<{isNext?: boolean}> = ({isNext = false}) => (
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="8"
  height="14"
  viewBox="0 0 8 14"
  fill="none"
  className={isNext ? "" : "rotate-180"}
 >
  <path
   d="M1 1L7 7L1 13"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  />
 </svg>
);

const Calendar: React.FC = () => {
 const tileClassName = ({date, view}: {date: Date; view: string}) => {
  if (view !== "month") return null;

  if (isDateSelected(date)) {
   return "react-calendar__tile--active";
  }
  return null;
 };

 return (
  <div className="bg-white w-[294px]  ">
   <h3 className=" mb-6">Календар поїздок</h3>
   <div className="border-1 border-[#D6DDEB]  pt-6 pl-8 pr-6 pb-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
    <button className="w-full mb-6 px-4 py-3 border-1 border-primary text-primary  hover:bg-purple-50 transition font-semibold">
     + Купити квиток
    </button>

    <div className="w-full mx-auto ">
     <ReactCalendar
      onChange={() => {}}
      value={new Date(2021, 10, 1)}
      className="react-calendar"
      showNavigation={true}
      showNeighboringMonth={true}
      selectRange={false}
      prevLabel={<NavArrow />}
      nextLabel={<NavArrow isNext />}
      prev2Label={null}
      next2Label={null}
      tileClassName={tileClassName}
      formatShortWeekday={(_, date) => date.toLocaleString("en", {weekday: "short"})}
     />
    </div>
   </div>
  </div>
 );
};

export default Calendar;
