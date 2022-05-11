import React from "react";
import Input from "./inp";

export default function Registration() {
  return (
    <>
      <Input type="text" placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your Email" />
      <Input type="password" placeholder="Enter your password" />
      <button>Register</button>
    </>
  );
}
