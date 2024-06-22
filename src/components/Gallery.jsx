import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { gloabalContext } from "../utils";
const apiKey = import.meta.env.VITE_API_KEY;
const url = `https://api.unsplash.com/search/photos?client_id=${apiKey}`;
const Gallery = () => {
  const { searchTerm } = gloabalContext();

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4 className="">Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4 className="">There was an error...</h4>
      </section>
    );
  }
  const results = response.data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4 className="">No Image Found</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        return (
          <img
            key={item.id}
            className="img"
            src={item.urls.regular}
            alt={item.alt_description}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
