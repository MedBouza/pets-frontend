import PetList from "@/containers/Petslist";

import PageWrapper from "@/containers/PageWrapper";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getpet } from "@/store/actions/petActions";
import { useCallback, useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();

  const fetchPets = useCallback(() => {
    dispatch(getpet());
  }, []);

  useEffect(() => {
    fetchPets();
  }, []);
  const pets = useAppSelector((state) => state.pets.pets);

  return (
    <PageWrapper>
      <div>cover</div>
      {pets && <PetList pets={pets}></PetList>}
    </PageWrapper>
  );
};
export default Home;
