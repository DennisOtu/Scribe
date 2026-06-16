import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const SuggestedArticles = () => {
    const getSuggested = async () => {
        const res = await fetch("http://localhost:8000/api/v1/blog");
        if(!res.ok){
            throw new Error('Unable to get suggested articles');
        }
        return res.json()
    }

    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ['suggestedArticles'],
        queryFn: getSuggested,
    });

    return(
        <>
            { isLoading && <h5>Loading...</h5>}

            { error && console.log(error) }

            { data && 
                <>
                    <h1 style={{ textAlign: 'center', borderBlock: '1px solid grey', paddingBlock: '2rem', paddingLeft: '4rem', marginBottom: '2rem' }}>Read Next</h1>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '5rem', width: '100%' }}>
                        <Link to={`/article/${data[70].id}/`} state={{ articleId: data[70].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div  style={{ marginLeft: '4rem' }}>
                                <img src="https://picsum.photos/1000/500" style={{ width: '100%', height: '60vh' }}/>
                                <div style={{ display: 'inline-flex' }}>
                                    <h5 style={{ color: 'orange', marginRight: '5px' }}>{data[70].section}</h5>
                                    &bull;
                                    <p style={{ fontSize: '14px', marginLeft: '5px' }}>{ new Date(data[70].date).toLocaleDateString() }</p>
                                </div>

                                <h3>{data[70].title}</h3>
                                <p style={{ fontSize: '14px', paddingTop: '5px' }}>{data[70].description}</p>
                            </div>
                        </Link>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginRight: '4rem'}}>
                            <Link to={`/article/${data[188].id}`} state={{ articleId: data[188].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ overflow: 'hidden' }}>
                                    <img src="https://picsum.photos/seed/askfa/1000/500" style={{ width: '100%', height: '30vh'}} />
                                    <div style={{ display: 'inline-flex' }}>
                                        <h6 style={{ color: 'orange', marginRight: '5px' }}>{data[188].section}</h6>
                                        &bull;
                                        <p style={{ fontSize: '12px', marginLeft: '5px' }}>{ new Date(data[188].date).toLocaleDateString() }</p>
                                    </div>
                                    <h5>{data[188].title}</h5>
                                </div>
                            </Link>

                            <Link to={`/article/${data[205].id}`} state={{ articleId: data[205].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ overflow: 'hidden' }}>
                                    <img src="https://picsum.photos/seed/uoiu/1000/500" style={{ width: '100%', height: '30vh'}} />
                                    <div style={{ display: 'inline-flex' }}>
                                        <h6 style={{ color: 'orange', marginRight: '5px' }}>{data[205].section}</h6>
                                        &bull;
                                        <p style={{ fontSize: '12px', marginLeft: '5px' }}>{ new Date(data[205].date).toLocaleDateString() }</p>
                                    </div>
                                    <h5>{data[205].title}</h5>
                                </div>
                            </Link>

                            <Link to={`/article/${data[336].id}`} state={{ articleId: data[336].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ overflow: 'hidden' }}>
                                    <img src="https://picsum.photos/seed/sa5mf9/1000/500" style={{ width: '100%', height: '30vh'}} />
                                    <div style={{ display: 'inline-flex' }}>
                                        <h6 style={{ color: 'orange', marginRight: '5px' }}>{data[336].section}</h6>
                                        &bull;
                                        <p style={{ fontSize: '12px', marginLeft: '5px' }}>{ new Date(data[336].date).toLocaleDateString() }</p>
                                    </div>
                                    <h5>{data[336].title}</h5>
                                </div>
                            </Link>

                            <Link to={`/article/${data[139].id}`} state={{ articleId: data[139].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ overflow: 'hidden' }}>
                                    <img src="https://picsum.photos/seed/i9m3d/1000/500" style={{ width: '100%', height: '30vh'}} />
                                    <div style={{ display: 'inline-flex' }}>
                                        <h6 style={{ color: 'orange', marginRight: '5px' }}>{data[139].section}</h6>
                                        &bull;
                                        <p style={{ fontSize: '12px', marginLeft: '5px' }}>{ new Date(data[139].date).toLocaleDateString() }</p>
                                    </div>
                                    <h5>{data[139].title}</h5>
                                </div>     
                            </Link>
                        </div>

                    </div>   
                </>
           
            
            }
      
        </>
    )
}

export default SuggestedArticles