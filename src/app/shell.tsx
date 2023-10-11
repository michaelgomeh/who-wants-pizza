"use client"

import React from "react"
import {
  ActionIcon,
  Affix,
  AppShell,
  Box,
  Burger,
  Button,
  Group,
  Image,
  Text,
} from "@mantine/core"

import { useDisclosure } from "@mantine/hooks"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Links from "./links"
import Link from "next/link"
import { ShoppingCart } from "tabler-icons-react"
import { useAtom, useAtomValue } from "jotai"
import { cartAtom } from "../atoms/atoms"
import { getTotalItems } from "../lib/utils"
import { modals } from "@mantine/modals"

const Shell = ({ children }) => {
  const [opened, { toggle }] = useDisclosure()

  const cart = useAtomValue(cartAtom)

  const pathname = usePathname()
  let path = pathname

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      // padding="md"
    >
      <AppShell.Header>
        <Group
          h="60px"
          px="md"
          justify="space-between"
          style={{ width: "100vw" }}
        >
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Box h={36}>
              <Link href="/">
                <Image height={36} src="/images/logo.png" />
              </Link>
            </Box>
          </Group>
          <Group ml="xl" gap={0} visibleFrom="sm">
            <Links dir="row" />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <Links dir="column" />
      </AppShell.Navbar>
      <AppShell.Main
        p={pathname == "/" ? 0 : 16}
        pt={pathname == "/" ? 0 : 60 + 16}
      >
        <AnimatePresence key={path}>
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </AppShell.Main>
      {pathname != "/cart" && (
        <Affix position={{ bottom: 32, right: 32 }}>
          {/* <Link href="/cart"> */}
          <motion.div
            key={getTotalItems(cart)}
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            // style={{ objectPosition: "100% 100%" }}
          >
            <Button
              px={12}
              style={{ borderWidth: 2, borderColor: "black" }}
              size="md"
              onClick={() =>
                modals.openContextModal({
                  modal: "cartModal",
                  title: "Your Cart",
                  innerProps: {},
                })
              }
            >
              <Group wrap="nowrap" gap={4}>
                <Text c="black">{getTotalItems(cart)}</Text>
                <ShoppingCart strokeWidth={1} color="black" />
              </Group>
            </Button>
          </motion.div>
          {/* </Link> */}
        </Affix>
      )}
    </AppShell>
  )
}

export default Shell
