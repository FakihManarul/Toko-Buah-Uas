import React from "react";
import ProductTable from "@/components/product-table";
import Navbar from "@/components/Navbar";
import Search from "@/components/search";
import Pagination from "@/components/pagination";
import { CreateButton } from "@/components/button";
import { string } from "zod";
import { getBuahPages } from "../lib/data";
import { Suspense } from "react";
import { TableSkeleton } from "@/components/skeleton";

interface ProductsProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

const Products: React.FC<ProductsProps> = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getBuahPages(query);

  return (
    <div className="max-w-screen-xl mx-auto mt-5 bg-white">
      <Navbar />
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <ProductTable query={query} currentPage={currentPage} />
      </Suspense>

      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Products;
