import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Tweets } from "@/utils/types";
import { getTweets } from "@/utils/getTweets";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [tweets, setTweets] = useState<Tweets[]>([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const fetchedTweets: Tweets[] = await getTweets();
        setTweets(fetchedTweets);
      } catch (error) {
        console.error("Hubo un error al obtener los productos: " + error);
      }
    };

    fetchTweets();
  }, []);
  return (
    <>
      {tweets.map((tweets) => (
        <div className="text-cyan-50" key={tweets.id}>
          <h1>{tweets.texto}</h1>
          <p> {tweets.images} </p>
        </div>
      ))}
    </>
  );
}
