Fashion Commerce API :
-------------------------

An UI used to consume Ecommerce app API  :

	1 - view product categories.
	2 - view product subcategoires.
	3 - view products under each subcategory.
	4 - handle user creation.
	5-  handle admin creation
	
	
UI was built using the following :

	1 - React JS
	2 - Context management useContext
	3 - Used mainly functional components and Hooks : useState,useEffect and useContext.
	4 - React bootstrap and bootstrap classes for styling.
	5 - HTML and CSS 

the  architecture  used for the whole UI consists of the following pathes:

	1 - compnents:contain each of the  the React components i nthe rpoject
	2 - actions : contains all the HTTP requests to the backend
		


	
unimplemented features:

1- handling tags CRUD.
2- disabling users.
3- updating products,subcategoires and categories.
4 - password hashing.
5 - JWT token, the implemented token is a random string generated from JS.
6 - CART and order features, the only possible cart data is the number of items the user have added to the cart and saved in the browser
7 - no search mechanisim was used.

 To use the UI :
 - check how to start the server from the README docuemnt in the follwoing link  :https://github.com/ahmedessam235/Ecommercesite 
 - in the path EcommerceFrontend run npm start.
 - UI will launch on local host 3000
 - browse through the website and check the products.

note : to add products,subcategoires or categories the only way is to update the local  database in the development mode only using pgadmin (Postgresql DB admin)

developer note : i will try to add as much products as i can before delpoyment of the DB.