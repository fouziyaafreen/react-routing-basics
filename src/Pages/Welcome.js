import { Route } from "react-router-dom";
const Welcome = () => {
    return (
     <div>
         <h1 >Welcome Page</h1>
        <Route path="/welcome/new-user">
        <h1 >Welcome Page, new user</h1>
        </Route>
        </div>
    )
}

export default Welcome;