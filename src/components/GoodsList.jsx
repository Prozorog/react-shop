import {GoodsItem} from "./GoodsItem"

function GoodList (prop) {
  const {goods = [], addToBasket = Function.prototype} = prop;

  if(!goods.length) {
    return <h1>Nothing here</h1>
  }

  return (
    <div className="goods">
     {goods.map(item => {
       return <GoodsItem  key={item.id} {...item} addToBasket={addToBasket}/>
     })}
  </div>
  )
}

export {GoodList}

