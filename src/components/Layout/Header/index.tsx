import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import { Button, Flex, Modal, Input, message, Drawer, Tooltip, theme } from "antd";
import {  ThemeToggle } from "@/components/UI";

import { useTheme } from "@/contexts/themeContext";
import styles from "./Header.module.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { ProfileDropdown } from "@/components/Elements";
import { useAppSelector } from '@/hooks/hooks';
const { TextArea } = Input;
const { useToken } = theme;


const Header = () => {
    const { sidebarCollapseState, toggleSidebarState } = useTheme();
    const { userData } = useAppSelector((state) => state.auth);
    const {token} =useToken();
  
    const [open, setOpen] = useState<boolean>(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [feedback, setFeedback] = useState("");


    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback(e.target.value);
    };

    const toggleCollapsed = () => {
        toggleSidebarState();
    };
    return (
        <>
            {contextHolder}
                    
                        <Button
                            onClick={toggleCollapsed}
                            className={`${styles["menu-button"]} ${sidebarCollapseState ? styles.btnCollapse : ""}`}
                            type="text"
                            style={{color:token.colorTextSecondary}}
                            icon={sidebarCollapseState ? <MenuUnfoldOutlined style={{fontSize:"22px"}} />  : <MenuFoldOutlined style={{fontSize:"22px"}}/>}
                        />
                    
     
            <Flex justify="flex-end" align="center" gap={10} className={`header ${styles.header}`}>
               
                <ThemeToggle />
                <ProfileDropdown userDetail={userData} />
            </Flex>
        </>
    );
};

export default Header;
