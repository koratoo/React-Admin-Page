import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PollIcon from "@mui/icons-material/Poll";

const Sidebar = () => {
  const [open, setOpen] = useState({
    dashboard: false,
    settings: false,
  });

  const location = useLocation();

  const toggleSubmenu = (menu) => {
    setOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        backgroundColor: "#f7f7f7",
        borderRight: "1px solid #ddd",
        fontFamily: "'Noto Sans', sans-serif",
      }}
    >
      <h4 style={{ padding: "16px", color: "#333" }}>관리자님, 환영합니다!</h4>
      <Divider />
      <List>
        {/* 사용자 메뉴 */}
        <ListItem
          button
          component={Link}
          to="/users"
          style={{
            backgroundColor: isActive("/users") ? "#ff9800" : "",
            color: isActive("/users") ? "#fff" : "#000",
          }}
        >
          <ListItemIcon>
            <PeopleIcon
              style={{ color: isActive("/users") ? "#fff" : "#000" }}
            />
          </ListItemIcon>
          <ListItemText primary="사용자" />
        </ListItem>

        {/* 대시보드 메뉴 */}
        <ListItem
          button
          onClick={() => toggleSubmenu("dashboard")}
          style={{
            backgroundColor:
              isActive("/dashboard") && !open.dashboard ? "#ff9800" : "",
            color: isActive("/dashboard") && !open.dashboard ? "#fff" : "#000",
          }}
        >
          <ListItemIcon>
            <DashboardIcon
              style={{ color: isActive("/dashboard") ? "#fff" : "#000" }}
            />
          </ListItemIcon>
          <ListItemText primary="대시보드" />
          {open.dashboard ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.dashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/dashboard/overview"
              style={{
                paddingLeft: "32px",
                backgroundColor: isActive("/dashboard/overview")
                  ? "#ff9800"
                  : "",
                color: isActive("/dashboard/overview") ? "#fff" : "#000",
              }}
            >
              <ListItemText primary="개요" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/dashboard/reports"
              style={{
                paddingLeft: "32px",
                backgroundColor: isActive("/dashboard/reports")
                  ? "#ff9800"
                  : "",
                color: isActive("/dashboard/reports") ? "#fff" : "#000",
              }}
            >
              <ListItemText primary="보고서" />
            </ListItem>
          </List>
        </Collapse>

        {/* 설정 메뉴 */}
        <ListItem
          button
          onClick={() => toggleSubmenu("settings")}
          style={{
            backgroundColor:
              isActive("/setting") && !open.settings ? "#ff9800" : "",
            color: isActive("/setting") && !open.settings ? "#fff" : "#000",
          }}
        >
          <ListItemIcon>
            <SettingsIcon
              style={{ color: isActive("/setting") ? "#fff" : "#000" }}
            />
          </ListItemIcon>
          <ListItemText primary="셋팅" />
          {open.settings ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.settings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/setting/profile"
              style={{
                paddingLeft: "32px",
                backgroundColor: isActive("/setting/profile") ? "#ff9800" : "",
                color: isActive("/setting/profile") ? "#fff" : "#000",
              }}
            >
              <ListItemText primary="프로필 설정" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/setting/security"
              style={{
                paddingLeft: "32px",
                backgroundColor: isActive("/setting/security") ? "#ff9800" : "",
                color: isActive("/setting/security") ? "#fff" : "#000",
              }}
            >
              <ListItemText primary="보안 설정" />
            </ListItem>
          </List>
        </Collapse>

        {/* 투표 메뉴 */}
        <ListItem
          button
          component={Link}
          to="/polls"
          style={{
            backgroundColor: isActive("/polls") ? "#ff9800" : "",
            color: isActive("/polls") ? "#fff" : "#000",
          }}
        >
          <ListItemIcon>
            <PollIcon style={{ color: isActive("/polls") ? "#fff" : "#000" }} />
          </ListItemIcon>
          <ListItemText primary="투표" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
