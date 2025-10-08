export const Home = () => {
 return (
  <section className="container w-full flex flex-col items-center h-screen py-72">
   <h1 className="text-4xl font-bold">Home</h1>
   <p>
    It's a home page. You need to go to{" "}
    <a
     className="text-primary"
     href="/profile"
    >
     Stripe profile
    </a>
   </p>
  </section>
 );
};
