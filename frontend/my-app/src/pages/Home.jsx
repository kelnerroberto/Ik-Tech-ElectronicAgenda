import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CommitmentCard from '../components/CommitmentCards';
import { GET_ALL_COMMITMENTS } from '../services/commitmentService';

export default function Home() {
  const [allCommitments, setAllCommitments] = useState([]);

  useEffect(() => {
    const setComms = async () => setAllCommitments((await GET_ALL_COMMITMENTS()).data);
    setComms();
  }, []);

  return(
    <Flex height='100vh' alignItems='center' direction='column'>
       { allCommitments.map(eachCommitment => <CommitmentCard commitments={eachCommitment} key={eachCommitment.id}/>) }
    </Flex>
  )
}
