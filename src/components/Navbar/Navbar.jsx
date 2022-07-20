import './navbar.css';
import { HouseDoor, BookmarkFill } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown';

import { useTranslation } from "react-i18next";
import LanguageSelector from "../Language-Selector/LanguageSelector.jsx";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <div className='navbar'>
      <div className='left'>
        <a href="/"> {t("title.label")}</a>
        
      </div>
      <div className='right'>
        <LanguageSelector/>
        <a href="/quiz">Quiz</a>
        <Dropdown>
  <Dropdown.Toggle id="dropdown-basic" className="dropdownButton">
    {t("careguide.label")}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/snakes">{t("snake.label")}</Dropdown.Item>
    <Dropdown.Item href="/frogs">{t("frog.label")}</Dropdown.Item>
    <Dropdown.Item href="/lizards">{t("lizard.label")}</Dropdown.Item>
    <Dropdown.Item href="/turtles">{t("turtle.label")}</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        <a href="/contact">{t("contact.label")}</a>
        <OverlayTrigger
      key={"bottom"}
      placement={"bottom"}
      overlay={
        <Tooltip>
          {t("saved.label")}
        </Tooltip>
         }
        >  
        <a href="/saved"><BookmarkFill color="white" size={20}/></a>
        </OverlayTrigger>
      </div>
    </div>
  )
}
