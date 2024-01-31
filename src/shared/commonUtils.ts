export interface IREGISTERUSER {
  RegistrationNo: string;
  Name: string;
  MiddleName: string;
  LastName: string;
  State: string;
  LocalGovernment: string;
  AdmissionMode: string;
  AdmissionType: string;
  Status: string;
  Year: string;
}
export interface ILOGINFACULTY {
  Email: string;
  Password: string;
}
export interface ISTUDENTS {
  Year: string;
  Status: string;
  State: string;
  MiddleName: string;
  LocalGovernment: string;
  datetime: number;
  RegistrationNo: string;
  StudentId: string;
  AdmissionType: string;
  AdmissionMode: string;
  LastName: string;
  Name: string;
}
export const NigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];
