import Seo from "../components/SEO";

export default function Error404() {
  return (
    <>
      <Seo
        title="404 - Zimcrest Technologies"
        description="The page you tried accessing do not exist or has been removed. Return back to the homepage to see other pages"
      />
      <section className="flex flex-col items-center justify-center w-full min-h-screen gap-4 pt-24">
        <h1 className="text-5xl leading-tight sm:text-7xl">404</h1>
        <p className="text-lg">page not found!</p>
      </section>
    </>
  );
}
