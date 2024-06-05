import React from "react";

type printComponent = {
  name: string;
  currentDate: string;
  newDate: string;
};

const ComponentToPrint: React.FC<printComponent> = React.forwardRef(
  ({ name, currentDate, newDate }, ref) => {
    return (
      <div ref={ref} className='p-0 m-0 max-w-[50mm] max-h-[50mm] text-sm '>
        <p className='text-lg'> {name}</p>
        <p>Preped on:</p>
        {currentDate}

        <p>Out on:</p>
        {newDate}
      </div>
    );
  }
);
ComponentToPrint.displayName = "ComponentToPrint";
export default ComponentToPrint;
