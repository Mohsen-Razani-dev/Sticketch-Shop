import React from 'react';
import {Link} from "react-router-dom";
import classes from '../../../assets/Styles/Market.module.scss'

const SidebarMarket = () => {
    return (
        <div className={classes.sidbar}>
          <h1>Product</h1>
          <Link to='/stickers'>Stickers</Link>
          <Link to='/socks'>Socks</Link>
          <Link to='/hat'>Hat</Link>
          <Link to='/mug'>Mug</Link>
          <Link to='/helmet'>Helmet</Link>
          <Link to='/stationery'>Stationery</Link>
          <Link to='/solls'>Dolls</Link>
        </div>
    );
};

export default SidebarMarket;