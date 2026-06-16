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

            {isLoading && <h5>Loading...</h5>}

            {data && 
                <div>
                    <h2 style={{ marginInline: '6rem', fontSize: '40px' }}>{ data.title }</h2>
                    <p style={{ marginTop: '1rem', marginLeft: '6rem'}}>By {data.author}</p>
                    <p style={{ marginLeft: '6rem', fontSize: '12px'}}>{ new Date(data.date).toLocaleDateString() }</p>
                    <img src="https://picsum.photos/2000/1000" style={{ height: '90vh', width: '80vw', marginInline: '6rem' }} alt="Random Unsplash Image"/>
                    <h5 style={{ marginInline: '6rem', color: 'orange' }}>{data.section}</h5>
                    <p style={{ marginBottom: '1rem', marginInline: '6rem' , fontSize: '14px', fontStyle: 'italic' }}>{data.description}</p>
                    <p style={{ marginInline: '15rem' }} >{data.content}</p> 

                    <div style={{ border: '1px solid grey', borderRadius: '4px', marginInline: '15rem', marginTop: '2rem', padding: '20px', height: '30vh' }}>
                        <div style={{ display: 'inline-flex' }}>
                            <img src="https://picsum.photos/700/500" style={{ width: '65px', height: '65px', borderRadius: '50px', marginRight: '10px'}}/>
                            <h5 style={{ paddingBlock: '20px' }}>{data.author}</h5>
                        </div>
                        <p style={{ fontSize: '14px', paddingInline: '10px' }}>Ut dapibus orci scelerisque dignissim suscipit. Etiam suscipit velit orci, ac accumsan est molestie vel. 
                            Nullam nec tincidunt justo. In vitae luctus elit. Nulla blandit.
                        </p>
                    </div>    

           
                </div>
            }
        </div>
    )
}

export default ArticleDetails;