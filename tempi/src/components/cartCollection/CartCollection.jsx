
import Image from "next/image";

const splitIntoTwoLines = (text) => {
    const words = text.split(' ');
    const mid = Math.ceil(words.length / 2);
    const line1 = words.slice(0, mid).join(' ');
    const line2 = words.slice(mid).join(' ');
    return [line1, line2];
};

const CartCollection = ({ cartData, Component, type, dividerImage, size }) => {
    return (
        <>
            {cartData.map((group, index) => (
                <section key={index} className="w-full px-4 my-10">
                    <div className="text-center mb-8">
                        {group.title && (
                            <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-primary mb-3">
                                {group.title}
                            </h1>
                        )}
                        {group.subtitle && splitIntoTwoLines(group.subtitle).map((line, idx) => (
                            <p key={idx} className="text-[14px] leading-[18px]">{line}</p>
                        ))}
                    </div>
                    {type === 1 && dividerImage && (
                        <div className="relative w-full h-24 my-8">
                            <Image
                                src={dividerImage}
                                alt="divider"
                                fill
                                className="object-contain rounded-xl"
                                priority
                            />
                        </div>
                    )}

                    <div className={`grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))] ${size === 2 ? 'gap-10' : 'gap-4'}`}>
                        {group.items?.length > 0 ? (
                            group.items.map((cart, idx) => (
                                <Component key={idx} data={cart} size={size} />
                            ))
                        ) : (
                            <p>Chưa có sản phẩm nào trong giỏ</p>
                        )}
                    </div>
                </section>
            ))}
        </>
    );
};

export default CartCollection;

