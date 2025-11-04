import { Stack } from "@mui/material";
import { category, colors } from "../constants";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction="row" overflowX="scroll">
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            background: item.name === selectedCategory && colors.primary
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span style={{ color:  item.name === selectedCategory ? '#fff' : colors.primary, marginRight: 15 }}>
            {item.icon}
          </span>
          <span style={{ opacity: 0.7 }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};
export default Category;
