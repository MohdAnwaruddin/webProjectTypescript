import "./index.css";


const Login = () => {
    return (
        <div  className="login-form">
            <h3 className="title"> Welcome to Login </h3>
            <input placeholder="Enter User Id" className="input-field" />
            <input placeholder="Enter Password" className="input-field" />

            <button className="button"> Login </button>
        </div >
    )
}

export default Login;