import ArticleDetails from "../components/articleDetails"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import SuggestedArticles from "../components/suggestedArticles"

const ArticleDetailsPage = () => {  
    return(
        <>
            <Navbar />
            <ArticleDetails />
            <SuggestedArticles />
            <Footer />        
        </>

    )
}

export default ArticleDetailsPage