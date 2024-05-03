import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import CodeWithPrachi from "./components/CodeWithPrachi";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
      <Route path="/"  element={<CodeWithPrachi/>} />
      <Route path="/all" element={<AllUsers />} />
      <Route path="/add" element={<AddUser />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App