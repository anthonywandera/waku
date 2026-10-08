"use client";

import { createContext, useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const formCtx = createContext<{
  formData: Record<string, string | number>;
  setFormData(key: string, value: unknown): void;
}>({
  formData: {},
  setFormData: () => {},
});

interface FormInputField extends React.ComponentProps<"input"> {
  name: string;
  label: string;
  type?: string;
  hide?: boolean;
}

export function Input({
  name,
  label,
  className,
  type: defaultType,
  hide = defaultType === "password" || false,
  ...more
}: FormInputField) {
  const [value, setValue] = useState<string | number>("");
  const [hidden, setHidden] = useState(defaultType === "password" || hide);
  const [type, setType] = useState(defaultType);
  const ctx = useContext(formCtx);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newVal = e.target.value;
    setValue(newVal);
    ctx.setFormData(name, newVal);
  }

  function toggleHide() {
    setHidden((prev) => !prev);
    setType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm text-white font-semibold">
        {label}
      </label>
      <div className="border border-border rounded-lg text-muted flex items-center">
        <input
          id={name}
          name={name}
          onChange={handleChange}
          type={type}
          value={value}
          {...more}
          className={`px-2 py-1 w-full outline-none ${className}`}
        />
        {hide && (
          <button
            type="button"
            onClick={toggleHide}
            className="px-2 hover:cursor-pointer"
          >
            {hidden ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
    </div>
  );
}

export function Form({
  children,
  className,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (formData: Record<string, string | number>) => void;
  className?: string;
}) {
  const [formData, setFormData] = useState({});

  function handleSetFormData(key: string, value: string | number) {
    setFormData((prev) => {
      return { ...prev, [`${key}`]: value };
    });
  }

  function handleSumbit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <formCtx.Provider
      value={{
        formData,
        setFormData: handleSetFormData,
      }}
    >
      <form onSubmit={handleSumbit} className={className}>
        {children}
      </form>
    </formCtx.Provider>
  );
}
