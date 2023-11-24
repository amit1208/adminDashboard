// import { IconType } from "react-icons";
// import { Location, useLocation } from "react-router-dom";
import {RiDashboardFill,RiShoppingBag3Fill,RiCoupon3Fill} from 'react-icons/ri';
import { Link } from "react-router-dom";
import {AiFillFileText} from "react-icons/ai";
import {IoIosPeople} from "react-icons/io";
import {FaChartBar,FaChartPie,FaChartLine} from 'react-icons/fa'
import {FaStopwatch,FaGamepad} from 'react-icons/fa';




const AdminSIdebar = () => {

// const location = useLocation()

  return (
<aside> 
    <h2>Logo.</h2>
    <div>
      <h5>Dashboard</h5>
      <ul>
        {/* <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location}/> */}
        
        <li style={{ backgroundColor :location.pathname.includes("/admin/dashboard")?"rgba(0,115,255,0.1)":"white"}}><Link to ={"/admin/dashboard"} style={{ color :location.pathname.includes("/admin/dashboard")?"rgb(0,115,255)":"black"}}> <RiDashboardFill/> Dashboard</Link></li>
        <li style={{ backgroundColor :location.pathname.includes("/admin/products")?"rgba(0,115,255,0.1)":"white"}}><Link to ={"/admin/products"} style={{ color :location.pathname.includes("/admin/products")?"rgb(0,115,255)":"black"}}><RiShoppingBag3Fill/> Product</Link></li>
        <li style={{ backgroundColor :location.pathname.includes("/admin/customers")?"rgba(0,115,255,0.1)":"white"}}><Link to ={"/admin/customers"} style={{ color :location.pathname.includes("/admin/customers")?"rgb(0,115,255)":"black"}}><IoIosPeople/> Customers</Link></li>
        <li style={{ backgroundColor :location.pathname.includes("/admin/transaction")?"rgba(0,115,255,0.1)":"white"}}><Link to ={"/admin/transaction"} style={{ color :location.pathname.includes("/admin/transaction")?"rgb(0,115,255)":"black"}}><AiFillFileText/> Transaction</Link></li>

      </ul>
    </div>
    <div>
      <h5>Charts</h5>
      <ul>

        <li style={{ backgroundColor :location.pathname.includes("/admin/chart/bar")?"rgba(0,115,255,0.1)":"white"}}><Link to ={"/admin/chart/bar"} style={{ color :location.pathname.includes("/admin/chart/bar")?"rgb(0,115,255)":"black"}}> <FaChartBar/> Bar chart</Link></li>
        <li style={{ backgroundColor :location.pathname.includes("/admin/chart/pie")?"rgba(0,115,255,0.1)":"white"}}><Link to ={"/admin/chart/pie"} style={{ color :location.pathname.includes("/admin/chart/pie")?"rgb(0,115,255)":"black"}}><FaChartPie/> Pie chart</Link></li>
        <li style={{ backgroundColor :location.pathname.includes("/admin/chart/line")?"rgba(0,115,255,0.1)":"white"}}><Link to ={"/admin/chart/line"} style={{ color :location.pathname.includes("/admin/chart/line")?"rgb(0,115,255)":"black"}}><FaChartLine/> Line chart</Link></li>
      </ul>
    </div>
    <div>
      <h5>Apps</h5>
      <ul>

        <li style={{ backgroundColor :location.pathname.includes("/admin/apps/stopwatch")?"rgba(0,115,255,0.1)":"white"}}><Link to ={"/admin/apps/stopwatch"} style={{ color :location.pathname.includes("/admin/apps/stopwatch")?"rgb(0,115,255)":"black"}}> <FaStopwatch/> Stopwatch</Link></li>
        <li style={{ backgroundColor :location.pathname.includes("/admin/apps/coupon")?"rgba(0,115,255,0.1)":"white"}}><Link to ={"/admin/apps/coupon"} style={{ color :location.pathname.includes("/admin/apps/coupon")?"rgb(0,115,255)":"black"}}><RiCoupon3Fill/> Coupon</Link></li>
        <li style={{ backgroundColor :location.pathname.includes("/admin/apps/toss")?"rgba(0,115,255,0.1)":"white"}}><Link to ={"/admin/apps/toss"} style={{ color :location.pathname.includes("/admin/apps/toss")?"rgb(0,115,255)":"black"}}><FaGamepad/> Toss</Link></li>
      </ul>
    </div>
</aside>
 );
}
export default AdminSIdebar ;


// interface LiProps {
//   url:string;
//   text:string;
//   location:Location;
//   Icon:IconType;}
// const Li=({url,location,Icon,text}:LiProps)=>(
//   <li>
// <Link to ={url}>
//   <Icon/>
//   {text}
//   </Link>

// </li>);

 