"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { editProduct } from "./actions/edit-product";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useTransition } from "react";
import { db } from "@/lib/db";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { editProductSchema } from "@/schemas";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { FormError } from "../../auth/form-error";
import { FormSuccess } from "../../auth/form-success";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { Label } from "@/components/ui/label";

interface EditProductProps {
  // name: string;
  // description: string;
  // price: number;
  // image: string | null;
  // stock: number;
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  price?: number | undefined;
  image?: string | null;
  stock?: number | undefined;
}

const EditProduct = ({
  id,
  description,
  image,
  name,
  price,
  stock,
}: EditProductProps) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState<null | string>("");

  const { toast } = useToast();

  const editProductWithId = editProduct.bind(null, id!);
  const [state, formAction] = useFormState(editProductWithId, null);

  const router = useRouter();

  return (
    <form action={formAction} className="grid gap-4 py-4 max-w-sm m-auto">
      <div className="flex flex-col items-center justify-between">
        <div>
          <Card>
            <CardHeader>
              {imageUrl === null ? (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    // console.log("Files: ", JSON.stringify(res));
                    // alert("Upload Completed");
                    setImageUrl(res?.[0]?.url);
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
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Product name"
          className="col-span-3"
          defaultValue={name}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            name="price"
            placeholder="0.00"
            type="number"
            defaultValue={price}
          />
        </div>
        <div>
          <Label htmlFor="stock">Stock</Label>
          <Input
            id="stock"
            name="stock"
            placeholder="0"
            type="number"
            defaultValue={stock}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="A very nice product"
          className="col-span-3"
          defaultValue={description}
        />
      </div>
      {error && <FormError message={error} />}
      {success && <FormSuccess message={success} />}
      <Button type="submit">Update product</Button>
      <Button
        variant="outline"
        onClick={() => {
          router.push("/dashboard");
        }}
        type="button"
      >
        Cancle
      </Button>
    </form>
  );
};

export default EditProduct;
