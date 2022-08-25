import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onsub = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onsub)}>
        <label htmlFor="">Username</label>
        <input {...register("FirstName:")} placeholder="username" /> <br />
        <label htmlFor="">Email</label>
        <input {...register("Email:")} placeholder="email" /> <br />
        <label htmlFor="">Username</label>
        <input {...register("Password:")} placeholder="password" /> <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Form;
