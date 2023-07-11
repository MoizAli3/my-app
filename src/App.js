import Button from './components/button/Button';
import List from './components/list/List';
import './App.css';
import { useEffect, useState } from "react";
import AuthContext from './context/AuthContext';
import AuthHanlder from './components/AuthHandler/AuthHandler';

function App() {
  const authState = localStorage.getItem("isLoggedIn") === "0";
  //  const arr = ['item1','item2'];
  // const [data,setItem] = useState(arr);

  const [isAuthenticated,setIsAuthenticated] = useState(authState);

  useEffect(()=>{
        console.log("called")
  })

  const onLogin = () => {
    localStorage.setItem("isLoggedIn","0");
    setIsAuthenticated(true);
  }

  const onLogOut = () => {
    localStorage.setItem("isLoggedIn","1");
    setIsAuthenticated(false);
  }



  // const addItem = () => {
  //     // setItem([...data,"item3"]);
  //     setItem((oldData)=>{
  //       const d = oldData + 1;
  //       // console.log(d);
  //       return d;
  //     });

  // }
  return (
    <div className='App'>
      <AuthContext.Provider value={{
    isLoggedIn : isAuthenticated,
    onLogin,
    onLogOut

}}>
<AuthHanlder/>

      </AuthContext.Provider>
    
    {/* {data} */}
     {/* <List arr={data}/> */}
     {/* <Button title={"change"} click={addItem}/> */}
    </div>
  );
}

export default App;
