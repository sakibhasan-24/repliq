import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  removeAllUser,
  removeUser,
} from "../../redux/adduser/addUserSlice";
import useAddUser from "../../hooks/useAddUser";
import Swal from "sweetalert2";
import { CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function AddUser() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { usersList } = useSelector((state) => state.usersList);
  const [users, setUsers, handleAddUser] = useAddUser();
  // console.log(handleAddUser);
  const profilePicture =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQc8AS8lajjEalCKTTlR9hDnjlSeg0QPubQ&usqp=CAU";
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const userInformation = {
      profilePicture,
      ...formData,
    };
    await handleAddUser(userInformation);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "User Added Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    setFormData({});
  };
  // console.log(users);
  const onChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDelete = (user) => {
    // console.log(user);
    dispatch(removeUser(user.newId));
  };
  const handleDeleteAll = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can change again from starting",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeAllUser());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  // console.log(formData);
  return (
    <div className=" w-full sm:max-w-6xl  mx-auto my-8">
      <Helmet>
        <title>Add User</title>
      </Helmet>
      ;
      <h2 className="text-center font-semibold text-orange-600 text-2xl">
        Add User
      </h2>
      <div className=" flex gap-6 flex-col md:flex-row">
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col gap-6 items-center justify-center w-full mx-auto"
        >
          <input
            type="text"
            id="name"
            placeholder="name"
            name="name"
            className="input input-bordered w-full max-w-xs"
            required
            onChange={onChangeFormData}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
            // onChange={(e)=>{console.log(e.target.value)}
            onChange={onChangeFormData}
            required
          />
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
            onChange={onChangeFormData}
          />

          <select
            id="role"
            name="role"
            className="input input-bordered w-full max-w-xs"
            onChange={onChangeFormData}
            required
          >
            <option
              value=""
              disabled
              className="input input-bordered w-full max-w-xs"
            >
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="manager">Manager</option>
            <option value="delivary">Delivary Man</option>
            <option value="staff">Staff</option>
          </select>
          <textarea
            className="input input-bordered w-full max-w-xs"
            id="details"
            placeholder="short description"
            name="details"
            onChange={onChangeFormData}
            required
            rows={20}
            cols={10}
          />
          <input
            type="submit"
            value={"add"}
            className="w-full max-w-xs py-2 rounded-xl cursor-pointer bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
          />
        </form>
        {usersList.length > 0 && (
          <div className="w-full mx-auto overflow-x-scroll text-xs bg-slate-50 shadow-lg shadow-slate-300 rounded-lg p-7">
            <h1 className="text-center font-bold text-xl text-orange-600">
              total User : <span>{usersList.length}</span>
            </h1>
            <div>
              <table className="table w-full ">
                <thead>
                  <tr>
                    <th>no:</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Details</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((user, idx) => (
                    <tr key={user?.newId}>
                      <td>{idx + 1}</td>
                      <td>{user.name}</td>

                      <td>{user.role}</td>
                      <Link to={`/user/details/${user.newId}`}>details</Link>
                      <td>
                        <CiTrash
                          onClick={() => handleDelete(user)}
                          className="text-red-600 cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={handleDeleteAll}
              className="text-red-600 hover:underline text-xl font-bold"
            >
              clear cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
