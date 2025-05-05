import Hero from "./components/Hero";
import Story from "./components/Story";
import About from "./components/About";
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import Features from "./components/Features";

function App() {
	return (
		<main className="relative min-h-screen w-screen overflow-x-hidden">
			<NavBar />
			<Hero />
			<About />
			<Features />
			<Story />
			<Contact />
		</main>
	);
}

export default App;
