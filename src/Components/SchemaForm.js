import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const SchemaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    const body = { body: data };
    console.log(body);

    axios.post("http://localhost:5000/posts", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          name="firstName"
          {...register("firstName")}
          placeholder="First Name..."
        />
        <p> {errors.firstName?.message} </p>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name..."
          {...register("lastName")}
        />
        <p> {errors.lastName?.message} </p>
        <input
          type="text"
          name="email"
          placeholder="Email..."
          {...register("email")}
        />
        <p> {errors.email?.message} </p>
        <input
          type="text"
          name="age"
          placeholder="Age..."
          {...register("age")}
        />
        <p> {errors.age?.message} </p>
        <input
          type="password"
          name="password"
          placeholder="Password..."
          {...register("password")}
        />
        <p> {errors.password?.message} </p>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
        <input type="submit" id="submit" />
      </form>
    </>
  );
};

export default SchemaForm;
