import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom";

const ArticlesList = () => {
    const getAllArticles = async () => {
        const res = await fetch(`http://localhost:8000/api/v1/blog/`);
        if (!res.ok) {
            throw new Error('Unable to get posts');
        };
        return res.json();
    }

    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ['allArticles'],
        queryFn: getAllArticles,
    });

/*  
    if(data){
        console.log(data);   
    }
*/
    return(
        <div style={{ marginTop: '5rem' }}>
            {error && console.log(error)}

            {isLoading && <h3>Loading...</h3>}

            {data && data.map(article =>
                <ul>
                    <li style={{ margin: '1rem'}}>
                        <Link to={{ pathname: `/article/${article.id}`}}  state={{ articleId: article.id }} >
                            { article.title }
                        </Link>
                    </li>
                </ul>

            )}
        </div>
    )
}

export default ArticlesList