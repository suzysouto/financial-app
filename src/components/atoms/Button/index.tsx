import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
    return (
        <button {...props}
        className="bg-purple-500 h-10 text-white font-bold 
        hover:bg-purple-400 disabled:bg-gray-200 disabled:cursor-not-allowed">{children}
        </button>

    );
};
