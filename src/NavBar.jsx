import { NavLink } from "react-router-dom";

export const NavBar = () => {

return (<>

  <nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
     <a className="navbar-brand" href="#">CartApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
        <li className="nav-item">
            <NavLink className={'nav-link'} to="/">Home</NavLink>
         
        </li>
       
        <li className="nav-item">
          <NavLink className={'nav-link'} to="/catalog">Catalogo</NavLink>
        
        </li>

        <li className="nav-item">

           <NavLink className={'nav-link'} to="/cart">Cart </NavLink>
         </li>
       
    
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>)
}
