import React from "react";
import Cat from "./Cat";

import { v4 as uuid_v4 } from "uuid";

import { useRecoilValue } from "recoil";
import { catsArrayState } from "../../recoil/atoms";

const CatsList = () => {
  const catsArray = useRecoilValue(catsArrayState);

  return (
    <>
      {catsArray.length > 0 &&
        catsArray.map((catObject) => (
          <Cat key={uuid_v4()} imgLink={catObject.url} />
        ))}
    </>
  );
};

export default CatsList;
