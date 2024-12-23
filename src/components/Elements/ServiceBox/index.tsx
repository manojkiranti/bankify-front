import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "antd";


interface ServiceBoxProps {
    icon: IconProp;
    title: string;
    link: string;
}
const ServiceBox:FC<ServiceBoxProps> = ({icon, title, link}) => {
  const navigate = useNavigate(); 
  const handleApply = () => {
    console.log("link", link)
    navigate(link); 
  };

  return (
    <div className="service" onClick={handleApply}>
      <span className="service-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <Typography.Title className="service-title" level={5} style={{color:"#181818", fontSize:"13px", margin:"0", fontWeight:"500"}}>{title}</Typography.Title>
    </div>
  );
};

export default ServiceBox;