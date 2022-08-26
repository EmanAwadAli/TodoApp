import { useEffect } from "react"
import { useParams } from "react-router-dom";

const SingleTodo = () => {

    const params = useParams();
    
    useEffect(() => {
        document.title = `todo #{${ params.todoId} }Page`;
    }, [params.todoId]);

    return (
        <main>
            <h1> Hello From todo #{params.todoId} Page 🎯</h1>
        </main>
    )
}

export default SingleTodo;