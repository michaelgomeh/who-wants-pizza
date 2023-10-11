"use client"

import { MantineColorsTuple, createTheme } from "@mantine/core"

const pizza: MantineColorsTuple = [
  "#fff0e4",
  "#ffe0cf",
  "#fac0a1",
  "#f69e6e",
  "#f28043",
  "#f06d27",
  "#f06418",
  "#d6530c",
  "#bf4906",
  "#a73c00",
]

export const theme = createTheme({
  primaryColor: "pizza",
  colors: {
    pizza: pizza,
  },
})
