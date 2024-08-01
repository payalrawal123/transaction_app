import axios from 'axios';

const API_URL = 'http://localhost:8080';

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

const getLedgers = async (token) => {
  const response = await axios.get(`${API_URL}/ledger`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const createLedger = async (ledgerData, token) => {
  const response = await axios.post(`${API_URL}/ledger`, ledgerData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const addTransaction = async (transactionData, token) => {
  const response = await axios.post(`${API_URL}/transaction`, transactionData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
// const getTransactions  = async (token) => {
//   const response = await axios.get(`${API_URL}/transaction`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

const getTransactions = async (ledgerId, startDate, endDate, token) => {
  const response = await axios.get(`${API_URL}/transaction/${ledgerId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      startDate,
      endDate,
    },
  });
  return response.data;
};

const generatePDF = async (ledgerId, startDate, endDate, token) => {
  const response = await axios.get(`${API_URL}/transactions/${ledgerId}/pdf`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      startDate,
      endDate,
    },
    responseType: 'blob',
  });
  return response.data;
};

export { register, login, getLedgers, createLedger, addTransaction, getTransactions, generatePDF };
