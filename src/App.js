import { useEffect } from "react";

import "./App.css";
import axios from "axios";

import Categories from "../src/components/Categorie";
import CatsList from "../src/components/Cats";

import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  categorieIdState,
  catsArrayState,
  pageNumberState,
} from "./recoil/atoms";

function App() {
  const categorieID = useRecoilValue(categorieIdState);
  const catsArray = useRecoilValue(catsArrayState);
  const setCats = useSetRecoilState(catsArrayState);

  let pageNumber = useRecoilValue(pageNumberState);
  const setPageNumber = useSetRecoilState(pageNumberState);

  const addOnePage = () => {
    setPageNumber((pageNumber += 1));
    console.log(pageNumber);
  };

  useEffect(() => {
    const fetchCatsById = async (id, limit = 10, pageNum) => {
      try {
        const response = await axios.get(
          `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${pageNum}&category_ids=${id}`
        );
        setCats([...catsArray, ...response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCatsById(categorieID, 10, pageNumber);
    console.log(catsArray);
  }, [pageNumber]);

  return (
    <div className="App">
      <div className="container">
        <nav className="nav-categories">
          <Categories />
        </nav>
        <main className="main-container">
          <h1 className="title">Cats</h1>
          <div className="cards-container">
            <CatsList />
          </div>
          <button className="btn-more-cats" onClick={addOnePage}>
            More Cats
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;
