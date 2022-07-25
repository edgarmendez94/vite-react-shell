import React from "react";
import ModalLogin from "./modal";
export default function AuthenticatedApp({logout}){
    return(

        <div>
            <h1>Welcome</h1>
            <p>You are now logged in</p>
            <p>Your dashboard</p>
            <button onClick={logout}>Logout</button>
        </div>

    )


}