import { getBlurData } from "@/utils/blurImage-generator";
import Image from "next/image";
import Link from "next/link";

const RecipeCard = async ({ recipe }) => {

    const { author, rating, name, id, image } = recipe;

    const randomImage = `${image}?${name[0]}`

    const { base64 } = await getBlurData(randomImage);

    return (

        <Link href={`/${name.split(' ').join('')}/${id}`} className="card ">
            <Image
                src={randomImage}
                alt={name}
                width={800}
                height={600}
                placeholder="blur"
                blurDataURL={base64}
                className="rounded-md"
            />
            <h4 className="my-2">{name}</h4>
            <div className="py-2 flex justify-between text-xs text-gray-500">
                <span>⭐️ {rating}</span>
                <span>By: {author}</span>
            </div>
        </Link>

    );
};

export default RecipeCard;