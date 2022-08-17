import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        const { id } = category;
        return <DirectoryItem key={id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
