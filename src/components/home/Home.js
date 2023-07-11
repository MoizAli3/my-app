import { useContext } from "react";
import AuthContext from "../../context/AuthContext";


function Home() {
    const authCtx = useContext(AuthContext);
    return (
    <div >
     <button onClick={authCtx.onLogOut}>Home</button>
    </div>
  );
}

export default Home;