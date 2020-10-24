import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Col, Divider, Popover, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faPlus,
  faMinus,
  faTrash,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import classes from "../../assets/Styles/Navbar.module.scss";
import {
  addSticker,
  deleteSticker,
  minusSticker,
  plusSticker
} from "../../Redux/Stickers/actions";

const Navbar = props => {
  const dispatch = useDispatch();
  const Purchases = useSelector(state => state.purchasesItem);

  const content = (
    <div>
      {Purchases && Purchases.length ? (
        Purchases.map(i => (
          <>
            <div key={i.id} className={classes.PurchasesContainer}>
              <div className={classes.Purchases}>
                <div className={classes.Purchasesinfo}>
                  <Row style={{ width: "100%", alignItems: "center" }}>
                    <Col md={2}>
                      <button
                        id={classes.deletePurch}
                        onClick={() => dispatch(deleteSticker(i.id))}
                      >
                        <FontAwesomeIcon
                          icon={faTimes}
                          style={{ color: "#ff7e7e", fontSize: 16 }}
                        ></FontAwesomeIcon>
                      </button>
                    </Col>
                    <Col md={5}>
                      <img src={i.img} alt="..." />
                    </Col>
                    <Col md={9}>
                      <div className={classes.PurchasesDetails}>
                        <p>{i.name}</p>
                        <h4>
                          {Math.round(
                            (i.cost * i.number + Number.EPSILON) * 100
                          ) / 100}{" "}
                          $
                        </h4>
                      </div>
                    </Col>
                    <Col md={8}>
                      <div className={classes.PurchasesBtn}>
                        <button onClick={() => dispatch(plusSticker(i.id))}>
                          <FontAwesomeIcon
                            icon={faPlus}
                            style={{ color: "#757e85", fontSize: 11 }}
                          ></FontAwesomeIcon>
                        </button>
                        <span style={{ fontSize: 13 }}>{i.number}</span>
                        <button
                          onClick={() => dispatch(minusSticker(i.id))}
                          disabled={i.number === 1}
                        >
                          <FontAwesomeIcon
                            icon={faMinus}
                            style={{ color: "#757e85", fontSize: 11 }}
                          ></FontAwesomeIcon>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <Divider></Divider>
            </div>
          </>
        ))
      ) : (
        <p>Empty Purchases</p>
      )}
      {Purchases && Purchases.length ? (
        <div className={classes.Checkout}>
          <Link to="/shopping-cart">Checkout</Link>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className={classes.navbar}>
      <ul className={classes.navLinks}>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stickers">Stickers</Link>
        </li>
        <li>
          <Link to="/wall-art">Wall Art</Link>
        </li>
        <li>
          <Link to="/mobile-case">Mobile Case</Link>
        </li>
      </ul>
      <Popover content={content} title="Purchases" placement="bottomRight">
        <Link to="/shopping-cart" style={{ color: "#282f49" }}>
          <Badge
            count={Purchases && Purchases.length ? Purchases.length : 0}
            className={classes.badge}
          >
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </Badge>
        </Link>
      </Popover>
    </div>
  );
};

export default Navbar;
