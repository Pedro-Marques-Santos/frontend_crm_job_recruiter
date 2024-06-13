import { FormRegisterDropFile } from "../FormRegisterContent.sub.components/FormRegisterDropFile";
import { Container } from "./styles";

interface IFormRegisterContentStepThree {
  typeFormContentStepThree: string;
  addImagemProfile: (image: File | null) => void;
  image: File | null;
}

export function FormRegisterContentStepThree({
  typeFormContentStepThree,
  addImagemProfile,
  image,
}: IFormRegisterContentStepThree) {
  return (
    <Container>
      {typeFormContentStepThree === "business" && (
        <FormRegisterDropFile
          addImagemProfile={addImagemProfile}
          image={image}
          selectState={false}
        />
      )}
      {typeFormContentStepThree === "collaborator" && (
        <FormRegisterDropFile
          addImagemProfile={addImagemProfile}
          image={image}
          selectState={true}
        />
      )}
    </Container>
  );
}
