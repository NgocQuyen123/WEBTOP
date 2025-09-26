import clsx from "clsx";
import Image from "next/image";

const EventCard = ({ data, size }) => {
    const { title, content, imageSrc, secondImageSrc } = data
    const icons = ["🏆", "🥇"];
    return (
        <div className="w-full flex flex-col items-center rounded-lg shadow-md bg-cream1 relative">
            <div className="w-full relative">
                <div className="relative w-full aspect-[3/2]">
                    <Image
                        src={imageSrc}
                        alt="{alt}"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="absolute left-1/8 -translate-x-1/2 top-full -translate-y-1/2 w-1/4 max-w-[85px] rounded-lg overflow-hidden z-10">
                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src={secondImageSrc}
                            alt="{alt}"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="w-full mt-8 relative z-10">
                <div className="flex flex-col items-start text-left mx-5 my-5">
                    {title && <h2 className="text-2xl font-bold text-[#4d4ac9] mb-3">{title}</h2>}

                    {content && content.map((line, index) => (
                        <p key={index} className="text-gray-600 font-semibold text-sm">
                            <span>{icons[index]}</span>
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default EventCard;
