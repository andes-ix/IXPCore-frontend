import { redirect } from "src/navigation";

const Home = () => {
  //If user is logged, redirect to dashboard, else redirect to login

  redirect(`/login`);
};

export default Home;
