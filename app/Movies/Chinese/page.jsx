import MovieSection from "../Components/MovieSection";


export default function ChineseMovies() {
  return (
    <main className="bg-black min-h-screen text-white p-10">
      <MovieSection title="Chinese Movies" endpoint="chinese/movie/week" />
    </main>
  );
}
