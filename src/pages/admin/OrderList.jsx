import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../../redux/api/orderApiSlice";
import AdminMenu from "./AdminMenu";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
const navigate=useNavigate()
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <table className="container mx-auto">
          <AdminMenu />

          <thead className="w-full border">
            <tr className="mb-[5rem]">
              <th className="text-left pl-1">ITEMS</th>
              <th className="text-left pl-1">ID</th>
              <th className="text-left pl-1">USER</th>
              <th className="text-left pl-1">DATE</th>
              <th className="text-left pl-1">TOTAL</th>
              <th className="text-left pl-1">PAID</th>
              <th className="text-left pl-1">DELIVERED</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} onClick={()=>navigate(`/order/${order._id}`)}>
                <td  className=" pt-1 pb-2">
                  <div
                     
                    >
                    <img
                      src={order.orderItems[0].image}
                      style={{
                        borderRadius: "30px",
                        width:"130px",
                        height:"130px",
                        marginLeft:"10px"
                      }}
                      alt={order._id}
                      // className="w-[7rem] pt-4"
                    />
                  </div>
                </td>
                <td className=" font-poppins font-semibold text-[16px]">{order._id}</td>

                <td className=" font-poppins font-semibold text-[16px]">{order.user ? order.user.username : "N/A"}</td>

                <td className=" font-poppins font-semibold text-[16px]">
                  {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                </td>

                <td className=" font-poppins font-semibold text-[16px]">₹ {order.totalPrice}</td>

                <td className="py-2">
                  {order.isPaid ? (
                    <p className="p-2 text-center bg-green-400 w-[6rem] rounded-md">
                      Completed
                    </p>
                  ) : (
                    <p className="p-2 text-center bg-red-400 w-[6rem] rounded-md">
                      Pending
                    </p>
                  )}
                </td>

                <td className="px-2 py-2">
                  {order.isDelivered ? (
                    <p className="p-2 text-center bg-green-400 w-[6rem] rounded-md">
                      Completed
                    </p>
                  ) : (
                    <p className="p-2 text-center bg-red-400 w-[6rem] rounded-md">
                      Pending
                    </p>
                  )}
                </td>
{/* 
                <td>
                  <Link to={`/order/${order._id}`}>
                    <button className=" bg-gray-300 rounded-md w-[4rem] font-semibold">
                      More...
                    </button>
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default OrderList;
