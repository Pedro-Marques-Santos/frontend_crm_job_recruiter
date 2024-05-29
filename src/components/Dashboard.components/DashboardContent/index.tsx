import { Jobsstatistics } from "@/components/Dashboard.pages/Collaborator/Jobsstatistics.components/Jobsstatistics";
import { Header } from "../Header";
import { Container } from "./styles";
import { Appliedvacancies } from "@/components/Dashboard.pages/Collaborator/Appliedvacancies.components/Appliedvacancies";
import { Profile } from "@/components/Dashboard.pages/Collaborator/Profile.components/Profile";

interface IDashboardContent {
  modifyStatesidebar: () => void;
  stateSidebar: boolean;
}

export function DashboardContent({
  modifyStatesidebar,
  stateSidebar,
}: IDashboardContent) {
  return (
    <Container>
      <Header modifyStatesidebar={modifyStatesidebar} />
      <Profile />
    </Container>
  );
}
