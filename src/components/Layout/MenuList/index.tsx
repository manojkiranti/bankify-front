import { FC, useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { FormOutlined, GlobalOutlined, OpenAIOutlined, FileTextOutlined, FolderOutlined, UserOutlined, 
    FileDoneOutlined, AppstoreOutlined, MobileOutlined, CreditCardOutlined, CustomerServiceOutlined, DesktopOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { MENU_ITEMS } from "@/devFrontData/menu";
import { useTheme } from "@/contexts/themeContext";
import { MenuType } from "@/types";

const ICON_WRAPPER: { [key: string]: JSX.Element } = {
    search: <OpenAIOutlined />,
    zoom: <GlobalOutlined />,
    document: <FileTextOutlined />,
    form: <FormOutlined />,
    folder: <FolderOutlined />,
    user: <UserOutlined />,
    fileDoneOutlined: <FileDoneOutlined />,
    dashboard: <AppstoreOutlined />,
    mobile: <MobileOutlined />,
    card: <CreditCardOutlined />,
    customerService: <CustomerServiceOutlined />,
    teller: <DesktopOutlined />,
    loan: <MoneyCollectOutlined />
};

interface MenuListProps {
    onSelect?: () => void;
}

const findMenuItem = (items: MenuType[], key: string): MenuType | null => {
    for (const item of items) {
        if (item.key === key) {
            return item; // If key matches, return the item immediately
        } else if (item.children) {
            const found = findMenuItem(item.children, key);
            if (found) return found; // If found in children, return the found item
        }
    }
    return null;
};

const findMenuItemByPath = (items: MenuType[], path: string): MenuType | null => {
    for (const item of items) {
        if (item.link === path) {
            return item;
        } else if (item.children) {
            const found = findMenuItemByPath(item.children, path);
            if (found) return found;
        }
    }
    return null;
};

const MenuList: FC<MenuListProps> = ({ onSelect }) => {
    const { sidebarCollapseState } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const defaultOpenKeys = ["5", "6"];

    const findActiveKey = () => {
        const currentRoute = location.pathname;
        const matchedItem = findMenuItemByPath(MENU_ITEMS, currentRoute);
        return matchedItem ? matchedItem.key : "100";
    };

    const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys);
    const [current, setCurrent] = useState<string>(findActiveKey());

    useEffect(() => {
        const activeKey = findActiveKey();
        setCurrent(activeKey);

        const openItemKeys = MENU_ITEMS.filter(item => item.children?.some(child => child.key === activeKey)).map(item => item.key);
        setOpenKeys(prevOpenKeys => [...new Set([...prevOpenKeys, ...openItemKeys])]);
    }, [location.pathname]);

    const items: MenuProps["items"] = useMemo(() => {
        const mapItems = (items: MenuType[]): MenuProps["items"] =>
            items.map(item => {
                const icon = item.icon ? ICON_WRAPPER[item.icon] : undefined;
                return {
                    key: item.key,
                    label: item.label,
                    icon,
                    children: item.children ? mapItems(item.children) : undefined
                };
            });

        return mapItems(MENU_ITEMS);
    }, []);

    const handleMenuClick: MenuProps["onClick"] = e => {
        const key = e.key.toString();
        setCurrent(key);
        console.log("Clicked key:", key);

        const item = findMenuItem(MENU_ITEMS, key);
        console.log("Navigated item:", item);

        if (item && item.link) {
            navigate(item.link);
            if (onSelect) {
                onSelect();
            }
        }
    };

    const onOpenChange: MenuProps["onOpenChange"] = keys => {
        setOpenKeys(keys as string[]);
    };

    return (
        <Menu
            selectedKeys={[current]}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            onClick={handleMenuClick}
            mode="inline"
            inlineCollapsed={sidebarCollapseState}
            style={{ background: "none", border: "none" }}
            items={items}
        />
    );
};

export default MenuList;
