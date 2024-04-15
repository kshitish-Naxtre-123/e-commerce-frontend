import React from "react";
import { Link } from "react-router-dom";

const ProductCardV3 = ({ product, navigate }) => {
  return (
    <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        onClick={() => navigate(`/product/${product._id}`)}
      >
        <img
          className="peer absolute top-0 right-0 h-full w-full object-contain"
          src={product.image}
          alt="product image"
        />
        <div className="peer absolute top-0 -right-96 h-full w-full bg-black bg-opacity-20 object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0 flex items-center justify-center">
          <div>
            <button className="rounded-lg px-4 py-1 bg-blue-500 text-white font-poppins flex items-center">
              <span>Shop</span>
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <div className="h-20">
          <h5 className="text-xl tracking-tight text-slate-900 cursor-default">
            {product.name}
          </h5>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900 cursor-default">
              ₹ {product?.price.toLocaleString("en-IN")}
            </span>
            <span className="text-sm text-slate-900 line-through">
              {Math.ceil(product.price * 1.25).toLocaleString("en-IN")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardV3;
