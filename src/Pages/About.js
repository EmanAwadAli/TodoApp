import { useEffect } from "react"

const About = () => {
    useEffect(() => {
        Document.title = "About";
    }, []);
    return (
        <main>
            <h1> Hello From Todo App About Page 🎯</h1>
        </main>
    )
}

export default About;