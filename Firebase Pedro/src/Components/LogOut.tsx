import { Button } from "@material-tailwind/react";
// import { signOut } from "firebase/auth";
// import { auth } from "../Config/Firebase.config";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useShowData } from "../Context/ShowData";

export default function LogOut() {
  const { isLoggedOut, handleLoginOut, loading } = useShowData();
  return (
    <>
      {isLoggedOut ? (
        <Button disabled={loading}>
          <Link to="/login">Login</Link>
        </Button>
      ) : (
        <Button disabled={loading} onClick={handleLoginOut}>
          Logout
        </Button>
      )}
    </>
  );
}
