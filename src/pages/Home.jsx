import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Popular from "../components/Popular";
import Recommended from "../components/Recommended";

const Home = () => {
    return (
        <div className="space-y-20">
            <Navbar />
            <Hero />
            <Popular />
            <Recommended />
            <Footer />
        </div>
    );
};

export default Home;
