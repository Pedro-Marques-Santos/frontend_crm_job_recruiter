import { Box, Container, Icon, ContentBox } from "./styles";

import { SlCalender } from "react-icons/sl";
import { BiLineChart } from "react-icons/bi";
import { BiSolidBookmarks } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";

export function Informations() {
  return (
    <Container>
      <Box>
        <Icon>
          <BsCalendarCheck size={20} />
        </Icon>
        <ContentBox>
          <h5>Overall jobs applied for.</h5>
          <h4>16</h4>
        </ContentBox>
      </Box>
      <Box>
        <Icon>
          <SlCalender size={20} />
        </Icon>
        <ContentBox>
          <h5>Total jobs applied for this month.</h5>
          <h4>16</h4>
        </ContentBox>
      </Box>
      <Box>
        <Icon>
          <BiSolidBookmarks size={20} />
        </Icon>
        <ContentBox>
          <h5>Total job applications this week.</h5>
          <h4>16</h4>
        </ContentBox>
      </Box>
      <Box>
        <Icon>
          <BiLineChart size={20} />
        </Icon>
        <ContentBox>
          <h5>Jobs applied for today.</h5>
          <h4>16</h4>
        </ContentBox>
      </Box>
    </Container>
  );
}
