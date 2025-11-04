import MovieSection from "../Components/MovieSection";


export default function UpcomingMovies() {
  return (
    <main className="bg-black min-h-screen text-white p-10">
      <MovieSection title="Upcoming Movies" endpoint="upcoming/movie/week" />
    </main>
  );
}
