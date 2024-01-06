import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Popular from "../components/Popular";

const Home = () => {
    return (
        <div className="space-y-20">
            <Navbar />
            <Hero />
            <Popular />
            <Footer />
        </div>
    );
};

export default Home;
