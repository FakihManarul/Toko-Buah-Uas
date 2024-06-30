"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { CreateProductSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import "@uploadthing/react/styles.css";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createProduct } from "./actions/create-product";
import { FormError } from "../../auth/form-error";
import { FormSuccess } from "../../auth/form-success";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const CreateProduct = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState<null | string>("");

  // TODO: add auth in form
  // const zodResolverWithConversion = (schema) => async (data) => {
  //   // Convert price and stock to numbers
  //   const convertedData = {
  //     ...data,
  //     price: parseFloat(data.price),
  //     stock: parseInt(data.stock),
  //   };
  //   // Use Zod to validate the converted data
  //   return schema.parseAsync(convertedData);
  // };

  const form = useForm<z.infer<typeof CreateProductSchema>>({
    // resolver: zodResolver(CreateProductSchema),
    // resolver: zodResolverWithConversion(CreateProductSchema),
    defaultValues: {
      name: "",
      image: "",
      price: 0,
      stock: 0,
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CreateProductSchema>) => {
    // convert the price and stock to numbers
    values.price = parseFloat(values.price as any);
    values.stock = parseInt(values.stock as any);
    // values.image = "https://via.placeholder.com/150";

    startTransition(() => {
      createProduct(values).then((res) => {
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
    <div>
      <AlertDialogHeader>
        <AlertDialogTitle>Create product</AlertDialogTitle>
        <AlertDialogDescription>
          Create a new product to be added to the store.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 py-4"
        >
          <div className="flex flex-col items-center justify-between p-24">
            {/* <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                // console.log("Files: ", JSON.stringify(res));
                // alert("Upload Completed");
                setImage(res[0].url);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            /> */}
            <div>
              {/* <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  // console.log("Files: ", JSON.stringify(res));
                  // alert("Upload Completed");
                  setImageUrl(res[0].url);
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              /> */}
              <Card>
                <CardHeader>
                  {imageUrl === null ? (
                    // <UploadDropzone
                    //   className="ut-button:bg-primary ut-button:ut-readying:bg-primary/50 ut-label:text-primary ut-button:ut-uploading:bg-primary/50 ut-button:ut-uploading:after:bg-primary"
                    //   endpoint="imageUploader"
                    //   onClientUploadComplete={(res) => {
                    //     setImageUrl(res[0].url);
                    //   }}
                    //   onUploadError={(error: Error) => {
                    //     alert("Error");
                    //   }}
                    // />
                    <UploadDropzone
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        // Do something with the response
                        // console.log("Files: ", JSON.stringify(res));
                        // alert("Upload Completed");
                        setImageUrl(res[0].url);
                      }}
                      onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  ) : (
                    <Image
                      src={imageUrl}
                      alt="uploaded image"
                      width={500}
                      height={400}
                      className="h-80 rounded-lg w-full object-contain"
                    />
                  )}
                </CardHeader>
              </Card>
            </div>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    placeholder="Product name"
                    className="col-span-3"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="price"
                      placeholder="0.00"
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="stock"
                      placeholder="0"
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    id="description"
                    placeholder="A very nice product"
                    className="col-span-3"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          <DialogFooter>
            <Button type="submit">Create product</Button>
          </DialogFooter>
        </form>
      </Form>
    </div>
  );
};

export default CreateProduct;
