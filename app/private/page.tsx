import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import Nav from "./components/nav";
import NewLabel from "./components/NewLabel";
import DisplayLabels from "./components/DisplayLabels";
import { SearchBar } from "./components/SearchBar";

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <Nav />
      <div className='flex justify-between'>
        <NewLabel />
        {/* <SearchBar /> */}
      </div>

      <div className='w-full pt-6 flex justify-around flex-wrap'>
        <DisplayLabels />
      </div>
    </>
  );
}
