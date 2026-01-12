import { Outlet, useParams } from "react-router";
import Popeyes from "./Popeyes";
import Spinach from "./Spinach";
import Default from "./Default";

const Profile = () => {

    const {username} = useParams()

    return (
        <div>
        Profile
        {username === "popeyes" ? (<Popeyes />) : username === "spinach" ? (<Spinach />) : (<Default />)}
        {console.log(username)}
        {/* <Outlet /> */}
        </div>
    )

}

export default Profile;