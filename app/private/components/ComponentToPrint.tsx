import React from "react";

type printComponent = {
  name: string;
  currentDate: string;
  newDate: string;
};

const ComponentToPrint = React.forwardRef<HTMLDivElement, printComponent>(
  ({ name, currentDate, newDate }: printComponent, ref) => {
    return (
      <div ref={ref} className='w-[100%] h-[100%] p-2 text-sm '>
        <p className='text-lg text-center'> {name}</p>
        <br />
        <p>Preped on:</p>
        <p className='text-center'>{currentDate}</p>
        <br />
        <p>Out on:</p>
        <p className='text-center'>{newDate}</p>
      </div>
    );
  }
);
ComponentToPrint.displayName = "ComponentToPrint";
export default ComponentToPrint;
