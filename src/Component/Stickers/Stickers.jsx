import React from "react";
import classes from "../../assets/Styles/Home.module.scss";
import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { InboxOutlined } from "@ant-design/icons";
import { category, devices } from "./initialState";
import { Link } from "react-router-dom";

const Stickers = () => {
  return (
    <div className={classes.Home}>
      <header>
        <h1>Start earning With us</h1>
        <button><Link to='/stickers/market'>Going To Shop!</Link></button>
      </header>
      <section>
        <h1 className={classes.sectionHeader}>Shop by category</h1>
        <Row>
          {category.map(item => (
            <Col md={4} className={classes.categoryBox} key={item.id}>
              <Link to="/stickers/market">
                <div className={classes.categoryItem} style={{ backgroundColor: `${item.color}` }}>
                  <h1>{item.name}</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <img src={item.img} alt="" />
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
      <article>
        <h1 className={classes.articleHeader}>Shop by devices</h1>
        <Row>
          {devices.map(device => (
            <Col md={6} className={classes.deviceBox}>
              <div
                className={classes.deviceItem}
                style={{ backgroundImage: `url(${device.img})` }}
              >
                <h1>{device.name}</h1>
              </div>
            </Col>
          ))}
        </Row>
      </article>
      <div className={classes.uploadDesign}>
        <h1 className={classes.uploadHeader}>Upload Your Design</h1>
        <div className={classes.UploadBox}>
          <div className={classes.UploadItem}>
            <FontAwesomeIcon icon={faUpload} size="4x"></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <footer>
        <div className={classes.description}>
          <Row style={{ alignItems: "center" }}>
            <Col md={8}>
              <div className={classes.descriptionPayCard}>
                <img src={require("../../assets/Img/footer/visa.jpg")} alt="" />
                <img
                  src={require("../../assets/Img/footer/master.png")}
                  alt=""
                />
                <img src={require("../../assets/Img/footer/pay.png")} alt="" />
                <img src={require("../../assets/Img/footer/dis.png")} alt="" />
              </div>
            </Col>
            <Col md={8}>
              <div className={classes.descriptionSatisfactionTxt}>
                <h1>100% Satisfaction Guarantee</h1>
              </div>
            </Col>
            <Col md={8}>
              <div className={classes.descriptionDet}>
                <p>
                  eco friendly colours, no minimum amount, easy to remove and
                  waterproof vinyl
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className={classes.links}>
          <div className={classes.linksBoxTop}>
            <li>ABOUT</li>
            <li>FAQS</li>
            <li>REVIEWS</li>
            <li>MEDIA</li>
            <li>CASE STUDIES</li>
            <li>FAN PAGE</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </div>
          <div className={classes.linksBoxMedia}>
            <li>facebook</li>
            <li>twitter</li>
            <li>google +</li>
            <li>instagram</li>
            <li>hello@juststickers.in</li>
          </div>
          <span>
            © Just Stickers | Terms | Privacy | Returns and Cancellations | Made
            with M.Z in iran
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Stickers;
