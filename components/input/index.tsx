import React, { type InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = () => {

  return (
    <div
      className="bg-gradient-to-r from-blue-600 to-teal-400 rounded-md p-[2px]"
    >
      <input
        className="w-full form-input dark:bg-gray-900  rounded-md border-none"
        aria-label="search"
        placeholder="enter your search"
      />
    </div>
  );
};

export default Input;