import React from "react";
import * as S from "./style";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { i18n } = useTranslation();
  //Function that changes Interface Language
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <S.Wrapper>
      <S.Title>TO-DO LIST</S.Title>
      <S.LangButton onClick={() => changeLanguage("en")}>EN</S.LangButton>
      <S.LangButton onClick={() => changeLanguage("ru")}>RU</S.LangButton>
    </S.Wrapper>
  );
};
