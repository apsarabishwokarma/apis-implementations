import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant?: "solid" | "outlined";
  // children:ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "solid",
  children = "Shop Now",
  className,
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        className={`max-w-max rounded-md py-3 px-10  ${
          variant === "solid"
            ? "bg-green-500 hover:bg-green-400 "
            : "bg-transparent hover:bg-green-400 hover:text-white text-green-500  border border-green-500 "
        } ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
``;
