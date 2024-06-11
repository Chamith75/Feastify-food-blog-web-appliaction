import { NavLink, Route, Routes } from "react-router-dom";
import FoodHome from "./components/FoodHome";
import FoodDetails from "./components/FoodDetals";

const App = ( ) =>{
  return(<>
  <section>
    <section className='bg-tertiary shadow-sm'>
      <div className='col-12 d-flex justify-content-center' >
        <ul className="nav">
          <li className="nav-link">
            <NavLink to={"/"} className="text-decoration-none">
            <i className="fa fa-cutlery" aria-hidden="true"></i>Home</NavLink>
          </li>
          {/* <li className="nav-link">
            <NavLink to={"/fooddetails"} className="text-decoration-none">
            <i class="fa fa-info" aria-hidden="true"></i>info</NavLink>
            
          </li> */}
        </ul>
        
      </div>
    </section>
  </section>
  <Routes>
    <Route path="/" element={<FoodHome/>}/>
    <Route path="/fooddetails">
    <Route path=":id" element={<FoodDetails/>} />

    </Route>
  </Routes>
  </>);

}


export default App