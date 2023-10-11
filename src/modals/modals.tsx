"use client"
import { ContextModalProps } from "@mantine/modals"
import { useAtom } from "jotai"
import { cartAtom } from "../atoms/atoms"
import { ShoppingCart } from "tabler-icons-react"
import { Button, Group, Image, Text, Stack } from "@mantine/core"
import { modifyItem } from "../lib/utils"
import CartView from "../components/cartView"

export const PizzaModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ pizza: Pizza }>) => {
  const [cart, setCart] = useAtom(cartAtom)

  return (
    <>
      <Stack>
        <Stack gap={8}>
          <Image
            radius="md"
            fit="contain"
            src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"
          />
          <Text size="sm">{innerProps.pizza.description}</Text>
          <Button
            fullWidth
            onClick={() => {
              modifyItem({
                id: innerProps.pizza.id,
                amount: 1,
                cart: cart,
                setCart: setCart,
              })
              context.closeModal(id)
            }}
          >
            <Group>
              <ShoppingCart />
              <Text>Add To Cart</Text>
              <Text>${innerProps.pizza.price}</Text>
            </Group>
          </Button>
        </Stack>
      </Stack>
      <Button
        variant="transparent"
        mt="md"
        fullWidth
        onClick={() => context.closeModal(id)}
      >
        Close
      </Button>
    </>
  )
}
export const CartModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{}>) => {
  const [cart, setCart] = useAtom(cartAtom)

  return (
    <>
      <CartView />
      {/* <Button
          variant="transparent"
          mt="md"
          fullWidth
          onClick={() => context.closeModal(id)}
        >
          Close
        </Button> */}
    </>
  )
}
