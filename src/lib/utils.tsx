"use client"
import { pizzaList } from "../data/data"

export const modifyItem = ({
  id,
  amount,
  cart,
  setCart,
}: {
  id: string
  amount: number
  cart: any
  setCart: any
}) => {
  let q = cart.find((e) => e.id == id)?.quantity ?? 0
  let item = itemFromId(id)
  item.quantity = clamp(q + amount, 0, 10)
  let final = [...cart.filter((e) => e.id != id)]
  if (item.quantity != 0) final = [...final, item]
  setCart(final)
}

export const itemFromId = (id: string) => {
  let x = itemFromPizza(id)!
  return x
}
export const itemFromPizza = (id: string) => {
  let x = pizzaList.find((e) => e.id == id)!
  let i = { id: x.id, name: x.name, price: x.price, quantity: 0 }
  return i
}

export const pizzaFromId = (id: string) => {
  let x = pizzaList.find((e) => e.id == id)!
  return x
}

export const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

export const getTotalItems = (cart) => {
  let sum = 0
  cart.forEach((e) => {
    sum += e.quantity
  })
  return sum
}
