"use client";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart-store";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
    const cart = useCart();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    };

    return ( 
        <div onClick={() => router.push("/cart")} className="ml-auto flex items-center gap-x-4">
            <Button className="flex justify-center items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag 
                    size={20}
                    color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
     );
}
 
export default NavbarActions;