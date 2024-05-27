import React from "react";

const ComponentToPrint = React.forwardRef(
  ({ name, currentDate, newDate }, ref) => {
    return (
      <div ref={ref} className='p-0 m-0 max-w-[50mm] max-h-[50mm] text-sm '>
        <p className='text-lg'> {name}</p>
        <p>Preped on:</p>
        {currentDate}

        <p>Expires on:</p>
        {newDate}
      </div>
    );
  }
);

export default ComponentToPrint;
