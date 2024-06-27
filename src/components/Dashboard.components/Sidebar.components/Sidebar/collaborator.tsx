import { Icon, LinkMenu } from "./styles";

import { MdDashboard } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { BsFillPersonFill } from "react-icons/bs";
import { BsCalendar2Check } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BsFillBarChartFill } from "react-icons/bs";
import { LiaBellSolid } from "react-icons/lia";
import { useAppDispatch, useAppSelector } from "@/store";
import { setSidebarCurrentPage } from "@/store/slices/sidebar";

interface ISidebar {
  sidebarState: boolean | null;
}

export function SidebarCollaborator({ sidebarState }: ISidebar) {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.sidebar.currentPage);

  return (
    <>
      {sidebarState === false ? (
        <>
          <LinkMenu
            $isActivity={currentPage === "firstpage" ? true : false}
            onClick={() => {
              dispatch(setSidebarCurrentPage("firstpage"));
            }}
          >
            <Icon>
              <MdDashboard size={33} />
            </Icon>
            My journey
          </LinkMenu>
          <LinkMenu
            $isActivity={currentPage === "appliedvanacies" ? true : false}
            onClick={() => {
              dispatch(setSidebarCurrentPage("appliedvanacies"));
            }}
          >
            <Icon>
              <BsCalendar2Check size={28} />
            </Icon>
            Applied vacancies
          </LinkMenu>
          <LinkMenu
            $isActivity={currentPage === "lookforjob" ? true : false}
            onClick={() => {
              dispatch(setSidebarCurrentPage("lookforjob"));
            }}
          >
            <Icon>
              <CiGlobe size={33} />
            </Icon>
            Look for a job
          </LinkMenu>
          <LinkMenu
            $isActivity={currentPage === "profile" ? true : false}
            onClick={() => {
              dispatch(setSidebarCurrentPage("profile"));
            }}
          >
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
          <LinkMenu $isActivity={false}>
            <Icon>
              <CiMail size={33} />
            </Icon>
            Suporte
          </LinkMenu>
        </>
      ) : null}
    </>
  );
}
