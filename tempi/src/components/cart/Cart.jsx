import clsx from "clsx";
import Image from "next/image";

const Card = ({ data, size }) => {
    const { title, content, imageSrc } = data
    return (
        <div
            className={clsx(
                "w-full flex flex-col items-center rounded-lg shadow-md transition-all duration-300 transform",
                size === 2
                    ? "bg-[#fcb50fab]"
                    : "bg-cream hover:bg-[#EBEBEB] hover:shadow-xl hover:-translate-y-1"
            )}
        >
            <div className={size === 2 ? "py-8 px-5 w-full" : "py-5 px-2 w-full"}>
                {size === 2 ? (
                    <div className="relative w-full h-[200px]">
                        <Image
                            src={imageSrc}
                            alt="{alt}"
                            fill
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ) : (
                    <div className="relative w-full aspect-[4/3] max-w-[190px] h-[100px] mx-auto">
                        <Image
                            src={imageSrc}
                            alt="{alt}"
                            fill
                            className="object-contain p-2"
                        />
                    </div>

                )}

                <div className="flex flex-col items-start gap-2 text-left mt-2">
                    {title && <h2 className="text-2xl font-bold">{title}</h2>}
                    {content &&
                        <p className="text-gray-600 leading-[18px]">
                            {content}
                        </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
