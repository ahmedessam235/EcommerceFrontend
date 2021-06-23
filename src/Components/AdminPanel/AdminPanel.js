import React from 'react';

export function AdminPanel(props){
    let user = props.user.userDetails;
    return(
        <div>
            <h1>Welcome to admin panel - {user.email}</h1>
        </div>
        //1- CRUD Products/Cate/SubCat
        //2- Create new admins
    );
}

export default AdminPanel;