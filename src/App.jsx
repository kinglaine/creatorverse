import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import backgroundImage from './assets/banner.jpg'
function App() {

  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '500px',
  };
  return (
    <Router>
      <div style={headerStyle}>
        <h1 style={{color: 'white'}} className="text-5xl text-center mb-24 pt-24">CREATORVERSE</h1>
        <ul className="flex justify-evenly">
          <li>
            <Link style={{color: 'white', borderRadius: '10px'}} className="bg-cyan-600 w-64 h-20 flex justify-center items-center" to='/'>Go To Show All Creators</Link>
          </li>
          <li>
            <Link style={{color: 'white', borderRadius: '10px'}} className="bg-cyan-600 w-64 h-20 flex justify-center items-center"  to='/add'>Go Add A new Creator</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<ShowCreators></ShowCreators>}></Route>
        <Route path='/edit/:creatorId' element={<EditCreator></EditCreator>}></Route>
        <Route path='/view/:creatorId' element={<ViewCreator></ViewCreator>}></Route>
        <Route path='/add' element={<AddCreator></AddCreator>}></Route>
      </Routes>
    </Router>
  )
}

export default App
