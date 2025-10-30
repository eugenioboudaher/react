import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Banner from './Components/Banner/Banner'
import ProductPage from './Pages/ProductPage'

function App() {
  return (   
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>           
            <Route path='/product' element={<ProductPage/>}/>        

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
