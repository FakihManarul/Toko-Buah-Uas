import UpdateForm from "@/components/edit-form";
import { getBuahById } from "../../../lib/data";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";

const UpdateProductPage = async ({ params }: { params: { id: string } }) => {
  const session = await getSession();
  const user = session?.user;

  if (!user || !user["https://yourapp.com/roles"]?.includes("admin")) {
    redirect("/unauthorized"); // or return a message
  }

  const id = params.id;
  const buah = await getBuahById(id);

  if (!buah) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto w-full">
      <h1 className="text-2xl text-center mb-2">Update Product</h1>
      <UpdateForm buah={buah} />
    </div>
  );
};

export default UpdateProductPage;
