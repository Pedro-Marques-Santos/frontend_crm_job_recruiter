import { Button, Container } from "./styles";

import Image from "next/image";

import img from "@/images/test/img.jpg";
import { useAppSelector } from "@/store";

export function Imgprofile() {
  const user = useAppSelector((state) => state.user.userState);

  console.log(user?.status.imgprofile);

  return (
    <Container>
      {user ? (
        <>
          <Image
            src={user.status.imgprofile}
            width={200}
            height={200}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="Picture of the author"
          />
          <Button>Change Image</Button>
        </>
      ) : null}
    </Container>
  );
}
