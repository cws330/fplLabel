import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import Nav from "./components/nav";
import NewLabel from "./components/NewLabel";
import DisplayLabels from "./components/DisplayLabels";

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <Nav />

      <NewLabel />

      <div className='w-full pt-6 flex justify-around flex-wrap'>
        <DisplayLabels />
      </div>
    </>
  );
}
