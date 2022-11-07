import { FC } from "react";
import { CategoryPreviewContainer, Preview } from "./category-preview.styles";

import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

type ProductItemProps = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

type CategoryProps = {
  title: string;
  products: ProductItemProps[];
};

const CategotyPreview: FC<CategoryProps> = ({
  title,
  products,
}: CategoryProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategotyPreview;
