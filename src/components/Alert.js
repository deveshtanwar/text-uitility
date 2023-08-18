const Alert = (props) => {

    return(
        
        <div style={{height:"50px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade  show p-1 text-center`}role="alert">
            {props.alert.message}
            </div>}
        </div>
    );
}
export default Alert;