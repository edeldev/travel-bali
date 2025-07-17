import Link from "next/link";

export const HeroTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-5xl md:text-9xl font-bold text-center text-white">
          Bienvenidos a
        </h1>

        <div className="flex justify-center flex-col xl:flex-row gap-5 xl:gap-0 items-end w-fit mx-auto relative">
          <h2 className="text-6xl md:text-9xl text-white mx-auto font-bali uppercase">
            Bali
          </h2>

          <div className="xl:absolute xl:-right-40 flex items-center bg-white rounded-full pr-1 group cursor-pointer">
            <div className="px-3 py-1 xl:px-5 xl:py-3 bg-primary hover:bg-primary/90 transition duration-300 rounded-full border border-white">
              <Link href="" className="text-white">
                Viajar ahora
              </Link>
            </div>
            <span className="ml-1 transition-transform duration-300 group-hover:rotate-180">
              &gt;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
