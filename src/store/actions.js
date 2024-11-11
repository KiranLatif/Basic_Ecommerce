export const AddToCart = (data) => {
  return {
    type: "addToCart",
    payload: data,
  };
};
export const deleteFromCart = (id) => {
  return {
    type: "deleteFromCart",
    payload: id,
  };
};
export const IncreaseQty = (id) => {
  return {
    type: "increaseQty",
    payload: id,
  };
};
export const DecreaseQty = (id) => {
  return {
    type: "DecreaseQty",
    payload: id,
  };
};
export const ClearCart = () => {
  return {
    type: "clearCart",
  };
};
export const DeleteIndivItems = (id) => {
  return {
    type: "deleteIndivItems",
    payload: id,
  };
};
