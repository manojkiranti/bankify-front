import { Switch, Grid } from "antd";

import { faToggleOn, faToggleOff } from "@fortawesome/pro-light-svg-icons";
import { useTheme } from "@/contexts/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { useBreakpoint } = Grid;
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const { md } = useBreakpoint();

    const handleChange = () => {
        toggleTheme();
    };
    return (
        <Switch
            size={md ? "default" : "small"}
            onChange={handleChange}
            checkedChildren={<FontAwesomeIcon icon={faToggleOn} />}
            unCheckedChildren={<FontAwesomeIcon icon={faToggleOff} />}
            checked={theme === "light"}
        />
    );
};

export default ThemeToggle;
