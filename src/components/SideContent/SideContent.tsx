import { useContext } from 'react';
import { Context } from '../UI/Grid/GridLayout';

export const SideContent = () => {
  const value = useContext(Context);
  return <>{value}</>;
};
