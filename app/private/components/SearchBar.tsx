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
import { FaSearch } from "react-icons/fa";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import DisplayLabelCard from "./DisplayLabelCard";

const formSchema = z.object({
  searchBy: z.string(),
});
type searchLabels = [
  {
    created_at: string;
    id: number;
    name: string;
    shelflife: number | null;
  }
];

export function SearchBar({ labels }: { labels: searchLabels }) {
  const [searchData, setSearchdata] = useState<Array<searchLabels>>([]);
  const [origionalPull, setOrigionalPull] = useState<searchLabels>(labels);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchBy: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (origionalPull === null) {
      setOrigionalPull(searchData);
    }
    if (values.searchBy === "") {
      setSearchdata([]);
    } else {
      setSearchdata([]);
    }
    origionalPull.map((item) => {
      if (item.name.toLowerCase().includes(values.searchBy.toLowerCase())) {
        setSearchdata((searchData) => [...searchData, item]);
        console.log(item);
      }
    });
    console.log(searchData.length);
    return display;

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  const display = searchData.map((label) => {
    console.log("search");
    return (
      <DisplayLabelCard
        name={label.name}
        hold={label.shelflife!}
        key={label.id}
      />
    );
  });
  const displayMain = origionalPull.map((label) => {
    if (searchData.length! > 0) {
    }
    return (
      <DisplayLabelCard
        name={label.name}
        hold={label.shelflife!}
        key={label.id}
      />
    );
  });

  return (
    <>
      <div className='flex flex-col items-end'>
        <div className='relative '>
          <Form {...form}>
            <form
              onChange={form.handleSubmit(onSubmit)}
              className='flex flex-row flex-nowrap'
            >
              <FormField
                control={form.control}
                name='searchBy'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='hidden'>Search</FormLabel>
                    <FormControl>
                      <Input placeholder='Search' {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className='relative ml-[-2rem] mt-auto mb-auto '>
                <FaSearch />
              </span>
            </form>
          </Form>
        </div>
        <div className='min-w-full pt-6 flex justify-around flex-wrap'>
          {searchData.length !== 0 ? display : displayMain}
        </div>
      </div>
    </>
  );
}
