"use client";

import Link from "next/link";

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
import { LoginSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "../actions/login";
import HeroImage from "@/public/images/hero.png";
import Image from "next/image";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((res) => {
        // setError(res?.error);
        // setSuccess(res?.success);
        if (res?.error) {
          setError(res.error);
        }
        if (res?.success) {
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
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
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
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => signIn("google", { redirect: false })}
                >
                  Login with Google
                </Button>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline">
                Sign up
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

export default Login;
