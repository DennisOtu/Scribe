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
                        <Link to={`article/${data[0].id}`} state={{ articleId: data[0].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div>
                                <img src="https://picsum.photos/seed/nj83x1c/2000/400" style={{ height: '60vh', width: '60vw' }} alt="Random Unsplash Image"/>
                                    <h5>{data[0].category}</h5>
                                    <h4>{data[0].author}</h4>
                                    <h2>{data[0].title}</h2>
                                    <p>{data[0].description}</p>
                            </div>
                        </Link>
                        <div style={{ display: 'grid', gridTemplateRows: '1fr 3fr', gap: '10px'}}>
                            <div style={{ padding: '20px' }}>
                                <h2 style={{ color: 'grey' }}>sub<span style={{ color: 'orange'}}>Scribe</span></h2>
                                <p style={{ paddingInline: '10px',marginBottom: '1rem', fontSize: '14px', textAlign: 'center' }}>Get all the latest articles direct on your device with our newsletters</p>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button style={{width: '50%', height: '40px' }}>Subscribe</button>
                                </div>
                            </div>
                            <div style={{ paddingLeft: '20px' }}>
                                <Link to={`article/${data[1].id}`} state={{ articleId: data[1].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
                                        <div style={{ padding: '5px' }}>
                                            <h5>{data[1].category}</h5>
                                            <p>{data[1].title}</p>
                                        </div>
                                        <div>
                                            <img src="https://picsum.photos/seed/114/700/400" style={{ width: '90%', paddingTop: '10%' }} />
                                        </div>

                                    </div>
                                </Link>
                                <hr/>
                                <Link to={`article/${data[2].id}`} state={{ articleId: data[2].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
                                        <div style={{ padding: '5px' }}>
                                            <h5>{data[2].category}</h5>
                                            <p>{data[2].title}</p>
                                        </div>
                                        <div>
                                            <img src="https://picsum.photos/seed/467/700/400" style={{ width: '90%', paddingTop: '10%' }} />
                                        </div>

                                    </div>
                                </Link>
                                <hr/>

                                <Link to={`article/${data[3].id}`} state={{ articleId: data[3].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
                                        <div style={{ padding: '5px' }}>
                                            <h5>{data[3].category}</h5>
                                            <p>{data[3].title}</p>
                                        </div>
                                        <div>
                                            <img src="https://picsum.photos/seed/689/700/400" style={{ width: '90%', paddingTop: '10%' }} />
                                        </div>

                                    </div>
                                </Link>
                            </div>


                        </div>
                    </div>

                    <div>
                        <h1 style={{textAlign: 'center', paddingBlock: '2rem', borderBlock: '1px solid grey'}}>Latest Articles</h1>
                        <div className="latestArticlesSection">
                            <Link to={`article/${data[4].id}`} state={{ articleId: data[4].id }} style={{ textDecoration: 'none', color: 'inherit' }}>                            
                                <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', marginBottom: '2rem' }}>
                                    <img src="https://picsum.photos/seed/e14/700/400" style={{ height: '40vh', width: '100%', paddingRight: '1rem' }}/>
                                    <div>
                                        <h5>{data[4].category}</h5>
                                        <p>{data[4].description}</p>
                                    </div>
                                </div>
                            </Link>

                            <Link to={`article/${data[5].id}`} state={{ articleId: data[5].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr',marginBottom: '2rem' }}>
                                    <img src="https://picsum.photos/seed/1eer5/700/400" style={{ height: '40vh', width: '100%', paddingRight: '1rem' }}/>
                                    <div>
                                        <h5>{data[5].category}</h5>
                                        <p>{data[5].description}</p>
                                    </div>
                                </div>
                            </Link>

                            <Link to={`article/${data[6].id}`} state={{ articleId: data[6].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr',marginBottom: '2rem' }}>
                                    <img src="https://picsum.photos/seed/f16/700/400" style={{ height: '40vh', width: '100%', paddingRight: '1rem' }}/>
                                    <div>
                                        <h5>{data[6].category}</h5>
                                        <p>{data[6].description}</p>
                                    </div>   
                                </div>
                            </Link>
                        </div>



                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginBlock: '3rem' }}>
                        <button style={{width: '30%', height: '40px' }}>Read More</button>
                    </div>

                    <div className="subScribeSection">
                        <h1 style={{ color: 'inherit',textAlign: 'center' }}>sub<span style={{ color: 'wheat' }}>Scribe</span></h1>
                        <div style={{ padding: '30px' }}>
                            <p style={{ fontSize: '14px', textAlign: 'left' }}>Vestibulum hendrerit fringilla diam <br/> vel aliquam. Curabitur  vel orci ut nisl facilisis tincidunt nec non felis. 
                               Maecenas ut libero<br/> justo. Praesent sit amet libero ligula. Donec vel neque nisl. Sed convallis, lectus quis
                                condimentum consectetur, <br/>orci purus maximus sem, id porttitor lectus neque at augue.
                            </p>  
                            <div style={{ marginTop: '1rem'}}>
                                <button style={{width: '300px', height: '40px' }}>Subscribe</button>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h1 style={{ textAlign: 'center', paddingBlock: '2rem', borderBlock: '1px solid grey' }}>Other Articles</h1>
                        <div className="otherArticlesSection">
                            <Link to={`article/${data[7].id}`} state={{ articleId: data[7].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div>
                                    <img src="https://picsum.photos/seed/1t67/700/400" style={{ height: '40vh', width: '30vw' }} />
                                    <h6>{data[7].category}</h6>
                                    <h4>{data[7].title}</h4>
                                    <p>{data[7].description}</p>
                                </div>
                            </Link>

                            <Link to={`article/${data[8].id}`} state={{ articleId: data[8].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div>
                                    <img src="https://picsum.photos/seed/1810/700/400" style={{ height: '40vh', width: '30vw' }} />
                                    <h6>{data[8].category}</h6>
                                    <h4>{data[8].title}</h4>
                                    <p>{data[8].description}</p>
                                </div>
                            </Link>

                            <Link to={`article/${data[9].id}`} state={{ articleId: data[9].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div>
                                    <img src="https://picsum.photos/seed/zz19/700/400" style={{ height: '40vh', width: '30vw' }} />
                                    <h6>{data[9].category}</h6>
                                    <h4>{data[9].title}</h4>
                                    <p>{data[9].description}</p>
                                </div>
                            </Link>

                            <Link to={`article/${data[10].id}`} state={{ articleId: data[10].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div>
                                    <img src="https://picsum.photos/seed/2ol0/700/400" style={{ height: '40vh', width: '30vw' }} />
                                    <h6>{data[10].category}</h6>
                                    <h4>{data[10].title}</h4>
                                    <p>{data[10].description}</p>
                                </div>
                            </Link>

                            <Link to={`article/${data[11].id}`} state={{ articleId: data[11].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div>
                                    <img src="https://picsum.photos/seed/2x31/700/400" style={{ height: '40vh', width: '30vw' }} />
                                    <h6>{data[11].category}</h6>
                                    <h4>{data[11].title}</h4>
                                    <p>{data[11].description}</p>
                                </div>
                            </Link>

                            <Link to={`article/${data[12].id}`} state={{ articleId: data[12].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div>
                                    <img src="https://picsum.photos/seed/22/700/400" style={{ height: '40vh', width: '30vw' }} />
                                    <h6>{data[12].category}</h6>
                                    <h4>{data[12].title}</h4>
                                    <p>{data[12].description}</p>
                                </div>   
                            </Link>                                                                                                             
                        </div>

                        <div style={{ width: '100%', padding: '2rem', marginBlock: '4rem', display: 'inline-flex', justifyContent: 'space-between', borderBlock: '1px solid grey'}}>
                            <h2>Dont miss out on daily news. Subsrcribe to our newsletter to stay updated</h2>
                            <button style={{ width: '15%', height: '40px' }}>Subscribe</button>
                        </div>

                        <div style={{ paddingInline: '2rem', marginBlock: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            <Link to={`article/${data[89].id}`} state={{ articleId: data[89].id }} style={{ textDecoration: 'none', color: 'inherit' }}>                            
                                <div>
                                    <img src="https://picsum.photos/seed/22/1000/500" style={{ height: '50vh', width: '100%' }} />
                                    <h5>{data[89].category}</h5>
                                    <h3>{data[89].title}</h3>
                                    <p>{data[89].description}</p>
                                </div>
                            </Link>

                            <Link to={`article/${data[103].id}`} state={{ articleId: data[103].id }} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div>
                                    <img src="https://picsum.photos/seed/22x0q/1000/500" style={{ height: '50vh', width: '100%' }} />
                                    <h5>{data[103].category}</h5>
                                    <h3>{data[103].title}</h3>
                                    <p>{data[103].description}</p>
                                </div>
                            </Link>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', marginBlock: '3rem' }}>
                            <button style={{ width: '30%', height: '40px' }}>Read More</button>
                        </div>

                        <div style={{ height: '40vh', marginInline: '2rem', marginBlock: '4rem', display: 'block', textAlign:'center', backgroundColor: 'wheat', paddingTop: '20px'}}>
                            <h1 style={{ marginBlock: '2rem', color: 'white' }}>Like what you see? </h1>
                            <p style={{ marginBlock: '1rem' }}>Subsrcribe to our newsletter to keep up with all the latest news.</p>
                            <button style={{ width: '20%', height: '40px' }}>Subscribe</button>
                        </div>

                    </div>
                </>

            }
        </div>
    )
}

export default ArticlesList