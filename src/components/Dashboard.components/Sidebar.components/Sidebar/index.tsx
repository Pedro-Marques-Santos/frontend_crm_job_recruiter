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

// import { MdDashboard } from "react-icons/md";
// import { CiGlobe } from "react-icons/ci";
// import { BsFillPersonFill } from "react-icons/bs";
// import { BsCalendar2Check } from "react-icons/bs";
// import { CiMail } from "react-icons/ci";
// import { BsFillBarChartFill } from "react-icons/bs";
// import { LiaBellSolid } from "react-icons/lia";

import imglogo from "@/images/logoeasyrecruiter2.png";
import { Proversion } from "../Proversion";
import { Userprofile } from "../Userprofile";
import { useAppSelector } from "@/store";
import { SidebarCollaborator } from "./collaborator";

interface ISidebar {
  stateSidebar: boolean;
}

export function Sidebar({ stateSidebar }: ISidebar) {
  const sidebarState = useAppSelector((state) => state.sidebar.isRecruiter);

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
          {sidebarState !== null && sidebarState !== undefined ? (
            <>
              <SidebarCollaborator sidebarState={sidebarState} />
            </>
          ) : null}
        </ContentMenu>
      </ContainerLogoAndMenu>
      <ContainerUpgrade>
        <Proversion stateSidebar={stateSidebar} />
        <Userprofile />
      </ContainerUpgrade>
    </Container>
  );
}
