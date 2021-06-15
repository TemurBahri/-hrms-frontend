import React from "react";
import { Icon, Menu } from 'semantic-ui-react'

export default function SideBar() {
  return (
    <div>
      <Menu fluid compact icon="labeled" vertical>
        

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          İş Arayanlar
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          İş Verenler
        </Menu.Item>
        <Menu.Item
          name="user"
        >
          <Icon name="bullhorn" />
          İş Pozisyonları
        </Menu.Item>
      </Menu>
    </div>
  );
}