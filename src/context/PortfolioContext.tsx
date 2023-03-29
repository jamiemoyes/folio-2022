import {
  PropsWithChildren,
  ProviderProps,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';
import { Portfolio } from '../types';

const PortfolioContext = createContext<Portfolio>({} as Portfolio);

interface ProviderType extends PropsWithChildren {
  portfolio: Portfolio;
}

function PortfolioProvider({ portfolio, children }: ProviderType) {
  const folioRef = useRef<Portfolio>(portfolio);
  return (
    <PortfolioContext.Provider value={{ ...folioRef.current }}>
      {children}
    </PortfolioContext.Provider>
  );
}

function usePortfolioContext() {
  return useContext(PortfolioContext);
}

export { PortfolioProvider, usePortfolioContext };
