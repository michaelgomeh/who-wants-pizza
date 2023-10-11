interface PizzaCategory {
  id: string
  name: string
  description: string
}
interface Pizza {
  id: string
  name: string
  description: string
  price: number
  img: string
}

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

type direction = "column" | "row"
