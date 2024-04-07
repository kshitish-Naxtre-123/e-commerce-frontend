import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./products/Product";
import ProductCarousel from "./products/ProductCarousel";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });
  return (
    <section className="w-full flex flex-col">
      {/* <ProductCarousel /> */}

      {!keyword ? (
        <div className="w-full flex items-center justify-center mx-auto">
          {" "}
          <Header />
        </div>
      ) : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError?.error || "An error occurred"}
        </Message>
      ) : (
        <div>
          <div className="flex justify-between items-center mx-20 mt-20">
            <h1 className="font-poppins font-bold text-[3rem]">
              Special Products
            </h1>
            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-md py-2 px-10 text-white"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-[2rem] ml-[2rem]">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
