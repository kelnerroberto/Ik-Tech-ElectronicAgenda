import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function CommitmentCard({ commitments }) {
  return(
    <Box
      p='30px'
      rounded='20px'
      boxShadow='sm'
      bg='gray.200'
    >
      <Text>{ `Nome: ${commitments.name}` }</Text>
      <Text>{ `Título: ${commitments.title}` }</Text>
      <Text>{ `Data: ${commitments.date}` }</Text>
      <Text>{ `Hora: ${commitments.time}` }</Text>
      <Flex justifyContent='space-evenly'>
        <Button>Modificar</Button>
        <Button>Excluir</Button>
      </Flex>
    </Box>
  )
};
