import { Stack, Box } from "@mui/material";
import { category, colors } from "../constants";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        whiteSpace: "nowrap",
        px: 2,
        py: 1,
        bgcolor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        "&::-webkit-scrollbar": {
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ccc",
          borderRadius: "4px",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          minWidth: "max-content",
          flexWrap: { xs: "nowrap", md: "wrap" }, // katta ekranda wrap
        }}
      >
        {category.map((item) => (
          <button
            key={item.name}
            className="category-btn"
            style={{
              background:
                item.name === selectedCategory ? colors.primary : "#f2f2f2",
              color: item.name === selectedCategory ? "#fff" : "#000",
              border: "none",
              borderRadius: "20px",
              padding: "8px 16px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 500,
              transition: "0.3s",
            }}
            onClick={() => selectedCategoryHandler(item.name)}
          >
            <span style={{ fontSize: "18px" }}>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </Stack>
    </Box>
  );
};

export default Category;
