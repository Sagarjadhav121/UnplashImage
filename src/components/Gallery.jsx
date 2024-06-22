import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=jRbk11-Caq7WuC364xxH5bZ8EHf5RGGTTfW8WegYt38&query=cat";
const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
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
