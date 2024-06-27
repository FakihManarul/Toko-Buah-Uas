"use client";

import { updateProduct } from "../../lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/button";
import type { Buah } from "@prisma/client";

const UpdateForm = ({ buah }: { buah: Buah}) => {
  const UpdateProductWithId = updateProduct.bind(null, buah.id);
  const [state, formAction] = useFormState(UpdateProductWithId, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="buah"
            className="block text-sm font-medium text-gray-900"
          >
            Nama Buah
          </label>
          <input
            type="text"
            name="buah"
            id="buah"
            className="bg-gray-50 border bprder-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Masukan Nama Buah"
            defaultValue={buah.buah}
          />
          <div id="buah-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.buah}</p>
          </div>
          <div className="mb-5">
            <label
              htmlFor="harga"
              className="block text-sm font-medium text-gray-900"
            >
              Harga
            </label>
            <input
              type="text"
              name="harga"
              id="harga"
              className="bg-gray-50 border bprder-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Masukan Harga"
              defaultValue={buah.harga}
            />
            <div id="harga-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.harga}</p>
            </div>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitButton label="update" />
      </form>
    </div>
  );
};

export default UpdateForm;
