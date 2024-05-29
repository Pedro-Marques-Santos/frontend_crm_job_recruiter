import {
  About,
  Container,
  ContainerAboutVacancies,
  ContainerNameAndLogo,
  ContentVanancies,
  ImageProfile,
  Status,
} from "./styles";

import Image from "next/image";

import imglogo from "@/images/test/logoband.png";

import { FaLocationDot } from "react-icons/fa6";
import { BiDesktop } from "react-icons/bi";
import { FaWeightHanging } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";

interface IBoxvacancies {
  status: boolean;
}

export function Boxvacancies({ status }: IBoxvacancies) {
  return (
    <Container>
      <ContentVanancies>
        <ContainerNameAndLogo>
          <ImageProfile>
            <Image
              src={imglogo}
              width={38}
              height={38}
              alt="Picture of the author"
            />
          </ImageProfile>
          <h4>Rede Bandeirantes</h4>
        </ContainerNameAndLogo>
        <ContainerAboutVacancies>
          <About>
            <i>
              <FaLocationDot />
            </i>
            <h5>São Paulo - SP</h5>
          </About>
          <About>
            <i>
              <BiDesktop />
            </i>
            <h5>Remote</h5>
          </About>
          <About>
            <i>
              <FaWeightHanging size={13} />
            </i>
            <h5>Effective</h5>
          </About>
          <About>
            <i>
              <FaWalking />
            </i>
            <h5>Also for PwD</h5>
          </About>
        </ContainerAboutVacancies>
      </ContentVanancies>
      <Status $status={status}>{status ? "In Progess" : "Finished"}</Status>
    </Container>
  );
}
