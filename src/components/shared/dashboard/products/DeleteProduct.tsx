import { deleteProduct } from "./actions/delete-product";

const DeleteProduct = ({ id }: { id: string }) => {
  const deleteProductWithId = deleteProduct.bind(null, id);

  return (
    <form action={deleteProductWithId} className="w-full">
      <input type="hidden" name="id" value={id} />
      <input
        type="submit"
        value="Delete"
        className="w-full text-start cursor-pointer"
      />
    </form>
  );
};

export default DeleteProduct;
