import React, { forwardRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PrintButton from "./PrintButton";

const DisplayLabelCard = ({ name, hold, unique }) => {
  let dt = new Date();
  dt.setDate(dt.getDate() + hold);
  let currentDate = Date.now();
  let cd = new Date(currentDate).toLocaleDateString();
  let newdate = "";
  if (dt.toLocaleDateString() === new Date(currentDate).toLocaleDateString()) {
    newdate = "End of Day";
  } else {
    newdate = dt.toLocaleDateString();
  }
  return (
    <Card className='min-w-[250px]'>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Today Plus {hold}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Preped on:
          <br />
          {cd}
        </p>

        <p className='pt-3'>
          Out on:
          <br />
          {newdate}
        </p>
      </CardContent>
      <CardFooter>
        <PrintButton
          name={name}
          currentDate={cd}
          newDate={newdate}
          id={unique}
        />
      </CardFooter>
    </Card>
  );
};
export default DisplayLabelCard;
