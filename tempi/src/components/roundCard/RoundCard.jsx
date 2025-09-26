import clsx from "clsx";
import Image from "next/image";
import Button from "../button/Button";
import { ArrowRight } from "lucide-react";

const RoundCard = ({ data, size }) => {
    const { title, content, imageSrc, buttonText, subtitle } = data
    return (
        <div className="w-full flex flex-col items-center rounded-lg shadow-md bg-white">
            <div className="mx-3 my-6">
                <div className="flex flex-col sm:flex-row w-full gap-4 sm:justify-between">
                    <div className="w-full sm:w-1/4 max-w-[85px] flex justify-start">
                        <div className="relative w-full aspect-[4/3]">
                            <Image
                                src={imageSrc}
                                alt="{alt}"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-full sm:w-auto flex justify-end sm:items-center">
                        <Button
                            variant="primary"
                            size="sm"
                            className="px-4 py-2"
                            icon={<ArrowRight size={16} />}
                            children={buttonText}
                        />
                    </div>
                </div>

                <div className="m-3">
                    <div className="flex flex-col items-start gap-2 text-left">
                        {title && <h2 className="text-2xl font-bold">{title}</h2>}
                        {content &&
                            <p className="text-gray-600">
                                {content}
                            </p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoundCard;
