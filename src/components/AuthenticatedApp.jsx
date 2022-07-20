import React from "react";

export default function AuthenticatedApp({logout}){
    return(

        <div>
            <h1>Welcome</h1>
            <p>Your dashboard</p>
            <button onClick={logout}>Logout</button>
        </div>

    )


}