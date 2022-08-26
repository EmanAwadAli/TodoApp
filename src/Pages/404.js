import { useEffect } from "react"

const NotFound = () => {
    useEffect(() => {
        document.title = "404";
    }, [])
    return (
        <main>
            <h1> ❗ 404 Not Found </h1>
        </main>
    )
}

export default NotFound;