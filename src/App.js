import React from 'react'

import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

// import components 
import Navbar from './Components/Navbar/Navbar'

// import views
import Home from './Views/Home/Home'
import Exchanges from './Views/Exchanges/Exchanges';
import Cryptocurrencies from './Views/Cryptocurrencies/Cryptocurrencies';
import CryptoDetails from './Views/CryptoDetails/CryptoDetails';
import News from './Views/News/News';

// import Css
import './App.css';

const App = () => {
    return (
        <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            CryptoMarket Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
        </div>
    </div>
        </div>
    )
}

export default App
