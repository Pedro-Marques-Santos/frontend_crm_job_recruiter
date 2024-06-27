import {
  Container,
  ContainerSecondaryInformation,
  Description,
  Icon,
  NameAgency,
  SecondaryInformation,
  Title,
  Wage,
  Date,
} from "./styles";

import { BiSolidGraduation } from "react-icons/bi";
import { BiMapPin } from "react-icons/bi";
import { BiMap } from "react-icons/bi";

export function Job() {
  const description =
    "The candidate must live in São Paulo and have a LOT of knowledge in e-commerce, online sales strategies, in-depth knowledge of SEO and even remotely, the ability to produce effectively! I want to work in partnership based on results, we can discuss values ​​based on RESULTS";

  function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <Container>
      <Title>Desenvolvedor Fullstack (Node.js e React.js) (Júnior)</Title>
      <NameAgency>Agência Computacional Brasil</NameAgency>
      <ContainerSecondaryInformation>
        <SecondaryInformation>
          <h2>
            <Icon>
              <BiSolidGraduation />
            </Icon>
            Junior
          </h2>
          <h2>
            <Icon>
              <BiMap />
            </Icon>
            On-Site
          </h2>
          <h2>
            <Icon>
              <BiMapPin />
            </Icon>
            São Paulo
          </h2>
        </SecondaryInformation>
        <Wage>R$1.900,00 - R$5.000,00</Wage>
        <Description>{truncateText(description, 120)}</Description>
        <Date>announced 30 days ago</Date>
      </ContainerSecondaryInformation>
    </Container>
  );
}
