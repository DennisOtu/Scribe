import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const ArticleDetails = () => {
    const location = useLocation();
    const { articleId } = location.state || {}; 

    const getArticleDetails = async () => {
        const res = await fetch(`http://localhost:8000/api/v1/blog/article/${articleId}/`);
        if(!res.ok){
            throw new Error('Unable to get article details');
        }
        return res.json();
    }

    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ['articleDetails'],
        queryFn: getArticleDetails,
    });

/*
    if(data){
        console.log(data);   
    }
*/
    return(
        <div style={{ marginBlock: '5rem' }}>
            {error && console.log(error)}

            {isLoading && <h3>Loading...</h3>}

            {data && 
                <div style={{ paddingInline: '2rem' }}>
                    <h2 style={{ marginBlock: '1rem'}}>{ data.title }</h2>
                    <h4 style={{ marginBlock: '1rem'}}>{data.author}</h4>
                    <p>{data.content}</p>                
                </div>
            }
        </div>
    )
}

export default ArticleDetails;