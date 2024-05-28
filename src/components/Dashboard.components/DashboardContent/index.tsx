import { Jobsstatistics } from "@/components/Dashboard.pages/Collaborator/Jobsstatistics.components/Jobsstatistics";
import { Header } from "../Header";
import { Container } from "./styles";

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
      <Jobsstatistics />
    </Container>
  );
}
