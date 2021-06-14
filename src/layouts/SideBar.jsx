import React from "react";
import { Icon, Menu } from 'semantic-ui-react'

export default function SideBar() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name="bullhorn"
        >
          <Icon name="bullhorn" />
          İş Ünvanları
        </Menu.Item>

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
          <Icon name="user" />
          İş Pozisyonları
        </Menu.Item>
      </Menu>
    </div>
  );
}