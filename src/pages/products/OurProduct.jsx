import React from "react";
import Heading from "../../components/Heading";
import ProductCard from "../../components/ProductCard";
// import { useParams } from "react-router-dom";
import { useGetOurProductQuery } from "../../redux/api/productApiSlice";
import Loader from "../../components/Loader";
Loader;
const OurProduct = () => {
  //   const { keyword } = useParams();
  const { data, isLoading, error } = useGetOurProductQuery();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <div className=" container">
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default OurProduct;
