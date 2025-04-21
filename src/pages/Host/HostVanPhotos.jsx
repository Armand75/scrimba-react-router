import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos(){

    const {hostsVan} = useOutletContext();

    return (
        <img src={hostsVan.imageUrl} alt={hostsVan.name} className="host-van-photo" />
    )
}