import { Route, Routes,BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import HomeComponent from './components/home/home';
import QueryComponent from './components/query/query';
import HeaderAppBar from './components/header/header-appbar';
import CategoryComponent from './components/category/category';
import ForYouComponent from './components/for-you/for-you';
function App() {
  // const router = createBrowserRouter(
  //   [
  //     {path:"/",element:<HomeComponent/>},
  //     {path:"/q",element:<QueryComponent/>},

      
  //   ]
    // )
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomeComponent/>}/>
          <Route path='/Home' element={<HomeComponent/>}/>
          <Route path='/q' element={<QueryComponent/>}/>
          <Route path='/category' element={<CategoryComponent/>}/>
          <Route path='/for you' element={<ForYouComponent/>}/>
        </Routes>
        {/* <RouterProvider router={router}></RouterProvider> */}
    </div>
  );
}

export default App;
