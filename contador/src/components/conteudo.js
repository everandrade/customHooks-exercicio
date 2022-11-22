export const Item = ({
    quantity,
    handleClick1,
    handleClick2,
    handleClick3
}) => {
    return (
        <div>
            <h3>Meu produto massa</h3>
            <p>Quantidade: {quantity}</p>
            <button onClick={handleClick1}>+</button>
            <button onClick={handleClick3}>Restaurar</button>
            <button onClick={handleClick2}>-</button>
        </div>
    );
};