import {
  Container,
  ContentLogo,
  ContainerLogoAndMenu,
  ContentMenu,
  ContainerUpgrade,
  Icon,
  LinkMenu,
} from "./styles";

import Image from "next/image";

import { MdDashboard } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { BsFillPersonFill } from "react-icons/bs";
import { BsCalendar2Check } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BsFillBarChartFill } from "react-icons/bs";
import { LiaBellSolid } from "react-icons/lia";

import imglogo from "@/images/logoeasyrecruiter2.png";
import { Proversion } from "../Proversion";
import { Userprofile } from "../Userprofile";

interface ISidebar {
  stateSidebar: boolean;
}

export function Sidebar({ stateSidebar }: ISidebar) {
  return (
    <Container $stateSidebar={stateSidebar}>
      <ContainerLogoAndMenu>
        <ContentLogo>
          <Image src={imglogo} width={40} alt="Picture of the author" />
          <h4>
            <strong>Easy</strong>Recruiter
          </h4>
        </ContentLogo>
        <ContentMenu>
          <LinkMenu $isActivity={false}>
            <Icon>
              <MdDashboard size={33} />
            </Icon>
            My journey
          </LinkMenu>
          <LinkMenu $isActivity={false}>
            <Icon>
              <BsCalendar2Check size={28} />
            </Icon>
            Applied vacancies
          </LinkMenu>
          <LinkMenu $isActivity={false}>
            <Icon>
              <CiGlobe size={33} />
            </Icon>
            Look for a job
          </LinkMenu>
          <LinkMenu $isActivity={false}>
            <Icon>
              <BsFillPersonFill size={32} />
            </Icon>
            Profile
          </LinkMenu>
          <LinkMenu $isActivity={false}>
            <Icon>
              <BsFillBarChartFill size={33} />
            </Icon>
            Premium version
          </LinkMenu>
          {/* <LinkMenu $isActivity={false}>
            <Icon>
              <CiMail size={33} />
            </Icon>
            Profile
          </LinkMenu> */}
          <LinkMenu $isActivity={true}>
            <Icon>
              <LiaBellSolid size={33} />
            </Icon>
            Suporte
          </LinkMenu>
        </ContentMenu>
      </ContainerLogoAndMenu>
      <ContainerUpgrade>
        <Proversion stateSidebar={stateSidebar} />
        <Userprofile />
      </ContainerUpgrade>
    </Container>
  );
}
