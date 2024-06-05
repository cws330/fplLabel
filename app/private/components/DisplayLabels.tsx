import { createClient } from "@/utils/supabase/server";
import React from "react";
import DisplayLabelCard from "./DisplayLabelCard";

const DisplayLabels = async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("labels")
    .select("*")
    .order("name", { ascending: true });
  if (error) return;
  return data.map((label) => {
    return (
      <DisplayLabelCard
        name={label.name}
        hold={label.shelflife!}
        key={label.id}
      />
    );
  });
};

export default DisplayLabels;
