import React from "react";
import { getBuah } from "../../lib/data";
import { formateDate } from "../../lib/utils";
import { EditButton, DeleteButton } from "@/components/button";

interface ProductTableProps {
  query: string;
  currentPage: number;
}

const ProductTable: React.FC<ProductTableProps> = async ({
  query,
  currentPage,
}) => {
  const Buahs = await getBuah(query, currentPage);
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead>
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Nama Buah</th>
          <th className="py-3 px-6">Harga</th>
          <th className="py-3 px-6">Tanggal</th>
          <th className="py-3 px-6 justify-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {Buahs.map((buah: any, index: number) => (
          <tr key={buah.id} className="big-white border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{buah.buah}</td>
            <td className="py-3 px-6">{buah.harga}</td>
            <td className="py-3 px-6">
              {formateDate(buah.createdAt.toString())}
            </td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton id={buah.id} />
              <DeleteButton id={buah.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
