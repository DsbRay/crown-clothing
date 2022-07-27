import { Outlet } from "react-router-dom";
import "../../categories.styles.scss";
import CategoryDirectory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <CategoryDirectory />;
    </div>
  );
};

export default Home;
