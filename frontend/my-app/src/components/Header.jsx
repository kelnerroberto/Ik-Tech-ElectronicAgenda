import { Button, Flex, HStack, Input } from "@chakra-ui/react";
import React from "react";

export default function AddTaskToAgenda() {
  return(
    <Flex p={8}>
      <HStack>
        <Input
          variant='filled'
          placeholder='My next task'
          />
        <Button
        >Add task</Button>
      </HStack>
    </Flex>
  )
}