import { popularHotel } from "@/libs/popularHotel";
import { Title } from "../ui";
import Link from "next/link";

export const PopularHotels = () => {
  return (
    <div className="mt-20">
      <Title
        label="Hoteles populares"
        color="text-text"
        className="text-center mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 place-items-center">
        <div className="col-span-12 gap-10 flex flex-wrap justify-center items-end">
          {popularHotel.map((hotel, index) => {
            const isMiddle = index === 1;

            return (
              <div
                key={hotel.id}
                className={`
        w-full md:w-[300px]
        h-[350px] 
        md:h-[400px]
        ${isMiddle ? "lg:h-[480px]" : "lg:h-[400px]"}
        overflow-hidden rounded-4xl relative
      `}
              >
                <img
                  src={hotel.img}
                  alt={hotel.caption}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-[3px] pointer-events-none z-0" />

                <div className="absolute bottom-3 z-10 flex flex-col gap-3 w-full px-3">
                  <h3 className="text-end uppercase text-3xl text-white font-semibold">
                    {hotel.title}
                  </h3>
                  <p className="text-white text-sm">{hotel.caption}</p>

                  <Link
                    href={hotel.url}
                    className="px-3 py-1 rounded-full bg-primary text-white self-center font-semibold hover:bg-primary/80 transition-colors duration-300"
                  >
                    Reservar ahora
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
