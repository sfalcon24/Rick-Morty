import {useState} from 'react';

const useConnect = () => {
  const [ready] = useState(true);

  return {ready};
};

export default useConnect;
