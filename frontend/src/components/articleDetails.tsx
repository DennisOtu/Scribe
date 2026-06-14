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
                <div >
                    <h2 style={{ marginLeft: '6rem', fontSize: '40px' }}>{ data.title }</h2>
                    <p style={{ marginBlock: '1rem', marginLeft: '6rem'}}>By {data.author}</p>
                    <img src="https://picsum.photos/2000/1000" style={{ height: '90vh', width: '80vw', marginInline: '6rem' }} alt="Random Unsplash Image"/>
                    <p style={{ marginBottom: '1rem', marginInline: '6rem' , fontSize: '14px', fontStyle: 'italic' }}>{data.description}</p>
                    <p style={{ marginInline: '15rem' }} >{data.content}</p>                
                </div>
            }
        </div>
    )
}

export default ArticleDetails;