import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import { selectCategoriesMap } from "../../components/store/categories/category.selector";
import { useSelector } from "react-redux";

import { CategoryContainer, CategoryTitle } from "./category.styles";

import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={`${category}-${product.id}`}
                product={product}
              />
            );
          })}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
