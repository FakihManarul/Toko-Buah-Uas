"use client";

import Link from "next/link";
import Image from "next/image";

// import ImageHero from "@/../public/image/hero.png";

import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import { useState, useTransition } from "react";
import { FormSuccess } from "../form-success";
import { RegisterSchema } from "@/schemas";
import { register } from "../actions/register";
import { FormError } from "../form-error";
import HeroImage from "@/public/images/hero.png";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((res) => {
        if (res.error) {
          setError(res.error);
        }
        if (res.success) {
          setSuccess(res.success);
        }
      });
    });
  };

  return (
    <section>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Register</h1>
              <p className="text-balance text-muted-foreground">
                Create an account to continue
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="John" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Doe" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="m@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="*********"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {error && <FormError message={error} />}
                {success && <FormSuccess message={success} />}
                <Button type="submit" className="w-full">
                  Register
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => signIn("google", { redirect: false })}
                >
                  Register with Google
                </Button>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              Do you have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <Image
            src={HeroImage}
            alt="Image"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
      )
    </section>
  );
};

export default Register;
