import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function Navi() {


  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="building outline" size="large"/>
            Hrms
          </Menu.Item>
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="İş İlanları" />
          <Menu.Item name="Şirketler" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Button.Group>
                <Button primary>Kayıt Ol</Button>
                <Button.Or />
                <Button positive>Giriş Yap</Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}