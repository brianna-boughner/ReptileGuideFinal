import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { HouseDoor } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container'
import i18n from '../../i18n';
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div >
      
      <div className='background'>
        <Row>
          <Col style={{ paddingLeft: '0', paddingRight: '0'}} className="title" xs={8}>
            <img src="./images/chameleon.jpg" width="40%"></img>
            <h1 className="reptileGuide">{t("title.label")}</h1>
          </Col>
          <Col style={{ paddingLeft: '0', paddingRight: '0', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
          <h3 style={{fontSize:"25px"}}>{t("quizprompt.label")}</h3>
          <a href="/quiz">
          <button className="startButton">{t("quizbutton.label")}</button>
          </a>
          </Col>
        </Row>
        <div>
          


<div>
</div>
        </div>
      </div>
    </div>
  )
}
