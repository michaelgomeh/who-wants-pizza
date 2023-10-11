// "use client"

import "@mantine/core/styles.css"
import React from "react"
import {
  MantineProvider,
  ColorSchemeScript,
  Text,
  Button,
  Image,
} from "@mantine/core"
import { theme } from "../theme"
import { useDisclosure } from "@mantine/hooks"
import { AppShell, Burger, Group, UnstyledButton, Stack } from "@mantine/core"
import Shell from "./shell"
import "public/styles.css"
import { ModalsProvider } from "@mantine/modals"
import { CartModal, PizzaModal } from "../modals/modals"

export const metadata = {
  title: "Who Wants Pizza",
  description: "A Pizza store for my portfolio.",
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ModalsProvider
            modals={{ pizzaModal: PizzaModal, cartModal: CartModal }}
          >
            <Shell>{children}</Shell>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
