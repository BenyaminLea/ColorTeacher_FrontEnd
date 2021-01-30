import { getUsers } from "components/lib/api";
import UserCard from "components/UserCard/UserCard";
import { UserContext } from "context/UserContext";
import React, { useContext, useEffect, useState } from "react";

export default function AdminPage() {
  const user = useContext(UserContext).user;
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      const response = await getUsers();
      setAllUsers(response.data);
    }
    getAllUsers();
  }, []);

  return (
      <ul id="user-list">
        {user.type === "admin" ? (
          allUsers.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })
        ) : (
          <h1 className="mt-5">YOU ARE NOT AN ADMIN</h1>
        )}
      </ul>
  );
}
