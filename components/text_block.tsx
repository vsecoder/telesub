import { useState } from "react";

export interface TextBlockContext {
    title: string,
    text: string,
    opened: boolean
}


export const TextBlock = ({ title, text, opened }: TextBlockContext) => {
    const [isOpen, setIsOpen] = useState(opened);

    return (
        <div className="p-3">
            <p className="flex items-center justify-between">
                <span className="flex text-sm font-bold text">
                    {title}
                </span>
                <span className="flex text-sm font-medium text" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "hide" : "display"}
                </span>
            </p>
            {text}
        </div>
    );
};

