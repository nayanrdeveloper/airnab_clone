import Image from "next/image";
import React from "react";
import CategoryPlace from "../components/CategoryPlace";
import Header from "../components/Header/Header";
import PlaceMediumCard from "../components/PlaceMediumCard";
import ShortFooter from "../components/ShortFooter";
import categoryList from "../data/categoryData";

function explore({ categoryData }) {
  console.log(categoryData);
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          {/* <h2 className="text-4xl font-semibold pb-5">Explore NearBy</h2> */}
          <div className="flex space-x-10 overflow-scroll scrollbar-hide">
            {categoryList?.map(({ id, name, icon, url }) => {
              return (
                <CategoryPlace
                  key={id}
                  id={id}
                  name={name}
                  icon={icon}
                  url={url}
                />
              );
            })}
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-7 mt-8">
            {categoryData?.map((categoryItem) => {
              return (
                <PlaceMediumCard
                  key={categoryItem.title}
                  title={categoryItem.title}
                  star={categoryItem.star}
                  price={categoryItem.price}
                  total={categoryItem.total}
                  img={categoryItem.img}
                />
              );
            })}
          </div>
        </section>
      </main>
      <ShortFooter />
    </div>
  );
}

export default explore;

export async function getServerSideProps() {
  const categoryData = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      categoryData,
    },
  };
}
