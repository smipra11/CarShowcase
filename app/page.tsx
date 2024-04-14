import { Hero } from "@/components";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";


export default function Home() {
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
          <div className= "home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>

          </div>


        </div>


      </div>
    </main>
  );
}
