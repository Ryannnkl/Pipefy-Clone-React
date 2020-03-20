import React from "react";
import {
  MdHelp,
  MdSms,
  MdStorage,
  MdAndroid,
  MdLanguage,
  MdDashboard,
  MdViewCompact
} from "react-icons/md";
import { Container, View } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <View>
        <MdDashboard className="icon" size={24} color="#9aaabe" />
        <MdStorage className="icon" size={24} color="#9aaabe" />
        <MdViewCompact className="icon" size={24} color="#9aaabe" />
        <MdAndroid className="icon" size={24} color="#9aaabe" />
        <MdLanguage className="icon" size={24} color="#9aaabe" />
      </View>
      <View>
        <p id="help-text">Help</p>
        <MdHelp className="icon" size={24} color="#9aaabe" />
        <MdSms className="icon" size={24} color="#9aaabe" />
      </View>
    </Container>
  );
}
