import {useState} from 'react';

const TextFrom = (props) =>{
    const [text, setText] = useState('');


    const upperClickHandler = () =>{
        const newText = text.toUpperCase();
        setText(newText);
    }

    const lowerClickHandler = () =>{
        const newText = text.toLowerCase();
        setText(newText);
    }

    const clearClickHandler = () =>{
        const newText = '';
        setText(newText);
    }

    const capClickHandler = () =>{
        let regex = /[\s\n\.]/;
        const arr = text.split(regex);
        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        let newText = arr.join(" ");
        setText(newText);
    }

    const copyHandler = () =>{
        let selectText = document.getElementById('box');
        selectText.select();
        navigator.clipboard.writeText(selectText.value);
        props.showAlert(" Copied to Clipboard", "success");
    }
    
    const changeHandler = (e) =>{
        setText(e.target.value);
    }

    return(
        <>
            <div className={`container p-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h4>{props.heading}</h4>
                <form>
                    <textarea rows = "10"className={`form-control bg-${props.mode === "dark" ? 'secondary': 'white'} text-${props.mode === "dark" ? 'white': 'black'}`} onChange={changeHandler} value={text} id='box' />
                </form>
                <div className='container d-flex flex-wrap'>
                    <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3 me-2 p-1`} onClick={upperClickHandler}>Upper Case</button>
                    <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3 me-2 p-1`} onClick={lowerClickHandler}>Lower Case</button>
                    <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3 me-2 p-1`} onClick={capClickHandler}>Capitalise</button>
                    <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3 me-2 p-1`} onClick={clearClickHandler}>Clear Text</button>
                    <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'primary'} mt-3 me-2 p-1`} onClick={copyHandler}>Copy</button>
                </div>
                
            </div>
            <div className={`container mt-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <p className='m-0'>{`Words ${text.length == 0 ? text.split(' ').length-1 : text.split(' ').length} and characters ${text.length}`}</p>
                <p>{`Reading Time ${text.split(' ').length*0.008} minutes`}</p>
            </div>
        </>
    );
}
export default TextFrom;