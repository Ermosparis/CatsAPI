import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";

import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  categorieIdState,
  catsArrayState,
  pageNumberState,
} from "../../recoil/atoms";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const setCategorie = useSetRecoilState(categorieIdState);

  let pageNumber = useRecoilValue(pageNumberState);
  const setPageNumber = useSetRecoilState(pageNumberState);

  const categorieID = useRecoilValue(categorieIdState);
  const setCats = useSetRecoilState(catsArrayState);
  const catsArray = useRecoilValue(catsArrayState);

  useEffect(() => {
    setCats([]);
    setPageNumber(1);
    const fetchCatsById = async (id, limit = 10) => {
      try {
        const response = await axios.get(
          `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${pageNumber}&category_ids=${id}`
        );
        setCats([...response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCatsById(categorieID, 10);
    console.log(catsArray);
  }, [categorieID]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `https://api.thecatapi.com/v1/categories`
        );
        setCategories([...response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <ul className="categories-list">
      {categories.map((categorie) => (
        <li
          className="categorie-li"
          key={categorie.id + categorie.name}
          role="button"
          onClick={() => {
            setCategorie(categorie.id);
          }}
        >
          {categorie.name}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
