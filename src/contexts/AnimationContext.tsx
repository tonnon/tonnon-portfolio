import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnimationContextType {
  animatedCards: Set<number>;
  markAsAnimated: (id: number) => void;
  hasBeenAnimated: (id: number) => boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [animatedCards] = useState(() => new Set<number>());

  const markAsAnimated = (id: number) => {
    animatedCards.add(id);
  };

  const hasBeenAnimated = (id: number) => {
    return animatedCards.has(id);
  };

  return (
    <AnimationContext.Provider value={{ animatedCards, markAsAnimated, hasBeenAnimated }}>
      {children}
    </AnimationContext.Provider>
  );
};
