import { Route,Switch,Redirect } from "react-router-dom";
import Products from "./Pages/Products";
import Welcome from "./Pages/Welcome";
import Header from "./Component/Header";
import ProductDetail from "./Pages/product-detail";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"/>
          </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path='/welcome' exact>
        <Welcome />
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail/>
      </Route>
      </Switch>
      </main>
      </Fragment>
  );
}

export default App;
