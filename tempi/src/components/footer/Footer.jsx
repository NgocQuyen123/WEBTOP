
import { fetchAllData } from "../../lib/fetchAll";
import { PhoneIcon, MailIcon } from "lucide-react";
import { formFields, addressInfo, contactInfo } from '../../data/db';

export default async function Footer() {
    // const { formFields, addressInfo, contactInfo } = await fetchAllData();
    const iconMap = {
        phone: PhoneIcon,
        mail: MailIcon,
    };

    return (
        <footer className="bg-yellow-500 text-white mt-30">
            <div className="grid md:grid-cols-3 gap-8 py-20 px-4 max-w-[1290px] mx-auto">
                <div>
                    <h3 className="text-[28px] font-medium mb-4">Liên hệ với chúng tôi</h3>
                    <form className="flex flex-col space-y-4">
                        {formFields?.map((field, idx) => (
                            <div key={idx}>
                                <label className="block text-sm mb-1">
                                    {field.required && <span className="text-red-500">*</span>}{" "}
                                    {field.label}
                                </label>
                                {field.type === "textarea" ? (
                                    <textarea
                                        className="w-full px-3 py-1 rounded-md text-black bg-white h-[32px]"
                                    />

                                ) : (
                                    <input
                                        type={field.type}
                                        className="w-full px-3 py-1 rounded-md text-black  bg-white"
                                    />
                                )}
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="bg-indigo-900 text-white px-6 py-[6px] rounded-full font-medium hover:bg-indigo-800 w-[30%] sm:w-1/2 lg:w-[30%] flex items-center justify-center"
                        >
                            Gửi
                        </button>


                    </form>
                </div>

                <div>
                    <h3 className="text-[24px] font-medium mb-4">Địa chỉ</h3>
                    {addressInfo.map((item, idx) => (
                        <p key={idx}>{item.text}</p>
                    ))}
                </div>

                <div>
                    <h3 className="text-[28px] font-medium mb-4">Liên hệ</h3>
                    {contactInfo.map(({ icon, text }, idx) => {
                        const Icon = iconMap[icon];
                        return (
                            <div key={idx} className="flex items-center gap-2 mb-2">
                                {Icon && <Icon size={18} />}
                                <span>{text}</span>
                            </div>
                        );
                    })}


                </div>
            </div>
        </footer>
    );
}
