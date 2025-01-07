import React, { createContext, useContext, useState, useLayoutEffect, ReactNode, FunctionComponent, useEffect } from "react";

type ThemeContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
    sidebarCollapseState: boolean;
    toggleSidebarState: () => void;
    rightSidebarCollapseState: boolean; 
    toggleRightSidebarState: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
    const initialTheme = (): "light" | "dark" => {
        const storedTheme = localStorage.getItem("broker_copilot_theme");
        return storedTheme === "dark" ? "dark" : "light";
    };
    const [theme, setTheme] = useState<"light" | "dark">(initialTheme);
    const [sidebarCollapseState, setSidebarCollapseState] = useState<boolean>(false);
    const [rightSidebarCollapseState, setRightSidebarCollapseState] = useState<boolean>(false);

    const toggleTheme = () => {
        console.log("Toggling theme");
        setTheme(currentTheme => (currentTheme === "light" ? "dark" : "light"));
    };

    const toggleSidebarState = () => {
        setSidebarCollapseState(!sidebarCollapseState);
    };

    const toggleRightSidebarState = () => {
        setRightSidebarCollapseState(!rightSidebarCollapseState);
    };

    useEffect(() => {
        if (sidebarCollapseState) {
            document.body.classList.add("sidebar-collapsed");
        } else {
            document.body.classList.remove("sidebar-collapsed");
        }
    }, [sidebarCollapseState]);

    useEffect(() => {
        if (rightSidebarCollapseState) {
            document.body.classList.add("right-sidebar-collapsed");
        } else {
            document.body.classList.remove("right-sidebar-collapsed");
        }
    },[rightSidebarCollapseState])

    useLayoutEffect(() => {
        localStorage.setItem("broker_copilot_theme", theme);

        if (theme === "light") {
            document.documentElement.classList.remove("dark-mode");
            document.documentElement.classList.add("light-mode");
        } else {
            document.documentElement.classList.remove("light-mode");
            document.documentElement.classList.add("dark-mode");
        }
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme, sidebarCollapseState, toggleSidebarState, rightSidebarCollapseState, toggleRightSidebarState }}>{children}</ThemeContext.Provider>;
};

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export { ThemeProvider, useTheme };
