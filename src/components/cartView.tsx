"use client"
import {
  ActionIcon,
  BackgroundImage,
  Badge,
  Box,
  Button,
  Card,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core"
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import React, { useEffect, useState } from "react"
import { Minus, Pizza, Plus, ShoppingCart } from "tabler-icons-react"
import { pizzaList } from "../data/data"
import { Table } from "@mantine/core"
import { modifyItem } from "../lib/utils"
import { cartAtom } from "../atoms/atoms"
import Link from "next/link"
import { modals } from "@mantine/modals"

const CartItemView = ({
  item,
}: {
  item: CartItem
  // modifyItem: ({ id, amount }: { id: string; amount: number }) => void
}) => {
  let pizza = item
  const [cart, setCart] = useAtom(cartAtom)

  return (
    <Card withBorder>
      <Grid align="center">
        <Grid.Col span={4}>
          <Card radius="md" bg="pizza.5" m={0} py={4} px={8}>
            <Group wrap="nowrap" gap={0} justify="space-between">
              <ActionIcon
                size="xs"
                bg="pizza.5"
                onClick={() =>
                  modifyItem({
                    id: pizza.id,
                    amount: -1,
                    cart: cart,
                    setCart: setCart,
                  })
                }
              >
                <Minus color="black" />
              </ActionIcon>
              <Text>{item.quantity}</Text>
              <ActionIcon
                size="xs"
                bg="pizza.5"
                onClick={() =>
                  modifyItem({
                    id: pizza.id,
                    amount: 1,
                    cart: cart,
                    setCart: setCart,
                  })
                }
              >
                <Plus color="black" />
              </ActionIcon>
            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col span={5}>
          <Text>{item.name}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text style={{ textAlign: "end" }}>
            ${pizza.price * item.quantity}
          </Text>
        </Grid.Col>
      </Grid>
    </Card>
  )
}

// const pizzaFromItem = (item: CartItem) => {
//   let x = pizzaList.find((e) => e.id == item.id)
//   return x
// }

const CartView = () => {
  const cart = useAtomValue(cartAtom)
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    setItems(cart.map((e) => Object({ ...e!, quantity: e.quantity })))
  }, [cart])

  const getTotal = () => {
    let sum = 0
    cart.forEach((e) => {
      let p = e
      sum += p!.price * e.quantity
    })
    return sum.toFixed()
  }

  return (
    <Stack align="stretch">
      <Stack gap={8}>
        {items
          .sort((a, b) => a.price - b.price)
          .map((e) => (
            <CartItemView item={e} />
          ))}
      </Stack>

      <Card withBorder>
        <Group justify="space-between">
          <Text variant="outline">Total: ${getTotal()}</Text>
          <Link href="/thankyou">
            <Button radius="md" onClick={() => modals.closeAll()}>
              <Group>
                <Pizza />
                <Text>Order</Text>
              </Group>
            </Button>
          </Link>
        </Group>
      </Card>
    </Stack>
  )
}

export default CartView
