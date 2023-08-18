import { useState } from "react";
import Navbar from "../src/components/Navbar";
import TextForm from "./components/TextForm";
import './style.css';
import Alert from "./components/Alert";

const App = () =>{

    const[Mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (msg, typ)=> {
        setAlert({
            message: msg,
            type: typ
        })

        setTimeout(()=>{
            setAlert(null);
        },1200);
    }

    const toggleMode = () =>{
        if(Mode === "light"){
            setMode('dark');
            document.body.style.backgroundColor = "grey";
            showAlert(" Dark Mode Enabled", "primary");
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = "white";
            showAlert(" Dark Mode Disabled", "primary");
        }
    }

    return(
        <>
            <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <TextForm heading = "Enter The Text Below To Analyse : " mode={Mode} showAlert={showAlert}/>
        </>
    );
}
export default App;