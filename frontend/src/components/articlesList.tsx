import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom";

const ArticlesList = () => {
    const getAllArticles = async () => {
        const res = await fetch('http://localhost:8000/api/v1/blog/');
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
        <div style={{ marginBlock: '5rem' }}>
            {error && console.log(error)}

            {isLoading && <h3>Loading...</h3>}
            
            {data &&
                <>               
                    <div className="heroSection">
                        <div>
                            <img src="https://picsum.photos/2000/400" style={{ height: '60vh', width: '60vw' }} alt="Random Unsplash Image"/>
                            <div>
                                <h5>{data[0].category}</h5>
                                <h4>{data[0].author}</h4>
                                <h2>{data[0].title}</h2>
                                <p>{data[0].description}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>subScribe</h2>
                                <p style={{ marginBottom: '1rem' }}>Vivamus diam dolor, accumsan id hendrerit eget, euismod at elit. 
                                    Integer consequat sem vitae fermentum pharetra.
                                </p>
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <h5>{data[1].category}</h5>
                                <p>{data[1].description}</p>
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <h5>{data[2].category}</h5>
                                <p>{data[2].description}</p>
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <h5>{data[3].category}</h5>
                                <p>{data[3].description}</p>
                            </div>

                        </div>
                    </div>

                    <div className="subScribeSection">
                        <h1 style={{textAlign: 'center', paddingBlock: '2rem'}}>subScribe</h1>
                        <p>Vestibulum hendrerit fringilla diam a aliquam. Curabitur vel orci ut nisl facilisis tincidunt nec non felis. 
                            Maecenas ut libero justo. Praesent sit amet libero ligula. Donec vel neque nisl. Sed convallis, lectus quis
                            condimentum consectetur, orci purus maximus sem, id porttitor lectus neque at augue. Morbi nisi ipsum, pharetra
                            vitae enim ac, varius aliquam quam. In volutpat sapien et purus.
                        </p>
                    </div>

                    <div className="latestArticlesSection">
                        <h1 style={{textAlign: 'center', paddingBlock: '2rem'}}>Latest Articles</h1>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr',marginBottom: '1rem' }}>
                            <img src="https://picsum.photos/id/14/700/400" style={{ height: '40vh', width: '100%', paddingRight: '1rem' }}/>
                            <div>
                                <h5>{data[4].category}</h5>
                                <p>{data[4].description}</p>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr',marginBottom: '1rem' }}>
                            <img src="https://picsum.photos/id/15/700/400" style={{ height: '40vh', width: '100%', paddingRight: '1rem' }}/>
                            <div>
                                <h5>{data[5].category}</h5>
                                <p>{data[5].description}</p>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr',marginBottom: '1rem' }}>
                            <img src="https://picsum.photos/id/16/700/400" style={{ height: '40vh', width: '100%', paddingRight: '1rem' }}/>
                            <div>
                                <h5>{data[6].category}</h5>
                                <p>{data[6].description}</p>
                            </div>   
                        </div>


                    </div>

                    <div>
                        <h1 style={{ textAlign: 'center', paddingBlock: '2rem' }}>Other Articles</h1>
                        <div className="otherArticlesSection">
                            <div>
                                <img src="https://picsum.photos/id/17/700/400" style={{ height: '40vh', width: '30vw' }} />
                                <h6>{data[7].category}</h6>
                                <h4>{data[7].title}</h4>
                                <p>{data[7].description}</p>
                            </div>

                            <div>
                                <img src="https://picsum.photos/id/18/700/400" style={{ height: '40vh', width: '30vw' }} />
                                <h6>{data[8].category}</h6>
                                <h4>{data[8].title}</h4>
                                <p>{data[8].description}</p>
                            </div>

                            <div>
                                <img src="https://picsum.photos/id/19/700/400" style={{ height: '40vh', width: '30vw' }} />
                                <h6>{data[9].category}</h6>
                                <h4>{data[9].title}</h4>
                                <p>{data[9].description}</p>
                            </div>

                            <div>
                                <img src="https://picsum.photos/id/20/700/400" style={{ height: '40vh', width: '30vw' }} />
                                <h6>{data[10].category}</h6>
                                <h4>{data[10].title}</h4>
                                <p>{data[10].description}</p>
                            </div>

                            <div>
                                <img src="https://picsum.photos/id/21/700/400" style={{ height: '40vh', width: '30vw' }} />
                                <h6>{data[11].category}</h6>
                                <h4>{data[11].title}</h4>
                                <p>{data[11].description}</p>
                            </div>

                            <div>
                                <img src="https://picsum.photos/id/22/700/400" style={{ height: '40vh', width: '30vw' }} />
                                <h6>{data[12].category}</h6>
                                <h4>{data[12].title}</h4>
                                <p>{data[12].description}</p>
                            </div>                                                                                                                
                        </div>


                    </div>
                </>

            }
        </div>
    )
}

export default ArticlesList