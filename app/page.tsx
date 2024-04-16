"use Client"
import { Hero } from "@/components";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "@/utils";
import {CarCard} from "@/components";
import { HomeProps } from "@/types";
import ShowMore from "@/components/ShowMore";


export default async function Home({searchParams}:HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  console.log(allCars)

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-2   max-width">
        <div className=" ml-4 home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Cataloug

          </h1>
          <p> Explore the car you might like</p>

        </div>
        <div className="home__filters">
          <SearchBar />
         


        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
            


      </div>
    </main>
  );
}
