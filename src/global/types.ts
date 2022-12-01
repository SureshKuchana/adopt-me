export type PetProps = {
  animal: string;
  breed: string;
  name: string;
  location: string;
  images: [""];
  id: number;
  city?: string;
  description?: string;
  state?: string;
};

export type PetType = PetProps[];

export type ResultsProps = {
  pets: PetType;
};
