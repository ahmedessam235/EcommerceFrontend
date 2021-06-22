import React from "react";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import Categories from "../Categories/Categories";
import Subcategories from "../Subcategories/Subcategories";
import Products from "../Products/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { userDetailContext } from "../../App";
import { subcategoriesList } from "../Subcategories/Subcategories";
import getCategories from "../../Actions/CategoriesActions/CategoriesActions";
import { restoreLoggedInUser } from "../../Actions/LoginActions/LoginActions";
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
    console.log(result, "result 2");
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/">
              <h1>welcome {renderedData}</h1>

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
              })}
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
  } else {
    return <h1>Loading .........</h1>;
  }
}
export default WelcomePage;
