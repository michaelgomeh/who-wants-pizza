"use client"
import React, { useState } from "react"
import {
  Button,
  Group,
  ScrollArea,
  SimpleGrid,
  Stack,
  ActionIcon,
  Text,
  Transition,
} from "@mantine/core"
import PizzaCard from "./pizzaCard"
import { motion } from "framer-motion"
import { pizzaCategories, pizzaList } from "../../data/data"
import { Leaf, Star, Pizza, List, Mug } from "tabler-icons-react"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Page = () => {
  const [curCategory, setCurCategory] = useState<string | null>("Classic")

  const pathname = usePathname()

  function getCategoryIcon(categoryId) {
    switch (categoryId) {
      case "Vegetarian":
        return <Leaf />
      case "Specialty":
        return <Star />
      case "Classic":
        return <Pizza />
      case "Drinks":
        return <Mug />
      default:
        return <List />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "anticipate" }}
    >
      <Stack gap={0}>
        <Group wrap="nowrap" justify="space-between" align="stretch" gap={0}>
          {pizzaCategories.map((e) =>
            curCategory == e.id ? (
              // <Stack align="center"  gap={0}>
              <Button radius={8} size="sm" px={8} key={e.id}>
                <Group wrap="nowrap" gap={4}>
                  {getCategoryIcon(e.id)}
                  <motion.div
                    key={e.id}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    // exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Text>{e.name}</Text>
                  </motion.div>
                </Group>
              </Button>
            ) : (
              // </Stack>
              // <Stack align="center" mx="auto">
              <ActionIcon
                radius={8}
                size={36}
                onClick={() => setCurCategory(e.id)}
                key={e.id}
              >
                {getCategoryIcon(e.id)}
              </ActionIcon>
              // </Stack>
            )
          )}
        </Group>
        <motion.div
          key={curCategory}
          // initial={{ opacity: 0, y: 200 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1, ease: "easeIn" }}
        >
          {pizzaList
            .filter((e) =>
              curCategory == null ? true : e.category == curCategory
            )
            .map((e, i) => (
              <motion.div whileHover={{ scale: 1.05 }} key={e.id}>
                <PizzaCard pizza={e} index={i} />
              </motion.div>
            ))}
        </motion.div>
      </Stack>
    </motion.div>
  )
}

export default Page
//
