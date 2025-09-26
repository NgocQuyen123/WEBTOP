import Image from "next/image";
import ContentSection from '../components/contentSection/ContentSection';
import CartCollection from "../components/cartCollection/CartCollection";
import Card from '../components/cart/Cart';
import EventCard from '../components/eventCard/EventCard';
import RoundCard from '../components/roundCard/RoundCard';
import { fetchAllData } from "../lib/fetchAll";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import { cartData, cartEvent, cartMentors, cartRound, competitionGoals, prizes } from '../data/db';

export default async function Home() {

  const img = "/assets/unnamed.png";
  const img1 = "/assets/unnamed-1.webp";
  const img2 = "/assets/unnamed-2.webp";
  const img12 = "/assets/unnamed-12.webp";

  const images1 = [
    "/assets/unnamed-13.webp",
    "/assets/unnamed-14.webp",
    "/assets/unnamed-15.webp",
    "/assets/unnamed-16.webp",
    "/assets/unnamed-17.webp",
    "/assets/unnamed-18.webp",
    "/assets/unnamed-19.webp",
    "/assets/unnamed-20.webp",
    "/assets/unnamed-21.webp",
    "/assets/unnamed-22.webp",
    "/assets/unnamed-23.webp",
  ];

  const images2 = [
    "/assets/unnamed-24.webp",
    "/assets/unnamed-25.webp",
    "/assets/unnamed-26.webp",
    "/assets/unnamed-27.webp",
    "/assets/unnamed-28.webp",
    "/assets/unnamed-29.webp",
    "/assets/unnamed-30.webp",
  ];


  return (
    <div>
      <div className="px-4 max-w-[1290px] mx-auto">
        <ContentSection
          type={2}
          title="Break the"
          subtitle="Norm"
          note="2025"
          content="is a competition designed for students who are passionate about public speaking and wish to enhance their English communication skills. This contest provides participants with the opportunity to showcase critical thinking, presentation skills, and connect with experts and peers nationwide."
          imageSrc={img1}
          buttonText1="Get Started"
          buttonText2="Learn More"
        />

        <CartCollection cartData={cartData} Component={Card} />

        <ContentSection
          type={1}
          title="Eligibility"
          subtitle="Norm"
          note="2025"
          content="Open to university and college students aged 18-25 with intermediate or higher English skills. Ideal for those eager to improve public speaking and express ideas confidently."
          imageSrc={img2}
          buttonText1="Get Started"
        />
      </div>

      <div className="bg-[linear-gradient(0deg,rgba(255,252,229,0.85)_0%,rgb(255,255,255)_100%)]">
        <div className="px-4 max-w-[1290px] mx-auto py-15">
          <CartCollection cartData={cartRound} Component={RoundCard} type={1} dividerImage={img12} />
        </div>
      </div>

      <div className="px-4 max-w-[1290px] mx-auto">
        <CartCollection cartData={cartMentors} Component={Card} size={2} />
      </div>

      <div className="bg-primary3 w-full px-4 p-1 mt-25">
        <div className="bg-white rounded-lg shadow max-w-[1024px] mx-auto my-20 px-5"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="py-5 text-center">
            <h2 className="text-[32px] font-bold text-primary">Prizes</h2>
            <p className="text-[14px] mb-8">
              Winners will receive cash prizes, certificates, and scholarships for advanced public speaking training.
              Top performers also gain <br />
              opportunities for internships at leading organizations.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {prizes.map((prize, index) => (
                <div
                  key={index}
                  className={`
                p-4 
                bg-[linear-gradient(0deg,rgb(255,255,255)_0%,rgb(251,212,93)_100%)] 
                rounded
                ${index === 1 ? 'mt-[-32px] ' : 'mt-0 bg-[linear-gradient(0deg,rgb(255,255,255)_0%,rgb(255,230,155)_100%)] '}
              `}
                >
                  <h3 className="text-2xl font-semibold text-center pb-2">{prize.title}</h3>
                  <ul className="list-none p-0 m-0">
                    {prize.rewards.map((reward, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-6 text-yellow-500">⭐</span>
                        <span className="flex-1 text-center text-[14px] pb-2">{reward}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-[1290px] mx-auto">
        <CartCollection cartData={cartEvent} Component={EventCard} />
        <div className="flex flex-col md:flex-row w-full justify-between items-center py-30">
          <div className="flex-1">
            <h2>
              <strong className="text-primary text-3xl font-black">Register Now</strong>
            </h2>
            <div className="mt-2">
              <h6 className="text-[14px] font-bold">10/01/2025 - 20/01/2025</h6>
            </div>
          </div>

          <div className="flex-1 bg-[rgb(253,241,203)] w-full">
            <div className="px-4 py-3 h-full">
              <RegistrationForm />
            </div>
          </div>
        </div>

        <div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-primary">Partners</h2>

          </div>

          <div className="text-center mt-7">
            <h6 className="font-semibold">Supporting Organizations</h6>
            <div className="grid grid-cols-5 gap-10 sm:grid-cols-11 sm:gap-10">
              {images1.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg w-full aspect-square relative">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-7">
            <h6 className="font-semibold">Media Partners</h6>
            <div className="grid grid-cols-5 gap-10 sm:grid-cols-7 sm:gap-17">
              {images2.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg w-full aspect-square relative">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

