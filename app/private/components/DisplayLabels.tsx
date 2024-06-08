import { createClient } from "@/utils/supabase/server";
import React from "react";
import DisplayLabelCard from "./DisplayLabelCard";
import { SearchBar } from "./SearchBar";

const DisplayLabels = async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("labels")
    .select("*")
    .order("name", { ascending: true });
  if (!error) return <SearchBar labels={data} />;
};

export default DisplayLabels;
