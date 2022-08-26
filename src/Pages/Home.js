import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <main>
            <h1> Hello From Todo App Home Page 🎯</h1>
        </main>
    )
}

export default Home;