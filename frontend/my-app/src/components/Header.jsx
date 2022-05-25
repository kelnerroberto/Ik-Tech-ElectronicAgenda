import { Button, Flex, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { POST_NEW_COMMITMENT } from "../services/commitmentService";

export default function AddTaskToAgenda() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  const createNewCommitment = async () => {
    try {
      const body = {
        name,
        title,
      }

      await POST_NEW_COMMITMENT(body);

    } catch (err) {
      console.log(err.message);
    }
  }

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
      <Button
        ml='10px'
        onClick={() => createNewCommitment()}
      >
          Add task
      </Button>
    </Flex>
  )
}