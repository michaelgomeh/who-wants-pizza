import { Button, Flex, Stack, Text } from "@mantine/core"
import Link from "next/link"
import React from "react"

type Urls = { [key: string]: string }
const Links = ({
  dir,
  close,
}: {
  dir: direction
  close?: () => CallableFunction
}) => {
  const urls: Urls = {
    Home: "/",
    Menu: "/menu",
    About: "/about",
    Contact: "/contact",
  }

  return (
    <Flex direction={dir} gap={8}>
      {Object.keys(urls).map((e) => (
        <Link href={urls[e]} onClick={close} key={e}>
          <Text>{e}</Text>
        </Link>
      ))}
    </Flex>
  )
}

export default Links
