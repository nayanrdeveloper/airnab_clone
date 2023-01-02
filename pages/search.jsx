import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header/Header";
import PlaceCard from "../components/PlaceCard";
import Footer from "../components/Footer";

function search({ searchResult }) {
  console.log(searchResult);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { location, startDate, endDate, user } = router.query;

  const formateDate = (date) => {
    const formattedDate = format(new Date(date), "dd MMMM yy");
    return formattedDate;
  };

  const rangeDate = `${formateDate(startDate)} - ${formateDate(endDate)}`;

  return (
    <div>
      <Header rangeLocation={`${location} | ${rangeDate} | ${user} Guests`} />
      <main>
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays for {rangeDate} and {user} number of Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="flex space-x-3 hidden lg:inline-flex text-gray-800 whitespace-nowrap">
            <span className="filter-button">Cancellation Flexibility</span>
            <span className="filter-button">Type of Place</span>
            <span className="filter-button">Price</span>
            <span className="filter-button">Rooms and Beds</span>
            <span className="filter-button">More Filters</span>
          </div>
          <div>
            {searchResult &&
              searchResult.map((placeItem) => {
                return (
                  <PlaceCard
                    key={placeItem.title}
                    img={placeItem.img}
                    star={placeItem.star}
                    price={placeItem.price}
                    total={placeItem.total}
                    long={placeItem.long}
                    lat={placeItem.lat}
                    description={placeItem.description}
                    title={placeItem.title}
                    location={placeItem.location}
                  />
                );
              })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
