import { Button, HeaderSmall } from 'app/components/ui';
import { useRouter } from 'next/navigation';

export default function Contact(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div className="relative h-auto">
        <div className="h-auto place-items-center items-center flex justify-between mx-[130px] px-[20px] pt-[100px]">
          <div className="flex flex-col justify-center items-start">
            {/* Hero Header */}
            <div className="items-center w-3/4 relative">
              <HeaderSmall text="Meet and Greet!" />
              <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Impressed Already? <span className="text-pink">Schedule</span> a call with him.
                {/* Gender specific????? */}
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Let’s grab a cup of <span className="text-pink">coffee</span>.
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-10 sm:mt-0">
            <img src="/images/vectors/contact.svg" alt="" className="w-3/4" />
          </div>
        </div>
        <div className="flex justify-center items-center w-full z-30">
          <Button type="solid" text="Let's Connect! 🚀 " onClickHandler={() => router.push('/connect')} />
        </div>
      </div>
    </>
  );
}
