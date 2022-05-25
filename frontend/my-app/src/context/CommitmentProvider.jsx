import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GET_ALL_COMMITMENTS } from '../services/commitmentService';

export const CommitmentContext = createContext({});

export const CommitmentProvider = ({ children }) => {
  const [commitments, setCommitments] = useState([]);

  useEffect(() => {
    const setComms = async () => setCommitments((await GET_ALL_COMMITMENTS()).data);
    setComms();
  }, []);

  const value = {
    commitments,
    setCommitments,
  }

  return(
    <CommitmentContext.Provider value={ value }>
      { children }
    </CommitmentContext.Provider>
  )
}

CommitmentProvider.propTypes = {
  children: PropTypes.node.isRequired,
}