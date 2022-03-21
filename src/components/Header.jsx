import { Fragment } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/login/loginSlice";

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.login);
    const onLogout = () => {
        dispatch(logout());
        navigate('/');
    };

return (
<Fragment>
    <header className="header">
        <div className="logo">
            ReduxBoiler
        </div>
        <ul>
            {user ? (<li><button onClick={onLogout} className="btn">Logout</button></li>) : <li></li>}
            
            </ul> 
    </header>
</Fragment>
);
};
export default Header;