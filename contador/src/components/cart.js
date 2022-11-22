import { useCounter } from "../components/counter";
import { Item } from "./conteudo";

export const Cart = () => {
    const [quantity, handleClick1, handleClick2, handleClick3] = useCounter(0);

    return (
        <div className="Cart">
            <h1>Meu carrinho</h1>
            <Item
                quantity={quantity}
                handleClick1={handleClick1}
                handleClick2={handleClick2}
                handleClick3={handleClick3}
            />
        </div>
    );
};
