import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout(){
    return(
        <div className="host-layout">
            <ul>
                <li><NavLink to="." end={true} className={({isActive}) => isActive ? "active" : ""} >Dashboard</NavLink></li>
                <li><NavLink to="income" className={({isActive}) => isActive ? "active" : ""} >Income</NavLink></li>
                <li><NavLink to="vans" className={({isActive}) => isActive ? "active" : ""} >Vans</NavLink></li>
                <li><NavLink to="reviews" className={({isActive}) => isActive ? "active" : ""} >Reviews</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}