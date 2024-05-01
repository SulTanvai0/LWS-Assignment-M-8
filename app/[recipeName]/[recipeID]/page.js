import Loading from "@/app/loading";
import RecipeDetails from "@/components/recipe/RecipeDetails";
import { getRecipeDetails } from "@/dataBase/queries";
import { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const recipeDetails = await getRecipeDetails(params.recipeID);

  const { thumbnail, name, description } = recipeDetails[0];

  return {
    title: `Khana Khazana - ${name}`,
    description: description,
    openGraph: {
      title: `Khana Khazana - ${name}`,
      images: thumbnail,
    },
  };
}

const page = async ({ params }) => {
  const recipeDetails = await getRecipeDetails(params.recipeID);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <RecipeDetails recipeDetails={recipeDetails} />
      </Suspense>
    </>
  );
};

export default page;
