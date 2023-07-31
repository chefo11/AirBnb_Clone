"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        type={type}
        className={`peer w-full p-4 rounded-md font-light outline-none transition border-2 border-neutral-200 bg-white pt-6 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:border-neutral-500 ${
          formatPrice ? "pl-9" : "pl-4"
        } ${
          errors[id]
            ? "border-red-500 focus:border-rose-500"
            : "border-neutral-200 focus:border-black"
        }`}
      />
      <label
        className={`
          absolute text-md divide-neutral-150 transform -translate-y-3 top-5 z-10 origin-0
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:scale-75
          ${errors[id] ? "text-red-500" : "text-zinc-400"}
          `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
