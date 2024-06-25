import { Jobsstatistics } from "@/components/Dashboard.pages/Collaborator/Jobsstatistics.components/Jobsstatistics";
import { Header } from "../Header";
import { Container } from "./styles";
import { Appliedvacancies } from "@/components/Dashboard.pages/Collaborator/Appliedvacancies.components/Appliedvacancies";
import { Profile } from "@/components/Dashboard.pages/Collaborator/Profile.components/Profile";
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";

interface IDashboardContent {
  modifyStatesidebar: () => void;
  stateSidebar: boolean;
}

export function DashboardContent({
  modifyStatesidebar,
  stateSidebar,
}: IDashboardContent) {
  const sidebarState = useAppSelector((state) => state.sidebar.isRecruiter);
  const currentPage = useAppSelector((state) => state.sidebar.currentPage);

  return (
    <Container>
      <Header modifyStatesidebar={modifyStatesidebar} />
      {sidebarState !== null && sidebarState !== undefined ? (
        <>
          {sidebarState === true ? (
            <>Recrutador</>
          ) : (
            <>
              {currentPage === "firstpage" && (
                <>
                  <Jobsstatistics />
                </>
              )}
              {currentPage === "appliedvanacies" && (
                <>
                  <Appliedvacancies />
                </>
              )}
              {currentPage === "profile" && (
                <>
                  <Profile />
                </>
              )}
            </>
          )}
        </>
      ) : null}
    </Container>
  );
}
