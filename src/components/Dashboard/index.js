import React from "react";
import {
  MdHelp,
  MdSms,
  MdStorage,
  MdAndroid,
  MdLanguage,
  MdDashboard,
  MdViewCompact,
} from "react-icons/md";
import { Container, View, Content } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <View>
        <Content>
          <MdDashboard className="icon" size={24} color="#9aaabe" />
        </Content>
        <Content>
          <MdStorage className="icon" size={24} color="#9aaabe" />
        </Content>
        <Content>
          <MdViewCompact className="icon" size={24} color="#9aaabe" />
        </Content>
        <Content>
          <MdAndroid className="icon" size={24} color="#9aaabe" />
        </Content>
        <Content>
          <MdLanguage className="icon" size={24} color="#9aaabe" />
        </Content>
      </View>
      <View>
        <Content>
          <p id="help-text">Help</p>
        </Content>
        <Content>
          <MdHelp className="icon" size={24} color="#9aaabe" />
        </Content>
        <Content>
          <MdSms className="icon" size={24} color="#9aaabe" />
        </Content>
      </View>
    </Container>
  );
}
