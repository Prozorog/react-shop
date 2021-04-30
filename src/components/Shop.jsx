import React, { useEffect, useState } from "react";
// *components
import { Preloader } from "./Preloader";
import { GoodList } from "./GoodsList";
import { Cart } from "./Cart";
import {BasketList} from "./BasketList"
import {AlertBasket} from "./AlertBasket"
// *api key
import { API_URL, API_KEY } from "../config";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  const addToBasket = (items) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === items.id);

    if (itemIndex < 0) {
      const newItems = {
        ...items,
        quantity: 1,
      };
      setOrder([...order, newItems]);
    } else {
      const newOrder = order.map((orderItem, idx) => {
        if(idx === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    setAlertName(items.name)
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.id !== itemId);
    setOrder(newOrder)
  }

  const incBasketQuantity = (itemId) => {
    console.log(itemId);
    const newOrder = order.map(el => {
      if(el.id === itemId) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      } else {
        return el
      }
    })

    setOrder(newOrder)
  } 

  const removeAlertName = () => {
    return setAlertName('')
  }

  const decBasketQuantity = (itemId) => {
    console.log(itemId);
    const newOrder = order.map(el => {
      if(el.id === itemId) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      } else {
        return el
      }
    })

    setOrder(newOrder)
  } 

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodList goods={goods} addToBasket={addToBasket} />}
      {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} decBasketQuantity={decBasketQuantity} incBasketQuantity={incBasketQuantity} />}
      {alertName && <AlertBasket name={alertName} removeAlertName={removeAlertName}/>}
    </main>
  );
}

export { Shop };
