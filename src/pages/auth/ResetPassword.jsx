import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { useResetPasswordMutation } from "../../redux/api/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetPassword, { isLoading, error, isSuccess }] =
    useResetPasswordMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const res = await resetPassword({ token, newPassword }).unwrap();
      navigate("/auth");
      toast.success("Password reset successfully!");
    } catch (err) {
      toast.error(err.message || "Failed to reset password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className=" text-3xl mt-2 mb-5">Reset Password</h2>
      <div className=" flex flex-col mt-6">
        <label>
          Enter the code that is sent to You for rest your Password{" "}
        </label>
        <Input
          placeholder="Enter OTP"
          className=" rounded-md w-[500px] mt-4"
          type="number"
          id="otp"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>

      <div className=" flex flex-col mt-6">
        <label>New Password: </label>
        <Input
          className=" rounded-md w-[500px] mt-4"
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <Button
        className=" mt-3 w-[300px] p-5 flex justify-center items-center bg-blue-400 text-white text-[20px] font-semibold"
        type="submit"
        onClick={handleSubmit}
      >
        {isLoading ? "Resetting..." : "Reset Password "}
      </Button>
      {error && (
        <p className="text-red-500 mt-2">
          {error.message || "An error occurred"}
        </p>
      )}
      {isSuccess && (
        <p className="text-green-500 mt-2">Password reset successfully!</p>
      )}
    </div>
  );
};

export default ResetPassword;
