import React, {useContext, useEffect,} from "react";
import { getData } from "../../context/getData";
import CreateCard from "../../components/cards";
import {UserDataContext} from "../../context/getData";

const BrandPage = () => {

  const context = useContext(UserDataContext);

  useEffect(() => {
    getData(context.dispatch);
  }, []);

  return (
    <div>
      <CreateCard />
    </div>
  );
};
export default BrandPage;
