function GoodsItem(props) {
  const { id, name, description, price, full_background, addToBasket = Function.prototype } = props;

  return (
    <div id={id} className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
      <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToBasket({id, name, price})}>Купить</button>
        <span className="price">{price} руб.</span>
      </div>
    </div>
  );
}

export { GoodsItem };
