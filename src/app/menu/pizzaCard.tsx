"use client"
import {
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Grid,
  Group,
  Image,
  Select,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useViewportSize } from "@mantine/hooks"
import { modals } from "@mantine/modals"
import { ShoppingCart } from "tabler-icons-react"
import { useAtom } from "jotai"
import { itemFromId, modifyItem, pizzaFromId } from "../../lib/utils"

const PizzaCard = ({ pizza, index }: { pizza: Pizza; index: number }) => {
  const router = useRouter()
  const { id, name, description, price } = pizza
  // let w = (width < 600 ? width : 600) - 32

  return (
    <motion.div
      key={id}
      initial={{
        x: -200,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: (index + 1) / 4,
        ease: "easeInOut",
      }}
    >
      <Card
        withBorder
        p={0}
        my={8}
        // mih={300}
        // style={{ borderWidth: 6, borderColor: "#f06d27" }}
        radius={16}
        // h={128}
        style={{ cursor: "pointer" }}
        onClick={() =>
          modals.openContextModal({
            modal: "pizzaModal",
            title: pizza.name,
            innerProps: {
              pizza: pizza,
            },
          })
        }
      >
        <Grid>
          <Grid.Col span={4}>
            <Image
              height={128}
              width={128}
              // fit="fill"
              src={pizza.img}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Stack gap={0} align="center" justify="center" h="100%">
              <Text>{name}</Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={4}>
            <Stack
              gap={0}
              align="center"
              justify="center"
              w="auto"
              miw={64}
              h="100%"
            >
              <Text>{price}$</Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Card>
    </motion.div>
  )
}

export default PizzaCard
