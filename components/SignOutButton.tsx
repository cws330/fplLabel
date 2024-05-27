"use client";
import { createClient } from "@/utils/supabase/client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const route = useRouter();
  const signout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      route.refresh();
    }
  };
  return <Button onClick={signout}>Sign Out</Button>;
};

export default SignOutButton;
