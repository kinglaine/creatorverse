import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'

function App() {

  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Go To Show All Creators</Link>
        </li>
        <li>
          <Link to='/edit'>Go To Edit Creators</Link>
        </li>
        <li>
          <Link to='/view'>Go To View Single Creator</Link>
        </li>
        <li>
          <Link to='/add'>Go Add A new Creator</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<ShowCreators></ShowCreators>}></Route>
        <Route path='/edit' element={<EditCreator></EditCreator>}></Route>
        <Route path='/view' element={<ViewCreator></ViewCreator>}></Route>
        <Route path='/add' element={<AddCreator></AddCreator>}></Route>
      </Routes>
    </Router>
  )
}

export default App
