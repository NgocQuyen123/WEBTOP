import React from "react";

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "sm",
    icon = null,
    className = "",
    disabled = false,
}) => {
    const baseStyles =
        "flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none hover:cursor-pointer";

    const variantStyles = {
        primary: "bg-primary2",
        secondary: "bg-secondary text-white ",
        tertiary: "bg-tertiary text-white",
    };

    const sizeStyles = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-10 py-2 text-lg mt-3",
    };

    const iconStyles = icon
        ? "bg-white text-primary2 border border-primary2 "
        : "";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${iconStyles} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
            disabled={disabled}
        >
            {children}
            {icon && icon}
        </button>
    );
};

export default Button;
