import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const cartAtom = atomWithStorage<CartItem[]>("cart", [
  {
    id: "hawaiian",
    name: "Hawaiian Pizza",
    price: 11.49,
    quantity: 1,
  },
  {
    id: "mushroom-lovers",
    name: "Mushroom Lovers",
    price: 13.99,
    quantity: 3,
  },
  {
    id: "pepperoni-feast",
    name: "Pepperoni Feast",
    price: 11.99,
    quantity: 2,
  },
])

////////////

const countAtom = atom(0)

const countryAtom = atom("Japan")

const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"])

const animeAtom = atom([
  {
    title: "Ghost in the Shell",
    year: 1995,
    watched: true,
  },
  {
    title: "Serial Experiments Lain",
    year: 1998,
    watched: false,
  },
])

const progressAtom = atom((get) => {
  const anime = get(animeAtom)
  return anime.filter((item) => item.watched).length / anime.length
})
