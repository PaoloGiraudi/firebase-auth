import React from "react";

const Home = ({ handleLogOut }) => {
  return (
    <section className="home">
      <h1>Welcome Stranger</h1>
      <button onClick={handleLogOut}>Log out</button>
    </section>
  );
};

export default Home;
