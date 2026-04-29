import Navbar from "./components/section/Navbar";
import Hero from "./components/section/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
