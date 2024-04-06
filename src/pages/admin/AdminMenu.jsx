import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
function AdminMenu() {
    const[isMenuOpen,setIsMenuOpen]=useState(false)
    const toogleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
      <>
        <button
            className={`${isMenuOpen ? "top-2 right-2":"top-5 right-7"} bg-[#9ad28b] p-2 fixed rounded-lg`}
            onClick={toogleMenu}
         >
            {isMenuOpen ?(
                <FaTimes className=' bg-white'/>
            ):(
               <>
                  <div className=' w-6 h-0.5 bg-gray-200 my-1'></div>
                  <div className=' w-6 h-0.5 bg-gray-200 my-1'></div>
                  <div className=' w-6 h-0.5 bg-gray-200 my-1'></div>
               </>
            )}
        </button>
        {isMenuOpen &&(
            <section className=' bg-[#151515] p-4 fixed right-7 top-5 border rounded-lg'>
                <ul className=' list-none mt-2'>
                    <li>
                        <NavLink
                           to="/admin/dashboard"
                           style={({isActive})=>({
                            color:isActive?"greenyellow":"white",
                           })}
                           className="list-item py-2 px-3 mb-5 hover:bg-[#2E2D2D] rounded-sm"
                        >
                            Admin Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                           to="/admin/categorylist"
                           style={({isActive})=>({
                            color:isActive?"greenyellow":"white",
                           })}
                           className="list-item py-2 px-3 mb-5 hover:bg-[#2E2D2D] rounded-sm"
                        >
                            Create Category
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink
                           to="/admin/productlist"
                           style={({isActive})=>({
                            color:isActive?"greenyellow":"white",
                           })}
                           className="list-item py-2 px-3 mb-5 hover:bg-[#2E2D2D] rounded-sm"
                        >
                            Create Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                           to="/admin/allproductslist"
                           style={({isActive})=>({
                            color:isActive?"greenyellow":"white",
                           })}
                           className="list-item py-2 px-3 mb-5 hover:bg-[#2E2D2D] rounded-sm"
                        >
                           All Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                           to="/admin/userlist"
                           style={({isActive})=>({
                            color:isActive?"greenyellow":"white",
                           })}
                           className="list-item py-2 px-3 mb-5 hover:bg-[#2E2D2D] rounded-sm"
                        >
                            Manage Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                           to="/admin/orderlist"
                           style={({isActive})=>({
                            color:isActive?"greenyellow":"white",
                           })}
                           className="list-item py-2 px-3 mb-5 hover:bg-[#2E2D2D] rounded-sm"
                        >
                            Manage Orders
                        </NavLink>
                    </li>
                </ul>
            </section>
        )}
      </>
  )
}

export default AdminMenu


