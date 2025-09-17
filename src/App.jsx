import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBAR/Navbar";
import PricingOption from "./Components/PricingOption/PricingOption";

function App() {
  const [pricings, setPricing] = useState([]);
  useEffect(() => {
    fetch("priceData.json")
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense>
          <PricingOption pricings={pricings}></PricingOption>
        </Suspense>
      </main>
    </>
  );
}

export default App;
