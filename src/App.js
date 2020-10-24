import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Switch, Redirect } from "react-router-dom";
import RouteWithSubRoutes from "./Routes/RouteWithSubRoutes";
import { Routes } from "./Routes/Routes";
import ScrollToTop from "./Routes/ScrollToTop";
import { Provider } from "react-redux";
import store from "./Redux/store";

const fallback = (
  <div className='fallback'>
    Loading
  </div>
)

function App(props) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div className="App">
          <ScrollToTop />
          <Suspense fallback={fallback}>
            <Switch>
              {Routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Redirect to="/404" component={null} />
            </Switch>
          </Suspense>
        </div>
      </Provider>
    </>
  );
}

export default App;
