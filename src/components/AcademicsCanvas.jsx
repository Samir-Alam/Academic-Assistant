import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import {DNA} from 'react-loader-spinner'

const NewsCard = ({ index, title, description, url, urlToImage }) => {

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-darkGrey p-5 max-xs:p-4 rounded-2xl sm:w-[360px] w-full max-xs:w-[90vw] hover:shadow-card"
      >
        <Link to={`/${url}`}>
          <div className="relative w-full h-[230px]">
            <img
              src={urlToImage}
              alt="News"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};

const AcademicsCanvas = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c9d510d924f64acdad19201ac9046255`

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const res = await axios.get(url);
                setArticles(res.data.articles);
                // console.log(res.data.articles);
            }catch (err) {
                console.log(err);
                setError(err);
            }finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
    <div className="bg-darkPrimary min-h-screen">
        <div className="ml-20 max-xs:ml-5 pt-20 max-xs:mt-10 flex flex-wrap gap-7 max-xs:gap-4">
        {isLoading && 
            <div className="z-10 absolute top-[50%] left-[50%]">
                <DNA
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                />
            </div>
        }
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        {articles.length > 0 && articles.map((article, index) => (
            <NewsCard key={`news-${index}`} index={index} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage}/>
        ))}
        </div>
    </div>
  )
}

export default AcademicsCanvas