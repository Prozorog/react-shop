import React, { useEffect} from "react";

function AlertBasket (props) {
  const {name = "", removeAlertName = Function.prototype} = props;

  useEffect(() => {
    const timeId = setTimeout(removeAlertName, 2000)

    return () => {
      clearTimeout(timeId)
    }

    // eslint-disable-next-line 
  }, [name])

  return ( 
    <div id="toast-container">
      <div className="toast">
        {name} добавлен в корзину
      </div>
    </div>
  )
}

export {AlertBasket}