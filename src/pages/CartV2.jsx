import React, { useState } from "react";
import { addToCart, removeFromCart } from "../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import CartCardV2 from "../components/CartCardV2";

const CartV2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };
  const removeFromCartHandler = (id) => {
    if (window.confirm("Are you sure to remove item ?")) {
      dispatch(removeFromCart(id));
    }
  };

  const checkHandler = () => {
    navigate("/auth?redirect=/shipping");
  };

  return (
    <section className="h-full bg-gray-100 py-12 pl-[4%] sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
        </div>

        <div className="mx-auto mt-8 max-w-md md:mt-12">
          <div className="rounded-3xl bg-white shadow-lg">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  {cartItems?.map((item) => (
                    <li key={item._id}>
                      <CartCardV2
                        product={item}
                        qtyAction={(value) => addToCartHandler(item, value)}
                        removeAction={() => removeFromCartHandler(item._id)}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 space-y-3 border-t border-b py-8">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400">Subtotal</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ₹{" "}
                    {cartItems
                      ?.reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400">Shipping</p>
                  <p className="text-lg font-semibold text-gray-900">₹ 40.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  <span className="text-xs font-normal text-gray-400">
                    Rupees
                  </span>{" "}
                  ₹{" "}
                  {(
                    Number(
                      cartItems?.reduce(
                        (acc, item) => acc + item.qty * item.price,
                        0
                      )
                    ) + 40
                  ).toFixed(2)}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  onClick={checkHandler}
                >
                  Place Order
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartV2;
