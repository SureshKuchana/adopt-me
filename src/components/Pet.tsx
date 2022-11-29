type PetProps = {
  animal: string;
  breed: string;
  name: string;
};

const Pet = ({ name, breed, animal }: PetProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{animal}</h1>
      <h1>{breed}</h1>
    </div>
  );
};

export default Pet;
