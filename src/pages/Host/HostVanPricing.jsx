import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {

const {hostsVan} = useOutletContext()

  return (
    <p>
      <span className="van-price">${hostsVan.price}</span>
      <span className="day">/day</span>
    </p>
  );
}
