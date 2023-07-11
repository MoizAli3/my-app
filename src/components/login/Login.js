import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Login({click}) {
    const authCtx = useContext(AuthContext);

    return (
       <button onClick={authCtx.onLogin}>Login</button>
  );
}

export default Login;