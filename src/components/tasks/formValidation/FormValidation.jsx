import React, { useState } from "react";

const FormValidation = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    console.log(data);
  };

  const validateForm = () => {
    let newErrors = {};

    if (data.name.trim() === "") {
      newErrors.name = "Name should not be empty";
    }

    if (data.password.length < 3) {
      newErrors.password = "Password should be greater than 3 characters";
    }

    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
      // You can reset the form if you want
      // setData({name: "", email: "", password: "", confirmPassword: ""});
    }
  };

  return (
    <>
      <div className="text-4xl text-center border-b-2 border-dashed">
        Form Validation
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 text-center mt-4">
        <label className="mt-3">Name</label>
        <div>
          <input
            name="name"
            onChange={handleChange}
            value={data.name}
            className="border-2 mt-2 p-2"
            type="text"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <label className="mt-3">Email</label>
        <div>
          <input
            name="email"
            onChange={handleChange}
            value={data.email}
            className="border-2 mt-2 p-2"
            type="email"
          />
        </div>

        <label className="mt-3">Password</label>
        <div>
          <input
            name="password"
            onChange={handleChange}
            value={data.password}
            className="border-2 mt-2 p-2"
            type="password"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <label className="mt-3">Confirm Password</label>
        <div>
          <input
            name="confirmPassword"
            onChange={handleChange}
            value={data.confirmPassword}
            className="border-2 mt-2 p-2"
            type="password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="mt-4 bg-black text-white p-2 rounded-xl cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormValidation;
