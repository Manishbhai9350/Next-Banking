"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
import { formSchema } from "@/lib/utils";
import { SignIn, SignUp } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";


const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  // 1. Define your form.
  const authSchema = formSchema(type)
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password:""
    },
  });

  // 2. Define a submit handler.
  const  onSubmit = async (data: z.infer<typeof authSchema>) => {
    setIsLoading(true)
    try {
      if (type == 'sign-up') {
        const signedUp = await SignUp(data)
        setUser(signedUp)
        setIsLoading(false)
        if (signedUp) {
          router.push('/')
        }
      }
      
      if (type == 'sign-in') {
        const response = await SignIn(data)
        if (response)  router.push('/')
        setIsLoading(false)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="flex flex-col justify-center px-3 min-w-[35vw] lg:min-w-0-[100vw]  gap-2 h-screen  py-5">
      <header className="flex flex-col  mt-3">
        <h3 className="text-2xl px-10 text-black-1 font-ibm-plex-serif  font-semibold mt-1">
          {user ? 'Link Your Accout' : type == "sign-in" ? "Sign In" : "Sign Up"}
        </h3>
      </header>
      <section className="body flex flex-col ">
            <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
           
           {
           ( type == 'sign-up' && !user) && (
              <>
              <div className="flex gap-4">
              <CustomInput
                type="text"
                control={form.control}
                name="firstName"
                label="firstName"
                placeholder="firstName"
                />
              <CustomInput
                type="text"
                control={form.control}
                name="lastName"
                label="lastName"
                placeholder="lastName"
                />
              </div>
              <CustomInput
                type="text"
                control={form.control}
                name="address"
                label="address"
                placeholder="Enter Your Address"
                />
            <div className="flex gap-4">
            <CustomInput
                type="text"
                control={form.control}
                name="state"
                label="state"
                placeholder="ex: NY"
                />
              <CustomInput
                type="text"
                control={form.control}
                name="postalCode"
                label="Postal Code"
                placeholder="ex: 110011"
                />
            </div>
            <div className="flex gap-4">
            <CustomInput
                type="text"
                control={form.control}
                name="dob"
                label="Date Of Birth"
                placeholder="yyyy-mm--dd"
                />
              <CustomInput
                type="text"
                control={form.control}
                name="ssn"
                label="SSN"
                placeholder="ex:1234"
                />
            </div>
              </>
            )
           }
           
            {
              !user && (
                <>
                <CustomInput
              type="email"
              control={form.control}
              name="email"
              label="Email"
              placeholder="Contact@gmail.com"
              />
            <CustomInput
              type="password"
              control={form.control}
              name="password"
              label="Password"
              placeholder="••••••••••••"
            />
           <div className="flex flex-col gap-4">
           <Button disabled={isLoading} className="form-btn mt-1" type="submit">
              {
                isLoading ? <>
                <Loader2 size={20} className="animate-spin" /> &nbsp;
                Lading...
                </> : type == 'sign-in' ? 'Sign In' : 'Sign Up' 
              }
            </Button>
            
           </div>
                </>
              )
            }
          </form>
        </Form>
      </section>
      <footer className="flex justify-center gap-1 ">
        <p className="text-14 font-normal text-gray-600">
          {
            type == "sign-in"
             ? "Don't have an account? "
              : "Already have an account? "
          }
        </p>
        <Link
          href={type == "sign-in" ? "/signup" : "/signin"}
          className="form-link"
          >
          {
            type == "sign-in"
             ? "Sign Up"
              : "Sign In "
          }
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
