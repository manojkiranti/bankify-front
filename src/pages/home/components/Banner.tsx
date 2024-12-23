import { Typography } from "antd";
import Title from "antd/es/typography/Title";
import SETUP from "@/assets/images/software.png"
const Banner = () => {
    return (
        <div className="home-banner">
            <div className="banner-content">
                <div className="banner-text">
                    <img src={SETUP} alt="" className="banner-img" />
                    <Typography.Title level={2} style={{color:"#fff"}}>
                            All Your Banking Needs
                            <span style={{display:"block"}}> One Platform</span>
                    </Typography.Title>
                </div>
            </div>
        </div>
    );
};

export default Banner;
