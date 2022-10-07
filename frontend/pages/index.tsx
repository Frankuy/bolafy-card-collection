import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../interfaces/card-interface";
import { Collection } from "../interfaces/collection-interface";
import { HomePageProps } from "../interfaces/home-page-props";
import styles from "../styles/Home.module.css";

const Home: NextPage<HomePageProps> = ({ collections }) => {
  const onClickBuy = async (collectionId: string) => {
    const res = await fetch("http://localhost:3000/api/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "test",
        collectionId,
      }),
    });
    const data: Card[] = await res.json();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Link href="/collection">
        <button>Collection</button>
      </Link>
      {collections.map((collection) => (
        <div key={collection.id}>
          <p>{collection.name}</p>
          <button onClick={() => onClickBuy(collection.id)}>Buy</button>
          {collection.cards.map((card) => (
            <Image
              key={card.id}
              src={card.link}
              alt={card.name}
              width={100}
              height={100}
              objectFit="contain"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/collections");
  const collections: Collection[] = await res.json();

  return {
    props: {
      collections,
    },
    revalidate: 10,
  };
}

export default Home;
