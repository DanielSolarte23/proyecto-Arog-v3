"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { Button, Layout } from "antd";
import MenuList from "./MenuList";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import React from 'react';
const { Sider } = Layout;

function NavBar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme="light"
        width={260}
        className="h-full" 
      >
        <div className={collapsed ? "flex items-center justify-center p-2" : "flex items-center justify-end p-2"}>
          <Button
            type="text"
            icon={collapsed ? <CaretRightOutlined /> : <CaretLeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-black"
          />
        </div>
        <MenuList />
      </Sider>
    </Layout>
  );
}

export default NavBar;
