import { Input } from "@/components/ui/input";
import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (!error && data?.user) {
    redirect("/private");
  }

  return (
    <form className='flex flex-col' suppressHydrationWarning={true}>
      <Label htmlFor='email'>Email:</Label>
      <Input id='email' name='email' type='email' required />
      <Label htmlFor='password'>Password:</Label>
      <Input id='password' name='password' type='password' required />
      <Button formAction={login}>Log in</Button>
      <Button variant={"link"} formAction={signup}>
        Sign up
      </Button>
    </form>
  );
}
