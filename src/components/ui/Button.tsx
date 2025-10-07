import React, {type ReactNode, type ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 children: ReactNode;
 backgroundClass?: string;
 textClass?: string;
 rounded?: string;
}

const Button: React.FC<ButtonProps> = ({
 children,
 backgroundClass = "bg-blue-600",
 textClass = "text-white",
 rounded = "",
 className = "",
 ...rest
}) => {
 return (
  <button
   className={`flex justify-center items-center px-6 py-3 gap-2 ${backgroundClass} ${textClass} ${rounded} ${className}`}
   {...rest}
  >
   {children}
  </button>
 );
};

export default Button;
