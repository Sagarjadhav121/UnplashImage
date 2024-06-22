import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <section className="">
      <ThemeToggle />
      <h2 className="title">Unsplash Images Starter</h2>
      <SearchForm />
      <Gallery />
    </section>
  );
};
export default App;
