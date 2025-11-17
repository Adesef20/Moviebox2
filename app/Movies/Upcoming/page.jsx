import MovieSection from "../../components/MovieSection";


export default function UpcomingMovies() {
  return (
    <main className="min-h-screen p-10 text-white bg-black">
      <MovieSection title="Upcoming Movies" endpoint="upcoming/movie/week" />
    </main>
  );
}
