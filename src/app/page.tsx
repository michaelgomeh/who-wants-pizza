"use client"

import {
  BackgroundImage,
  Box,
  Button,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"
import Link from "next/link"
export default function HomePage() {
  const { height, width } = useViewportSize()
  let h = height
  return (
    <div style={{ position: "relative" }}>
      <Image
        src="images/pizzaBG.jpg"
        h={h}
        style={{ objectPosition: "0% 0", position: "absolute" }}
        p={-24}
      />
      <Box w="100%" h={h} style={{ position: "absolute" }}>
        <Stack align="center" justify="space-around" h={h}>
          <Stack align="center">
            <Title c="white">Pizza Bologna</Title>
            <Link href={"/menu"}>
              <Button>Order Now</Button>
            </Link>
          </Stack>
          <Box></Box>
        </Stack>
      </Box>
    </div>
  )
}
