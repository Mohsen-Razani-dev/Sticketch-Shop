import React, { useState, useEffect } from "react";
import classes from "../../../assets/Styles/Market.module.scss";
import { Col, Row, AutoComplete, Radio, Divider } from "antd";
import { market } from "./initialStateMarket";
import {
  faMinus,
  faPlus,
  faBookmark,
  faTimes,
  faCartPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import SidebarMarket from "./SidebarMarket";
import { connect, useDispatch, useSelector } from "react-redux";
import { addSticker, deleteSticker } from "../../../Redux/Stickers/actions";
import { fetchStickers } from "../../../Redux/Stickers/actions";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat)
});
const StickersMarket = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const [pickedItem, setPickedItem] = useState([]);
  const dispatch = useDispatch();
  const Purch = useSelector(state => state.purchasesItem);
  const AllStickers = useSelector(state => state.allStickers);

  const onSearch = searchText => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onSelect = data => {
    console.log("onSelect", data);
  };
  const onChange = data => {
    setValue(data);
  };

  useEffect(() => {
    dispatch(fetchStickers());
  }, []);

  return (
    <div className={classes.market}>
      <Divider></Divider>
      <header>
        <Radio.Group
          defaultValue="a"
          buttonStyle="solid"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Radio.Button value="a" className={classes.radiobtn}>
            All Stickers
          </Radio.Button>
          <Radio.Button value="b" className={classes.radiobtn}>
            Brand
          </Radio.Button>
          <Radio.Button value="c" className={classes.radiobtn}>
            Car
          </Radio.Button>
          <Radio.Button value="e" className={classes.radiobtn}>
            Naturals
          </Radio.Button>
          <Radio.Button value="f" className={classes.radiobtn}>
            Laptop
          </Radio.Button>
          <Radio.Button value="g" className={classes.radiobtn}>
            Movie
          </Radio.Button>
        </Radio.Group>
        <AutoComplete
          className={classes.searchbox}
          options={options}
          style={{
            width: 350
          }}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="Search Your Stickers name"
        />
      </header>
      <Divider></Divider>
      <div>
        <Row>
          <Col md={3}>
            <div className={classes.sidebar}>
              <SidebarMarket />
            </div>
          </Col>
          <Col md={21} style={{ padding: 20 }}>
            <Row>
              <Col md={16} style={{ padding: 20 }}>
                <div className={classes.marketHeaderGifts}>
                  <span>
                    <Link to="/gift">See Gifts!</Link>
                  </span>
                </div>
              </Col>
              <Col md={8} style={{ padding: 20 }}>
                <div className={classes.tutorialStickers}>
                  <img
                    className={classes.tutorialStickersVid}
                    src={require("../../../assets/Img/Market/marketheader2.jpg")}
                    alt="..."
                  />
                  <span>Cras ultricies ligula sed magna dictum porta.</span>
                  <button className={classes.tutorialStickersLink}>
                    Tutorial For Sticketch
                  </button>
                </div>
              </Col>
            </Row>
            <div className={classes.shopItemsContainer}>
              <Row
                style={{ justifyContent: "center", marginTop: "30px" }}
                gutter={[48, 48]}
              >
                {AllStickers.map(item => (
                  <Col md={5} className={classes.stickerItemBox} key={item.id}>
                    <div className={classes.stickerItem}>
                      <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                      <img src={item.img} alt="sticker" />
                      <div id={classes.descrtItem}>
                        <h2>{item.name}</h2>
                        <span>{item.cost} $</span>

                        {Purch.find(i => i.id === item.id) ?
                            <button
                                onClick={() => dispatch(deleteSticker(item.id))}
                                style={{
                                  fontSize: 17,
                                  color: "#8a6a6a",
                                  backgroundColor: "#fff2f2",
                                  transition: "500ms all ease-out"
                                }}
                            >
                              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                            </button>
                            :
                            <button
                                onClick={() => dispatch(addSticker(item))}
                                style={{
                                  fontSize: 17,
                                  color: "#78856a",
                                  backgroundColor: "#f6fff9",
                                  transition: "500ms all ease-out"
                                }}
                            >
                              <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                            </button>
                        }
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StickersMarket;
