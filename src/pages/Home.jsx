import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="space-y-20">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;
