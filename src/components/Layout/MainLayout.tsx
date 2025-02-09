import { ReactNode } from 'react';
import { useState } from "react";
import { Drawer, Grid } from "antd";
import styles from './Layout.module.scss';
import Sidebar from '@/components/Layout/Sidebar';
import Header from '@/components/Layout/Header';
import { MenuProvider } from '@/contexts/menuContext';
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useTheme } from "@/contexts/themeContext";
interface MainLayoutProps {
  children?: ReactNode;
}

const { useBreakpoint } = Grid;
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isLoading } = useSelector((state: RootState) => state.common);
    const { md } = useBreakpoint();
    const { theme, sidebarCollapseState } = useTheme();
    const [menuState, setMenuState] = useState(false);
    const [openCopilotDialog, setOpenCopilotDialog] = useState(false);

    const getMenuState = () => {
        setMenuState(!menuState);
    };

    const handleOpenCopilot = () => {
        setOpenCopilotDialog(true);
    };
  return (
    <>
      <MenuProvider>
        <Header />
        <div className={styles["main-layout"]}>
          <div className={styles.sidebarContainer}>
            <Sidebar />
          </div>

          <div className={`${styles["main-body-container"]} ${sidebarCollapseState ? styles.collapsedSidebar : ""}`}
                    style={{
                        backgroundColor: theme === "dark" ? "rgb(28, 29, 32)" : "rgb(248,248,250)"
                    }}>
            <div className={styles.mainBody}>{children}</div>
          </div>
        </div>
      </MenuProvider>
    </>
  );
};

export default MainLayout;
