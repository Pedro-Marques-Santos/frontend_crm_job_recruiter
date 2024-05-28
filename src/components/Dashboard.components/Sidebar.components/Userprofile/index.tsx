import { Container, ContentImg, Contentprofile, Icon, Profile } from "./styles";

import Image from "next/image";

import imgprofile from "@/images/test/img.jpg";

import { GrFormNext } from "react-icons/gr";

export function Userprofile() {
  return (
    <Container>
      <Contentprofile>
        <ContentImg>
          <Image
            src={imgprofile}
            width={38}
            height={38}
            alt="Picture of the author"
          />
        </ContentImg>
        <Profile>
          <h5>Pedro</h5>
          <h6>Collaborator</h6>
        </Profile>
      </Contentprofile>
      <Icon>
        <GrFormNext size={22} color="gray" />
      </Icon>
    </Container>
  );
}
