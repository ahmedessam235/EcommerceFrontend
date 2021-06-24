import React from "react";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import Categories from "../Categories/Categories";
import Subcategories from "../Subcategories/Subcategories";
import Products from "../Products/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { userDetailContext } from "../../App";
import getCategories from "../../Actions/CategoriesActions/CategoriesActions";
import { restoreLoggedInUser } from "../../Actions/LoginActions/LoginActions";
import { AdminPanel } from "../AdminPanel/AdminPanel";
 import "./WelcomePage.css";
function WelcomePage() {
  var result;
  var contextData = React.useContext(userDetailContext);
  const [categories, getcategories] = React.useState("");
  const [renderedData, UpdateRendereduser] = React.useState(contextData.email);
  function updateWelcomePage() {
    UpdateRendereduser(contextData.email);
  }
  React.useEffect(() => {
    async function fetchData() {
      const requestedCategories = await getCategories();
      getcategories(requestedCategories);
      result = await restoreLoggedInUser(contextData);
      UpdateRendereduser(result);
      console.log(result, "result 1");
    }
    fetchData();
  }, []);
  if (categories) {
    return (
      <div>
        <Navbar 
          user = {contextData}
          
        /> 
        <Router>
          <Switch>
            <Route exact path="/">
            <div className = "Categories">     
              {categories.map((categoryItem, index) => {
                return (
                  <Categories
                    key={index}
                    id={index}
                    categoryName={categoryItem.name}
                    ID={categoryItem.categoryId}
                  />
                );
              })}
              </div>
            </Route>
           
            <Route path="/categories/:categoryid">
            
           <Subcategories/>
           
            </Route>
            <Route path="/subcategories/:subcategoryid">
              <Products user={contextData} />
            </Route>

            <Route path="/login">
              <Login userUpdated={updateWelcomePage} />
            </Route>
            <Route path="/admin">
              <AdminPanel 
                user = {contextData}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } else {
    return <h1>Loading .........</h1>;
  }
}
export default WelcomePage;
