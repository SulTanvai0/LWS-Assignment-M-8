'use client'
import { useAuth } from "@/Hooks/useAuth";
import { toggleFavoriteAction } from "@/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialShare from "./SocialShare";

const DetailsAction = ({ recipeId, name, socialUrl }) => {

    const [showShare, setShowShare] = useState(false);

    const { auth } = useAuth();
    const router = useRouter();

    async function handelFavorite() {
        if (auth?.id) {
            const isFav = await toggleFavoriteAction(recipeId, auth?.id);
            if (isFav) {
                toast.success(`${name} added to favorite`)
            }
            else {
                toast.success(`${name} removed from favorite`)
            }

            return
        }
        toast.success("please LogIn to add as favorite")
        router.push("/user-authentication/login")
    };


    return (
        <div className="flex gap-4 justify-end">
            <div
                onClick={handelFavorite}
                className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                <span>Favourite</span>
            </div>

            <div onClick={() => setShowShare(!showShare)} className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M8.7 10.7l6.6 -3.4" />
                    <path d="M8.7 13.3l6.6 3.4" />
                </svg>
                <span>social share</span>
            </div>
            {
                showShare && <div>
                    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto">
                        <div className="relative bg-gray-400 rounded-lg shadow-lg  max-w-sm mx-auto">
                            <SocialShare onClose={() => setShowShare(false)} socialUrl={socialUrl} name={name} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default DetailsAction;