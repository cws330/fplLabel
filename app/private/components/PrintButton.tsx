"use client";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

type printType = {
  name: string;
  currentDate: string;
  newDate: string;
  id: number;
};

const PrintButton: React.FC<printType> = ({
  name,
  currentDate,
  newDate,
  id,
}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "@page {size: 100mm 150mm; margin:0;}",
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
