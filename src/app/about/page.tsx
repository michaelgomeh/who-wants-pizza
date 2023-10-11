import { Image, Stack, Text, Title } from "@mantine/core"
import React from "react"

const About = () => {
  return (
    <Stack align="center">
      <Image src="images/aboutPizza.png" w={128} h={128} fit="scale-down" />
      <Title my={16}>About Us</Title>
      <Text>
        Welcome to [Your Restaurant Name], your go-to destination for delicious
        vegetarian and vegan pizzas! At [Your Restaurant Name], we are
        passionate about creating mouthwatering pizzas that cater to a variety
        of tastes and dietary preferences.
      </Text>

      <Text>
        Our story began with a love for pizza and a commitment to
        sustainability. We believe that food should not only be tasty but also
        good for the planet. That&apos;s why we source the freshest local
        ingredients for our pizzas and offer a wide range of vegetarian and
        vegan options.
      </Text>

      <Text>Here are a few things that set us apart:</Text>
      <ul>
        <li>
          Handcrafted Pizzas: Each pizza is carefully crafted by our skilled
          chefs to ensure the perfect combination of flavors and textures.
        </li>
        <li>
          Fresh and Local Ingredients: We prioritize using fresh, locally
          sourced ingredients to support our community and provide you with the
          best quality.
        </li>
        <li>
          Diverse Menu: Whether you&apos;re a vegetarian, vegan, or a meat
          lover, we have a pizza that suits your taste.
        </li>
        <li>
          Online Ordering: Conveniently order your favorite pizzas online and
          have them delivered to your doorstep.
        </li>
      </ul>

      <Text>
        Our mission is to serve delicious and sustainable pizzas that make every
        meal a memorable experience. Thank you for choosing [Your Restaurant
        Name]. We look forward to serving you!
      </Text>
    </Stack>
  )
}

export default About
