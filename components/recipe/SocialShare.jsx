"use client"
import cancelLogo from "@/public/cancel-svgrepo-com.svg";
import Image from "next/image";
import { FacebookShare, TelegramShare, TwitterShare, WhatsappShare } from "react-share-kit";

const SocialShare = ({ onClose, socialUrl, name }) => {
    return (
        <div className="flex flex-col w-full" onClick={() => onClose()}>
            <div className="flex justify-end mb-2 p-1">
                <button onClick={() => onClose()} className="self-end">
                    <Image src={cancelLogo} alt="" width={30} height={20} />
                </button>
            </div>
            <div className="flex justify-end space-x-4 p-6">
                <FacebookShare url={socialUrl} round quote={name} />
                <TwitterShare url={socialUrl} round quote={name} />
                <WhatsappShare url={socialUrl} round quote={name} />
                <TelegramShare url={socialUrl} round quote={name} />
            </div>
        </div>


    );
};

export default SocialShare;

