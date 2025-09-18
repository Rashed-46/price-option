import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBAR/Navbar";
import PricingOption from "./Components/PricingOption/PricingOption";
import Rechart from "./Components/ReChart/Rechart";

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
        <Suspense
          fallback={
            <span className="loading loading-spinner text-warning"></span>
          }
        >
          <PricingOption pricings={pricings}></PricingOption>
        </Suspense>
        <Rechart></Rechart>
      </main>
    </>
  );
}

export default App;
