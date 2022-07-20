import React from "react";

import { useTranslation } from "react-i18next";

import {useState} from 'react';




const LanguageSelector = () => {

  const { t, i18n } = useTranslation();

  const [buttonText, setButtonText] = useState('FR');

  function handleClick() {
    if(buttonText=="EN"){
      setButtonText("FR")
      i18n.changeLanguage("en");
    }
    else{
      setButtonText("EN")
      i18n.changeLanguage("fr");
    }
  }

  return (

    <div>
    <button style={{marginTop:"-35%"}} onClick={handleClick}>{buttonText}</button>
  </div>

  );

};


export default LanguageSelector;