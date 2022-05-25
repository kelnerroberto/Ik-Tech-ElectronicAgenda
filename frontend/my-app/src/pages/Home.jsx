import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { GET_ALL_COMMITMENTS } from '../services/commitmentService';

export default function Home() {
  const [allCommitments, setAllCommitments] = useState([]);

  useEffect(() => {
    setAllCommitments(GET_ALL_COMMITMENTS());
  }, []);
  return(
    <Flex height='100vh' alignItems='center' direction='column'>
      <p>oi</p>
    </Flex>
  )
}