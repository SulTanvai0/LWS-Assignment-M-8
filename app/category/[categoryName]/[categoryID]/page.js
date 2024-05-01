import CategorizedList from "@/components/categorized/CategorizedList";
import { getCategoryById } from "@/dataBase/categoryDB";
import { getRecipesByCategory } from "@/dataBase/queries";

export async function generateMetadata({ params, searchParams }, parent) {
  const category = getCategoryById(params.categoryID);
  return {
    title: `Khana Khazana - ${category.categoryName}`,
  };
}

const categoryPage = async ({ params }) => {
  const category = getCategoryById(params.categoryID);

  const recipes = await getRecipesByCategory(category.categoryName);

  return (
    <>
      <CategorizedList recipes={recipes} />
    </>
  );
};
export default categoryPage;
