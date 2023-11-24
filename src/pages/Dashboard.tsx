import AdminSIdebar from "../components/AdminSIdebar";
import {BsSearch} from 'react-icons/bs'
import {FaRegBell} from 'react-icons/fa'
const userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp";
import {HiTrendingDown,HiTrendingUp} from 'react-icons/hi'

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSIdebar/>

        <main className="dashboard">
          <div className="bar">
          <BsSearch/><input type ="text" placeholder="Search for data,users,docs"/><FaRegBell/>
          <img src={userImg} alt="User"/>
          </div>
          <section className="widget-container">
                <WidgetItem percent={40} amount={true} value={340000} color="rgb(0,115,225)" heading={"Revenue"}/>
                <WidgetItem percent={40} amount={true} value={340000} color="rgb(0,115,225)" heading={"Revenue"}/>
                <WidgetItem percent={40} amount={true} value={340000} color="rgb(0,115,225)" heading={"Revenue"}/>
          </section>
          
          
        </main>      
      
      
      </div>
  )
};
interface WidgetItemProps{
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount? :boolean;
}
const WidgetItem=({heading,value,percent,color,amount}
:WidgetItemProps)=> <article className="widget">
  <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount?`$${value}`:value}</h4>
    {
    percent>0?(<span className="green"><HiTrendingUp/> + {percent}%{" "}</span>):(
    <span className="red"><HiTrendingDown/> {percent}%{" "}</span>
    )}

  </div>
</article>

export default Dashboard ;