




import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Home from './component/Homepage';

const App = () => {
  const location = useLocation();

  return (
    <>
      <div className="apptop">
        <h3> نمونه پروژه سایت دیوار</h3>
        <hr/>
        <h5>لطفان شهر مورد نطر خود را انتخاب کنید</h5>
        <nav className="apptop2">
          <NavLink  to="/" activeClassName="active-link" style={({isActive})=>({
                             color: isActive ? 'red' : ''
                          })}>صفحه اصلی</NavLink>
          <NavLink to="/Shiraz" activeClassName="active-link"  style={({isActive})=>({
                             color: isActive ? 'red' : ''
                          })}>شیراز</NavLink>
          <NavLink to="/Tehran" activeClassName="active-link"  style={({isActive})=>({
                             color: isActive ? 'red' : ''
                          })}>تهران</NavLink>
          <NavLink to="/mashhad" activeClassName="active-link"  style={({isActive})=>({
                             color: isActive ? 'red' : ''
                          })}>مشهد</NavLink>
        </nav>
      </div>
      { location.pathname === '/' && <div className="homepage" ><Home/></div>}
      <Outlet />
    </>
  );
}

export default App;







// import { useLocation } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { Outlet } from "react-router-dom";
// import Home from './component/Homepage';

// const App = () => {
//   const location = useLocation();

//   return (
//     <>
//       <div className="apptop">
//         <h3> نمونه پروژه سایت دیوار</h3>
//         <hr/>
//         <h5>لطفان شهر مورد نطر خود را انتخواب کنید</h5>
//         <nav className="apptop2">
//           <NavLink exact to="/" activeClassName="active-link" activeStyle={{ color: 'red' }}>صفحه اصلی</NavLink>
//           <NavLink to="/Tehran" activeClassName="active-link" activeStyle={{ color: 'red' }}>تهران</NavLink>
//           <NavLink to="/mashhad" activeClassName="active-link" activeStyle={{ color: 'red' }}>مشهد</NavLink>
//           <NavLink to="/Shiraz" activeClassName="active-link" activeStyle={{ color: 'red' }}>شیراز</NavLink>
//         </nav>
//       </div>
//       {location.pathname === '/' && <div className="homepage"><Home/></div>}
//       <Outlet />
//     </>
//   );
// }

// export default App;