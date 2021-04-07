const url = "https://challlenge9-29a72-default-rtdb.firebaseio.com/";

import { db } from "../db";

export const addItem = (item) => {
  db.ref("/items").push({
    // id: id,
    name: item,
  });
};

export const deleteItem = (id) => {
  db.ref("/items").child(id).remove();
};
