"use client";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

const PrintButton = ({ name, currentDate, newDate, id }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "@page {size: 51mm 51mm; margin:0;}",
  });

  return (
    <>
      <div className='invisible'>
        <ComponentToPrint
          ref={componentRef}
          name={name}
          currentDate={currentDate}
          newDate={newDate}
        />
      </div>
      <Button onClick={() => handlePrint()}>Print</Button>
    </>
  );
};

export default PrintButton;
