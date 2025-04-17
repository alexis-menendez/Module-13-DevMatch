// file path: Module-13-DevMatch/src/components/Nav.tsx 
 
 
 // TODO: Add necessary code to display the navigation bar and link between the pages

 import { NavLink } from "react-router-dom";

 const Nav = () => {
   return (
     <nav className="nav">
       <ul className="flex">
         <li className="nav-item">
           <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
             Home
           </NavLink>
         </li>
         <li className="nav-item">
           <NavLink to="/SavedCandidates" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
             Potential Candidates
           </NavLink>
         </li>
       </ul>
     </nav>
   );
 };
 
 export default Nav;