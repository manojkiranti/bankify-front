import { Grid } from "antd";

import { useTheme } from "@/contexts/themeContext";
import styles from "./Sidebar.module.scss";
import MenuList from "../MenuList";
import LOGO from "@/assets/images/logo_2_white.png";
import { Scrollbars } from "rc-scrollbars";

const { useBreakpoint } = Grid;

const Sidebar = () => {
    const { sidebarCollapseState, toggleSidebarState } = useTheme();
    const { md } = useBreakpoint();
    console.log("md", md);

    const toggleCollapsed = () => {
        toggleSidebarState();
    };

    return (
        <div  className={`sidebar-container ${styles["sidebar-container"]} ${sidebarCollapseState ? styles.sidebarContainerCollapse : ""}`}>
            <div className="sidebar">
                <div className={styles["logo-wrapper"]}>
                    <img src={LOGO} alt="" />
                    {/* <Tooltip title={sidebarCollapseState ? "Expand" : "Collapse"}>
                        <Button
                            onClick={toggleCollapsed}
                            className={`${styles["menu-button"]} ${sidebarCollapseState ? styles.btnCollapse : ""}`}
                            type="text"
                            icon={<ArrowImportFilled />}
                        />
                    </Tooltip> */}
                </div>
                <div className={styles["sidebar-body"]}>
                    <Scrollbars autoHide style={{ maxHeight: "calc(100vh - 100px)" }}>
                        <div style={{ width: "100%" }}>
                            <MenuList />
                            {/* <div style={{ padding: "1rem 20px" }}>
                                <LoginButton />
                            </div> */}
                        </div>
                        </Scrollbars>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
