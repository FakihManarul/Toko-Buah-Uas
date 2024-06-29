import UpdateForm from "@/components/edit-form";
import { getBuahById } from "../../../lib/data";
import { notFound } from "next/navigation";

const UpdateProductPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const buah = await getBuahById(id);

  if (!buah) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto wd-5">
      <h1 className="text-2xl text-center mb-2">Update Product</h1>
      <UpdateForm buah={buah} />
    </div>
  );
};

export default UpdateProductPage;
