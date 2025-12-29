import React, { createContext, ReactNode, useContext, useState } from 'react';

type Language = 'AR' | 'FR' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  visible: boolean;
  openLanguageModal: () => void;
  close: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Language>('FR');
  const [visible, setVisible] = useState(false);

  const openLanguageModal = () => setVisible(true);
  const close = () => setVisible(false);

  return (
    <LanguageContext.Provider value={{ lang, setLang, visible, openLanguageModal, close }}>
      {children}
    </LanguageContext.Provider>
  );
};