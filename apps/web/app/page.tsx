"use client"
import { getUsers } from "./actions";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users) => {
      console.log(users);
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.username}</h2>
        </div>
      ))}
    </div>
  );
}

type User = {
  id: string;
  username: string;
  password: string;
  email: string;
  name: string;
  photo: string | null;
}
