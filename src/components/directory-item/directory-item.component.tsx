import { FC } from "react";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

type CategoryItemProps = {
  title: string;
  imageUrl: string;
  route: string;
};

type CategoryProps = {
  category: CategoryItemProps;
};

const DirectoryItem: FC<CategoryProps> = ({ category }: CategoryProps) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
