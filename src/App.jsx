import React from "react";
import styles from "./styles";
import {
  Navbar,
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Testimonials,
  Stats,
  Hero,
  GetStarted,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/*Div to wrap our navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/*Navbar Component  */}
        <Navbar />
      </div>
    </div>

    {/* Hero Section*/}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/*Feature Hero Component */}
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/*Feature Stats,Business,Billing,CardDeal,Testimonials,Clients,CTA,Footer Component */}
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
