import { useState } from "react";

export const useCounter = () => {
    const [quantity, setQuantity] = useState(0);

    const handleClick1 = () => setQuantity(quantity + 1);
    const handleClick2 = () => setQuantity(quantity - 1);
    const handleClick3 = () => setQuantity(0);
    return [quantity, handleClick1, handleClick2, handleClick3];
};