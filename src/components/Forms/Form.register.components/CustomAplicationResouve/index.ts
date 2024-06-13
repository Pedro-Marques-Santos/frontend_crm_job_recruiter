import { Dayjs } from "dayjs";

interface CustomApplicationResource {
  nameUser: string;
  companyname: string;
  emailCompany: string;
  emailUser: string;
  linkedin: string;
  dataofbirth: string;
  description: string;
  image: File | null;
  dateOfBirth: Dayjs | null;
}

export type { CustomApplicationResource };
