import React from "react";
import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/products/SmallProduct";
import ProductCarousel from "../pages/products/ProductCarousel";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();
  // console.log(data)

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <>
      <div className="w-full flex justify-around flex-wrap md:flex-row sm:flex-col gap-10">
        <div className="w-full flex justify-center bg-slate-800">
          <ProductCarousel />
        </div>
        <div className="">
          <div className="grid md:grid-cols-2 sm:grid-cols-4">
            {data.map((product) => (
              <div key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
