import React, { useState } from 'react';

type ContextType = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

const Context = React.createContext<ContextType>({} as ContextType);

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [content, setContent] = useState('Test Slide');
  return (
    <Context.Provider value={{ content, setContent }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

export const useContent = () => React.useContext(Context);
