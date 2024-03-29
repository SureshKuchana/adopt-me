import { ResultsProps } from "../global/types";
import Pet from "./Pet";

const Results = ({ pets }: ResultsProps) => {
  return (
    <div className="search">
      {pets.length ? (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      ) : (
        <h1>No Pets Found</h1>
      )}
    </div>
  );
};

export default Results;
