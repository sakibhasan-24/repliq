import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/adduser/addUserSlice";

export default function useAddUser() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const handleAddUser = (userInfo) => {
    dispatch(addUser(userInfo));
    setUsers([...users, userInfo]);
  };
  return [users, setUsers, handleAddUser];
}
