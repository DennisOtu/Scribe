import { useQuery } from "@tanstack/react-query"

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
        <>
            {error && console.log(error)}

            {isLoading && <h3>Loading...</h3>}

            {data && data.map(article =>
                <p style={{marginBlock: '1em'}}>{ article.title }</p>
            )}
        </>
    )
}

export default ArticlesList