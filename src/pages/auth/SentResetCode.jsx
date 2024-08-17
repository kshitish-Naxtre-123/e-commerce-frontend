import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { toast } from "react-toastify";
import { useRequestPasswordResetMutation } from "../../redux/api/usersApiSlice";
import {useNavigate} from 'react-router-dom'

const SentResetCode = () => {
  const [email, setEmail] = useState("");
  const [requestPasswordReset, { isLoading, error, isSuccess }] =
    useRequestPasswordResetMutation();

  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    try {
      const res = await requestPasswordReset({ email }).unwrap();
      navigate(`/reset-password`)
      toast.success("Password reset code sent!");

    } catch (err) {
      toast.error("Failed to send password reset code.");
    }
  };

  return (
    <div className=" flex  items-center flex-col mt-10">
        <p className=" font-poppins text-xl font-bold ">Email</p>
        <Input
          className=" rounded-md w-[500px]"
          type="email"
          placeholder="Enter Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className=" mt-3 w-[300px] p-5 flex justify-center items-center bg-blue-400 text-white text-[20px] font-semibold"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Reset Code"}
        </Button>
        {error && <p className="text-red-500 mt-2">{error.message}</p>}
        {isSuccess && (
          <p className="text-green-500 mt-2">Reset code sent successfully!</p>
        )}
    </div>
  );
};

export default SentResetCode;
