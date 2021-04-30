import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const { 
    order = [], 
    handleBasketShow = Function.prototype, 
    removeFromBasket = Function.prototype,
    incBasketQuantity =Function.prototype,
    decBasketQuantity =Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  return (
    <ul className="collection basket-list">
      <li className="collection-item active blue darken-3 ">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} incBasketQuantity={incBasketQuantity} decBasketQuantity={decBasketQuantity} />)
      ) : (
        <li className="collection-item">Корзтга пустая</li>
      )}
      <li className="collection-item active blue darken-3 basket-collection">
       <p> Общая стоимость: {totalPrice}</p>
      <button className="btn basket-btn">Оформить</button>
      </li>

      <i
        className="material-icons tiny basket-close "
        onClick={handleBasketShow}
      >
        close
      </i>
      {/* <div className="basket-btn">
      <button className="btn">Оформить</button>
      </div> */}
    </ul>
    
  );
}

export { BasketList };
