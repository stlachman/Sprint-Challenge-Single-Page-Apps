import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function TabNav() {
  return (
    <Menu>
      <Menu.Item name="Home Page" as={NavLink} to="/">
        Home Page
      </Menu.Item>

      <Menu.Item name="Characters" as={NavLink} to="/character">
        Characters
      </Menu.Item>

      <Menu.Item name="locations" as={NavLink} to="/location">
        Locations
      </Menu.Item>
      <Menu.Item name="Episodes" as={NavLink} to="/episode">
        Episodes
      </Menu.Item>
    </Menu>
  );
}
