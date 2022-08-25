import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const sch = () =>
  yup.object().shape({
    firstName: yup.string().required("Write The First Name"),
    lastName: yup.string().required(),
    age: yup.number().required(),
    password: yup.string().max(8).min(4),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

const Schema = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sch),
  });

  const dataSubmit = (data) => {
    const body = { body: data };
    console.log(body);
    axios.post("http://localhost:5000/userinfo", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(dataSubmit)}>
        <input
          type="text"
          name="firstName"
          placeholder="FirstName"
          {...register("firstName")}
        />
        <p>{errors.firstName?.message}</p>

        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          {...register("lastName")}
        />
        <p>{errors.lastName?.message}</p>

        <input type="text" name="age" placeholder="age" {...register("age")} />
        <p>{errors.age?.message}</p>

        <input
          type="text"
          name="password"
          placeholder="password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <input
          type="text"
          name="confirmPassword"
          placeholder="confirmPassword"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
      </form>
    </>
  );
};

export default Schema;
