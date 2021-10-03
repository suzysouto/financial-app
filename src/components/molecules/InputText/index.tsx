import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    Label: string;
}

export const InputText = ({ Label, ...props }: Props) => {
    return (
        <label className="flex flex-col w-full">
            <span>{Label}</span>
            <input type="email" {...props} className="border border-gray-200 h-10 px-4" />
        </label>
    );
};