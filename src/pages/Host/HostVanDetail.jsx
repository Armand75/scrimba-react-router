import { useOutletContext } from "react-router-dom"

export default function HostVanDetail(){

    const {hostsVan}  = useOutletContext();

    return (
        <div className="host-van-name-category">
            <p><b>Name:</b> {hostsVan.name} </p>
            <p><b>Category:</b> {hostsVan.type} </p>
            <p><b>Descriptiond:</b> {hostsVan.description} </p>
            <p><b>Visibility:</b> Public </p>
            
        </div>
    )
}