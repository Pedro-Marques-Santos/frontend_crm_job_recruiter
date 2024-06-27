import { Search } from "../Search";
import { Technicallevel } from "../Technicallevel";
import { Workarea } from "../Workarea";
import { Container, ContainerJobs, ContainerSelects } from "./styles";
import { Wage } from "../Wage";
import { Workmode } from "../Workmode";
import Locales from "../StateAndCountry";
import { Job } from "../Job";

export function Lookforjob() {
  return (
    <Container>
      <h1>Look for a job</h1>
      <Search />
      <ContainerSelects>
        <Workarea />
        <Technicallevel />
        <Wage />
      </ContainerSelects>
      <ContainerSelects>
        <Workmode />
        <Locales />
      </ContainerSelects>
      <ContainerJobs>
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </ContainerJobs>
    </Container>
  );
}
