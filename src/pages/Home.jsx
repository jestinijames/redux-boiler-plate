import { useSelector } from "react-redux";

const Home = () => {
    const { user } = useSelector((state) => state.login);  
    return (
        <section className="heading">
            <h1>Welcome Home!!</h1>
            {user && <p>{user}</p>}
        </section>
    )
};

export default Home;