"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  shelfLife: z.string(),
});

export function NewLabelForm() {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      shelfLife: "0",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient();
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { error } = await supabase
      .from("labels")
      .insert({ name: values.name, shelflife: values.shelfLife });
    form.reset();
    if (error) {
      toast("There was an error making that label please try again.");
    } else {
      toast("Your label has been created successfully.");
      router.refresh();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label Name</FormLabel>
              <FormControl>
                <Input placeholder='RKF Kitchen' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='shelfLife'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expires in Today Plus</FormLabel>
              <FormControl>
                <Input type='number' placeholder='0' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
