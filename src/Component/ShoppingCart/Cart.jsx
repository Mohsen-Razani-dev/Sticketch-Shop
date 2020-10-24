import React, {useEffect, useState} from "react";
import classes from "../../assets/Styles/ShoppingCart.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {Col, Divider, Row, Layout, Empty, Radio, Checkbox} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faCartPlus
} from "@fortawesome/free-solid-svg-icons";
import {deleteSticker, minusSticker, plusSticker} from "../../Redux/Stickers/actions";





const { Header, Content, Footer } = Layout;
const reducer = (accumulator, currentValue) => accumulator + currentValue;



const Cart = props => {
  const [delivery, setDelivery] = useState(0);
  const [agree, setAgree] = useState(false);
  const AllPurchases = useSelector(state => state.purchasesItem);
  const dispatch = useDispatch();

  const ChangeRadioDelivery = e => {
    setDelivery(e.target.value)
  }
  const onChangeAgree = e => {
    setAgree(e.target.value)
  }
  return (
    <Layout
      style={{
        position: "absolute",
        width: "100%",
        height: "calc(100% - 85px)",
        backgroundColor: "#ffffff"
      }}
    >
      <Header style={{ backgroundColor: "#ffffff", textAlign: "center" }}>
        <h1>Payment Summury</h1>
      </Header>
      <Content>
        <Row style={{ height: "100%" }}>
          <Col
            md={14}
            style={{
              maxHeight: "100%",
              overflow: "scroll",
              padding: "0 40px",
              backgroundColor: "#fafafa"
            }}
          >
            {AllPurchases && AllPurchases.length ? (
              AllPurchases.map(item => (
                <>
                  <Row className={classes.myItem} key={item.id}>
                    <Col md={1}>
                      <FontAwesomeIcon onClick={()=>dispatch(deleteSticker(item.id))} id={classes.delete} icon={faTrash}></FontAwesomeIcon>
                    </Col>
                    <Col md={4}>
                      <img src={item.img} alt="" />
                    </Col>
                    <Col md={4}>
                      <span id={classes.name}>{item.name}</span>
                    </Col>
                    <Col md={4}>
                      <span id={classes.cost}>{item.cost} $</span>
                    </Col>
                    <Col md={6}>
                      <div id={classes.btns}>
                        <button onClick={()=>dispatch(plusSticker(item.id))}>
                          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        </button>
                        <span id={classes.number}>{item.number}</span>
                        <button onClick={()=>dispatch(minusSticker(item.id))}>
                          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                        </button>
                      </div>
                    </Col>
                    <Col md={4}>
                      <span className={classes.totalCost}>
                        {Math.round(
                          (item.cost * item.number + Number.EPSILON) * 100) / 100}
                        $
                      </span>
                    </Col>
                  </Row>
                </>
              ))
            ) : (
              <div className={classes.noData}>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
              </div>
            )}
          </Col>
          <Col md={10}>
            <div className={classes.personalInfo}>
              <h1 style={{color:'rgba(40,47,73,0.62)',width:'100%',marginBottom:'20px',fontSize:'16px'}}>Personal Information</h1>
              <div className={classes.fullinfobox}>
                <h1> Fullname:</h1>
                <span> Mohsen Razani </span>
              </div>
              <div className={classes.fullinfobox}>
                <h1>Email :</h1>
                <span> mohsenrazani.z@gmail.com </span>
              </div>
              <div className={classes.fullinfobox}>
                <h1>Number :</h1>
                <span>+989212196508</span>
              </div>
              <div className={classes.fullinfobox}>
                <h1>Addres :</h1>
                <span> Iran-Tehran-Azadi tower - Str.02 </span>
              </div>
              <div className={classes.fullinfobox}>
                <h1> Postal Code:</h1>
                <span> 235GDl31osx </span>
              </div>
              <div className={classes.AgreeEditbox}>
                <Checkbox style={{color:'rgba(40,47,73,0.62)'}} onChange={onChangeAgree}>My profile is correct</Checkbox>
                <button>Edit</button>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer className={classes.footer}>
        <div className={classes.footerbox}>
          <div className={classes.footerDel}>
            <h1>Choose Delivery mode</h1>
            <Radio.Group onChange={ChangeRadioDelivery} value={delivery}>
              <Radio
                value={9.99}
                style={{
                  marginBottom: 10,
                  fontFamily: "Arial Rounded MT Bold",
                  fontSize: "13px",
                  color: "rgba(40,47,73,0.72)"
                }}
              >
                Send by post (Under 2 day) . 9.99$
              </Radio>
              <Radio
                value={0}
                style={{
                  marginBottom: 10,
                  fontFamily: "Arial Rounded MT Bold",
                  fontSize: "13px",
                  color: "rgba(40,47,73,0.72)"
                }}
              >
                Send by Sticketch Motorbike Courier (Under 1 - 4 day) . FREE
              </Radio>
            </Radio.Group>
          </div>

          <div className={classes.footerCheckout}>
            <div className={classes.checkItem}>
              <span>SUBTOTAL TTC: </span>
              <h1>{AllPurchases && AllPurchases.length ? AllPurchases.map(i=>(Math.round((i.cost * i.number + Number.EPSILON) * 100) / 100)).reduce(reducer).toFixed(2) : "0"} $</h1>
            </div>
            <div className={classes.checkItem}>
              <span>SHIPPING: </span>
              <h1>{delivery} $</h1>
            </div>
            <Divider></Divider>
            <div className={classes.checkItem}>
              <span>TOTAL: </span>
              <h1>{AllPurchases && AllPurchases.length ? (AllPurchases.map(i=>(Math.round((i.cost * i.number + Number.EPSILON) * 100) / 100)).reduce(reducer).toFixed(2)) : '0'} $</h1>
            </div>
            <button className={classes.checkoutbtn}>
              <span>CheckOut</span>
              <span>{AllPurchases && AllPurchases.length ? (AllPurchases.map(i=>(Math.round((i.cost * i.number + Number.EPSILON) * 100) / 100)).reduce(reducer).toFixed(2)) : '0'} $</span>
            </button>
          </div>

        </div>
      </Footer>
    </Layout>
  );
};

export default Cart;
