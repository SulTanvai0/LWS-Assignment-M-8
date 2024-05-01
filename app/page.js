import HeroSection from "@/components/home/HeroSection";
import RecipeList from "@/components/home/RecipeList";
import SideBar from "@/components/home/SideBar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <SideBar />
          <RecipeList />
        </div>
      </section>
    </>
  );
}
