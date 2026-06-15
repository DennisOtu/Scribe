import { useQuery } from "@tanstack/react-query";

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
            { isLoading && <h1>Loading...</h1>}

            { error && console.log(error) }

            { data && 
                <>
                    <h2 style={{  borderTop: '1px solid grey', paddingTop: '2rem', paddingLeft: '4rem' }}>Read Next</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '5rem', width: '100%' }}>
                        <div  style={{ marginLeft: '4rem' }}>
                            <img src="https://picsum.photos/2000/400" style={{ width: '100%', height: '60vh' }}/>
                            <h3>{data[70].title}</h3>
                            <p>{data[70].date}</p>
                            <p>{data[70].description}</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginRight: '4rem'}}>
                            <div style={{  overflow: 'hidden' }}>
                                <img src="https://picsum.photos/1000/500" style={{ width: '100%', height: '30vh'}} />
                                <h6>{data[188].section}</h6>
                                <h5>{data[188].title}</h5>
                                <p>{data[188].date}</p>
                            </div>

                            <div style={{  overflow: 'hidden' }}>
                                <img src="https://picsum.photos/1000/500" style={{ width: '100%', height: '30vh'}} />
                                <h6>{data[205].section}</h6>
                                <h5>{data[205].title}</h5>
                                <p>{data[205].date}</p>
                            </div>

                            <div style={{  overflow: 'hidden' }}>
                                <img src="https://picsum.photos/1000/500" style={{ width: '100%', height: '30vh'}} />
                                <h6>{data[336].section}</h6>
                                <h5>{data[336].title}</h5>
                                <p>{data[336].date}</p>
                            </div>
                            <div style={{  overflow: 'hidden' }}>
                                <img src="https://picsum.photos/1000/500" style={{ width: '100%', height: '30vh'}} />
                                <h6>{data[139].section}</h6>
                                <h5>{data[139].title}</h5>
                                <p>{data[139].date}</p>
                            </div>                                        
                        </div>

                    </div>   
                </>
           
            
            }
      
        </>
    )
}

export default SuggestedArticles