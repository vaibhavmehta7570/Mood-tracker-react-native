import React, { createContext, useCallback, useContext, useState } from 'react';
type AppContextType = {
  user_Id: number;
  handleUserIdChange: (id: number) => void;
};
export const AppContext = createContext<AppContextType>({
  user_Id: 1,
  handleUserIdChange: () => {},
});

export const AppProvider: React.FC = ({ children }: any) => {
  const [user_Id, setUserId] = useState<number>(1);
  const handleUserIdChange = useCallback((id: number) => {
    setUserId(id);
  }, []);

  return (
    <AppContext.Provider value={{ user_Id, handleUserIdChange }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
