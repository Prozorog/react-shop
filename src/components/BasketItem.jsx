function BasketItem(props) {
  const {
    id,
    price,
    quantity,
    name,
    removeFromBasket = Function.prototype,
    incBasketQuantity = Function.prototype,
    decBasketQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name}{" "}
      <i
        className="material-icons basket-quantity "
        onClick={() => decBasketQuantity(id)}
      >
        remove
      </i>{" "}
      x{quantity}{" "}
      <i
        className="material-icons basket-quantity "
        onClick={() => incBasketQuantity(id)}
      >
        add
      </i>{" "}
      = {price * quantity}
      <span className="secondary-content basket-btn">
        <i className="material-icons tiny" onClick={() => removeFromBasket(id)}>
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
