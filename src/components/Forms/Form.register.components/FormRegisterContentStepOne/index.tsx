import { Contianer, Select, SelectOption } from "./styles";

interface IFormRegisterContentStepOne {
  changeTypeFormRegister: (type: string) => void;
  typeFormRegister: string;
}

export function FormRegisterContentStepOne({
  changeTypeFormRegister,
  typeFormRegister,
}: IFormRegisterContentStepOne) {
  return (
    <Contianer>
      <h1>
        Welcome to the <strong>EasyRecruit</strong> account registration
        process.
      </h1>
      <h2>
        Please select one of the following options to register your account, you
        can choose to sign up as a collaborator or as a business.
      </h2>
      <ul>
        <li>
          Recruiter: As a recruiter you can add new job openings, check
          exclusive content only from recruiters <strong>know more</strong>
        </li>
        <li>
          Collaborator: As a recruiter you can add new job openings, check
          exclusive content only from recruiters <strong>know more</strong>
        </li>
      </ul>
      <Select>
        <SelectOption
          onClick={() => changeTypeFormRegister("business")}
          $isActivated={typeFormRegister === "business"}
        >
          Business
        </SelectOption>
        <SelectOption
          onClick={() => changeTypeFormRegister("collaborator")}
          $isActivated={typeFormRegister === "collaborator"}
        >
          Collaborator
        </SelectOption>
      </Select>
    </Contianer>
  );
}
