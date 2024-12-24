

import BANK from "@/assets/images/bank.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/pro-light-svg-icons";
import { Input, Typography, Collapse, Button } from 'antd';
import type { CollapseProps } from 'antd';
import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import { Scrollbars } from "rc-scrollbars";

// const { useBreakpoint } = Grid;

const text = `
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
`;

const Sidebar = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: "I didn't receive the OTP code.",
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'Documents required for credit card.',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'Does my debit card will block instantly?',
      children: <p>{text}</p>,
    },
    {
      key: '4',
      label: 'How long does it takes to process new debit card?',
      children: <p>{text}</p>,
    },
  ];

  return (
    <>
      <div className='sidebar'>
        <div className="sidebar-container">
              <div className='faq-wrapper' style={{
                padding:"2rem 0"
              }}>
                  <div style={{textAlign:"center"}}>
                      <span className='faq-logo'>
                          <img src={BANK} alt='' />
                      </span>
                      <Typography.Title level={4} style={{marginTop:"12px"}}>How can we help you?</Typography.Title>
                      <div className="search-box">
                        <span className="search-icon">
                          <FontAwesomeIcon icon={faSearch} />
                        </span>
                        
                        <Input placeholder="Descript your issue" className="search-input" />
                      </div>
                  </div>
              </div>
              <div className="faq-list"  style={{
                padding:"0 1rem"
              }}>
                <Collapse accordion items={items} />
              </div>

              <div className="sidebar-cards" style={{padding:"0 1rem"}}>
                <Typography.Title level={4} style={{marginTop:"55px"}}>Sample Services</Typography.Title>

                <div className="swiper-card-wrapper">
                  <Swiper
                  spaceBetween={10}
                  slidesPerView="auto"
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>

                        <div className="card-col">
                          <div className="card-color bg-primary-1">
                              <div className="card-color-body">
                                  <div className="card-icon-wrap">
                                    <div className="card-icon">
                                        <FontAwesomeIcon icon={faAddressCard} />
                                    </div>
                                  </div>
                                  <div className="card-color-text">
                                    <Typography.Title level={5} style={{color:"#fff", marginTop:"0"}}>Lorem Ipsum</Typography.Title>
                                    <Typography.Title level={5} style={{color:"#fff", marginTop:"0.5rem", marginBottom:"1rem"}}> It is a long established fact that a reader will be distracted </Typography.Title>
                                    <Button>Lorem</Button>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-col">
                        <div className="card-color  bg-success-1">
                            <div className="card-color-body">
                                <div className="card-icon-wrap">
                                  <div className="card-icon">
                                      <FontAwesomeIcon icon={faAddressCard} />
                                  </div>
                                </div>
                                <div className="card-color-text">
                                  <Typography.Title level={5} style={{color:"#fff", marginTop:"0"}}>Lorem Ipsum</Typography.Title>
                                  <Typography.Title level={5} style={{color:"#fff", marginTop:"0.5rem", marginBottom:"1rem"}}> It is a long established fact that a reader will be distracted </Typography.Title>
                                  <Button>Lorem</Button>
                                </div>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card-col">
                        <div className="card-color  bg-success-1">
                            <div className="card-color-body">
                                <div className="card-icon-wrap">
                                  <div className="card-icon">
                                      <FontAwesomeIcon icon={faAddressCard} />
                                  </div>
                                </div>
                                <div className="card-color-text">
                                  <Typography.Title level={5} style={{color:"#fff", marginTop:"0"}}>Lorem Ipsum</Typography.Title>
                                  <Typography.Title level={5} style={{color:"#fff", marginTop:"0.5rem", marginBottom:"1rem"}}> It is a long established fact that a reader will be distracted </Typography.Title>
                                  <Button>Lorem</Button>
                                </div>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                 </Swiper>
                </div>
              </div>

              
            </div>


      </div> 
    </>
  );
};

export default Sidebar;
