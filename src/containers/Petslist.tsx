import PetComponent from "@/components/PetComponent";
import { IPet } from "@/models/IPet";
import React, { FC } from "react";

type IPetListProps = { pets: IPet[] };

const PetList: FC<IPetListProps> = ({ pets }) => {
  return (
    <div className="">
      {pets.map((el) => (
        <PetComponent pet={el} />
      ))}
    </div>
  );
};
export default PetList;
