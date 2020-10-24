import React from "react";
import classes from "../../assets/Styles/Homepage.module.scss";
import { Col, Row, Input } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const { Search } = Input;
const Home = () => {
  return (
    <div className={classes.homepage}>
      <header>
        <Row style={{ padding: "0 111px", width: "100%" }}>
          <Col md={14}>
            <div className={classes.headertxts}>
              <span>People.Bussines.Brand</span>
              <h1>
                We are the bridge <br /> to your growth
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br />
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
                <br /> when an unknown printer took a galley.
              </p>
              <div className={classes.headerlink}>
                <Link to="/signup">Sign up</Link>
                <Link to="/offer">Offering state</Link>
              </div>
            </div>
          </Col>
        </Row>
      </header>

      <section>
        <div className={classes.sectionHeader}>
          <span>Our Brand</span>
          <h1>What We Do</h1>
        </div>
        <Row gutter={[48, 48]}>
          <Col md={8}>
            <div className={classes.sectionbox}>
              <img
                src={require("../../assets/Img/Stickers/retro-pc.png")}
                alt=""
              />
              <span>01</span>
              <h1>DISCOVER</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </Col>
          <Col md={8}>
            <div className={classes.sectionbox}>
              <img
                src={require("../../assets/Img/Stickers/plants.png")}
                alt=""
              />
              <span>02</span>
              <h1>CREATE</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </Col>
          <Col md={8}>
            <div className={classes.sectionbox}>
              <img src={require("../../assets/Img/Stickers/vans.png")} alt="" />
              <span>03</span>
              <h1>DELIVER</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </Col>
        </Row>
        <div className={classes.sectionLearnMore}>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration in some form,
            <br />
          </p>
          <button>LEARN MORE</button>
        </div>
      </section>
      <article>
        <Row>
          <Col md={13}>
            <div className={classes.ourServicesheader}>
              <span>Our Offers</span>
              <h1>Our Services</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={[48, 48]}>
          <Col md={8}>
            <div className={classes.servicesBox}>
              <img
                src={require("../../assets/Img/Stickers/explore-astronaut.png")}
                alt="..."
              />
              <h1>PEOPLE</h1>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur elit.</li>
                <li>Cras porttitor erat vel nisl faucibus bibendum.</li>
                <li>Fusce mollis enim non mi vehicula hendrerit.</li>
                <li>In a nisl et sapien tristique porttitor.</li>
                <li>Nam imperdiet nibh non pellentesque condimentum.</li>
                <li>Nulla egestas tortor in efficitur aliquet.</li>
                <li>Cras porttitor erat vel nisl faucibus bibendum.</li>
              </ul>
              <Link to="/learnmore">LEARN MORE +</Link>
            </div>
          </Col>
          <Col md={8}>
            <div className={classes.servicesBox}>
              <img
                src={require("../../assets/Img/Stickers/explore-astronaut.png")}
                alt="..."
              />
              <h1>PEOPLE</h1>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur elit.</li>
                <li>Cras porttitor erat vel nisl faucibus bibendum.</li>
                <li>Fusce mollis enim non mi vehicula hendrerit.</li>
                <li>In a nisl et sapien tristique porttitor.</li>
                <li>Nam imperdiet nibh non pellentesque condimentum.</li>
                <li>Nulla egestas tortor in efficitur aliquet.</li>
                <li>Cras porttitor erat vel nisl faucibus bibendum.</li>
              </ul>
              <Link to="/learnmore">LEARN MORE +</Link>
            </div>
          </Col>
          <Col md={8}>
            <div className={classes.servicesBox}>
              <img
                src={require("../../assets/Img/Stickers/explore-astronaut.png")}
                alt="..."
              />
              <h1>PEOPLE</h1>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur elit.</li>
                <li>Cras porttitor erat vel nisl faucibus bibendum.</li>
                <li>Fusce mollis enim non mi vehicula hendrerit.</li>
                <li>In a nisl et sapien tristique porttitor.</li>
                <li>Nam imperdiet nibh non pellentesque condimentum.</li>
                <li>Nulla egestas tortor in efficitur aliquet.</li>
                <li>Cras porttitor erat vel nisl faucibus bibendum.</li>
              </ul>
              <Link to="/learnmore">LEARN MORE +</Link>
            </div>
          </Col>
        </Row>
        <div className={classes.viewourServicesbtn}>
          <button>VIEW OUR SERVICES</button>
        </div>
      </article>
      <div className={classes.Ournewsletter}>
        <Row style={{ width: "100%" }}>
          <Col md={{ span: 12, offset: 12 }}>
            <div className={classes.newsletter}>
              <span>Our Newsletter</span>
              <h1>Stay In touch</h1>
              <p>Enter your Email to sign uo for our weekly newsletter</p>
              <div className={classes.newsletterinputbox}>
                <Search
                  placeholder="input search text"
                  enterButton="SIGN UP NOW"
                  size="large"
                  onSearch={value => console.log(value)}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <footer>
        <Row
          gutter={[48, 48]}
          style={{ width: "100%", justifyContent: "center" }}
        >
          <Col md={24} className={classes.footerHeader}>
            <h1>STICKETCH</h1>
          </Col>
          <Col md={7}>
            <div className={classes.footerboxsAdress}>
              <p>
                123 Address in Stuff lane <br />
                City Tehran 021
              </p>
              <span>mohsenrazani.z@info.com</span>
            </div>
          </Col>
          <Col md={10}>
            <div className={classes.footerboxsLinks}>
              <ul>
                <li>HOME</li>
                <li>WHAT WE DO</li>
                <li>WHO WE ARE</li>
                <li>LETS CONNECT</li>
              </ul>
              <p>MZ-DESIGN 2020</p>
              <span>ALL RIGHT RESERVED</span>
            </div>
          </Col>
          <Col md={7}>
            <div className={classes.footerboxsSocial}>
              <span>Social: </span>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </li>
                <li>
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Home;
