import { IPet } from "@/models/IPet";
import { FC } from "react";

type IProps = { pet: IPet };

const PetComponent: FC<IProps> = (props) => (
  <div>
    {props.pet.name}
    <br />
    {props.pet.age}
  </div>
);
export default PetComponent;
