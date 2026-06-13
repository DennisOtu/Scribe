import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ArticleDetailsPage from './pages/articleDetailsPage'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/article/:articleId' element={<ArticleDetailsPage />} />
            
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App