import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function HookForm() {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    age: yup.number().positive().integer().min(18).max(120).required("Age is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).max(14).required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "password doesn't match").required(),
  });
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container" style={{ margin: "3rem" }}>
        <input  type="text" placeholder="Full Name" {...register("name")} />
            {errors.name && <p>{errors.name.message}</p>}
        <input
          type="email"
          placeholder="your@email.com"
          {...register("email")}
        />
            {errors.email && <p>{errors.email.message}</p>}
        <input type="number" placeholder="Your Age" {...register("age")} />
            {errors.age && <p>{errors.age.message}</p>}
        <input 
          type="password"
          placeholder="Password"
          {...register("password")}
        />
            {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
