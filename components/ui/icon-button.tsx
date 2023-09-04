import { cn } from "@/lib/utils";
import Button from "./button";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    className
}) => {
    return ( 
        <Button
            onClick={onClick}
            className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition", className)}
        >

        </Button>
     );
}
 
export default IconButton;