
import { useState, useEffect } from "react";

// Redux dev tools
import { useSelector, useDispatch } from "react-redux";

// Redux store actions
import { login, reset } from "../store/login/loginSlice";

// React router dom
import { useNavigate } from "react-router-dom";



const Login = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, isLoading, isError, isSuccess } = useSelector((state) => state.login);


    useEffect(() => {
        if(isError) {
            alert(isError);
        }
        if(isSuccess || user) {
            dispatch(reset());
            navigate('/home');
        }   
    },[isError, isSuccess, user, navigate, dispatch]);
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email,
            password
        };
        dispatch(login(userData));
    };

return (
    <>
    <section className="heading">
        <h1>Login</h1>
    </section>
    <section className="form">
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
            <input 
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
            required
            />
        </div>
        <div className="form-group">
            <input 
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            required
            />
        </div>
        <div className="form-group">
            {isLoading ? <button disabled className="btn btn-block">Logging In</button> : <button className="btn btn-block">Submit</button> }
            
        </div>

        </form>
    </section>
    </>
);
};

export default Login;