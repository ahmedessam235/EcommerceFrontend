import React from "react";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import Categories from "../Categories/Categories";
import Subcategories from "../Subcategories/Subcategories";
import Products from "../Products/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { userDetailContext } from "../../App";
import { categoriesList } from "../Categories/Categories";
import { subcategoriesList } from "../Subcategories/Subcategories";

function WelcomePage() {
  var contextData = React.useContext(userDetailContext);
  const [renderedData, UpdateRendereduser] = React.useState(contextData.email);
  function updateWelcomePage() {
    UpdateRendereduser(contextData.email);
  }
  
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>welcome {renderedData}</h1>
            {categoriesList.map((categoryItem, index) => {
              return (
                <Categories
                  key={index}
                  id={index}
                  categoryName={categoryItem.name}
                  ID={categoryItem.id}
                />
              );
            })}
          </Route>
          <Route path="/categories/:categoryid">
          {subcategoriesList.map((subCategoryItem, index) => {
              return (
                <Subcategories
                  key={index}
                  id={index}
                  subCategoryName={subCategoryItem.name}
                  ID={subCategoryItem.id}
                />
              );
            })
            }
        </Route>
       <Route path="/subcategories/:subcategoryid">
        <Products />
          </Route>
         
          <Route path="/login">
            <Login userUpdated={updateWelcomePage} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default WelcomePage;
