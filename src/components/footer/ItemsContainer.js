import Item from "./Item";
import { TechLabs, Tools, AboutUs, Support} from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-6">
      <Item Links={TechLabs} title="TechLabs" />
      <Item Links={Tools} title="Tools" />
      <Item Links={AboutUs} title="AboutUs" />
      <Item Links={Support} title="Support" />
    </div>
  );
};

export default ItemsContainer;