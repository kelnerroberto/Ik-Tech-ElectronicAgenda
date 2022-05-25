import { Button, Flex, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export default function AddTaskToAgenda() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  return(
    <Flex p={8}>
      <HStack>
        <Input
          variant='filled'
          placeholder='Nome'
          onChange={({ target }) => setName(target.value)}
          value={name}
        />
        <Input 
          variant='filled'
          placeholder='Título'
          onChange={({ target }) => setTitle(target.value)}
          value={title}
        />
      </HStack>
      <Button ml='10px'>Add task</Button>
    </Flex>
  )
}