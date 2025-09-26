import React from 'react';
import Image from 'next/image';
import Button from '../button/Button';
import { ArrowRight } from "lucide-react";
import { FaUser, FaUniversity, FaStar } from 'react-icons/fa';

const ContentSection = ({ type, title, subtitle, note, content, imageSrc, buttonText1, buttonText2 }) => {
    const eligibilityList = [
        { icon: <FaUser />, text: 'Aged 18 to 25.' },
        { icon: <FaUniversity />, text: 'University and college students across the country.' },
        { icon: <FaStar />, text: 'Must have an intermediate or higher level of English proficiency.' },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            {type === 1 ? (
                <>
                    <div className="w-full md:w-[500px] h-[500px] relative">
                        <Image src={imageSrc} alt="image" layout="fill" objectFit="contain" />
                    </div>
                    <div className="max-w-lg">
                        <h4 className="text-2xl font-bold text-primary">{title}</h4>
                        <p className="mt-2 text-[14px]">{content}</p>
                        <ul className="my-4 space-y-2 text-[14px]">
                            {eligibilityList.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="mr-2">{item.icon}</span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <Button variant="primary" size="md" icon={<ArrowRight size={20} />} children="Learn More" />
                    </div>
                </>
            ) : (
                <>
                    <div className=" flex-1">
                        <h1 className="font-bold text-64 text-gray-900 leading-[55px]">{title}</h1>
                        <div className="flex items-baseline gap-2 leading-[55px]">
                            <h1 className="font-semibold text-gray-900 text-64">{subtitle}</h1>
                            <em className="font-semibold text-gray-900 text-64">{note}</em>
                        </div>

                        <p className="mt-4 mb-8 opacity-77 text-[14px] leading-[18px] font-normal">{content}</p>
                        <div className="flex mt-3 gap-x-5">
                            <Button variant="primary" size="md" children="Get Started" />
                            <Button variant="primary" size="md" icon={<ArrowRight size={20} />} children="Learn More" />
                        </div>
                    </div>

                    <div className="flex-1 w-full md:w-[500px] relative aspect-[1/1]">
                        <Image
                            src={imageSrc}
                            alt="image"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ContentSection;
