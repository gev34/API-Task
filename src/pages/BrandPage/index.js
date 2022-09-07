import React, { useCallback, useContext, useEffect, useState } from "react";
import { getData } from "../../context/getData";
import CreateCard from "../../components/cards";
import {
  UserDataContext,
  UserDataProvider,
  dispatch,
} from "../../context/getData";

const BrandPage = () => {
  // const [brandData, setBrandData] = useState([]);
  const context = useContext(UserDataContext);
  // console.log(context);
  // console.log(context.state.loading);
  // console.log(context.state.userData);
  useEffect(() => {
    getData(context.dispatch);
  }, []);
  console.log();
  return (
    <div>
      <CreateCard />
    </div>
  );
};
export default BrandPage;
