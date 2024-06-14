import { FiGithub } from "react-icons/fi";
import { Sidebar } from "./Sidebar";

export const Navigation = () => {
	return (
		<nav className="flex items-center px-5 py-5 justify-between border-b-2 border-zinc-400">
			<div className="flex gap-3 items-center">
				<Sidebar />
				Animation Sidebar
			</div>
			<a
				className="flex items-center gap-2 px-4 py-2 text-orange-400 bg-orange-700/20 rounded-xl hover:bg-orange-600/20 "
				href=""
			>
				<FiGithub className="text-xl" />
				Source Code
			</a>
		</nav>
	);
};

/* 

<nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800">
			<div className="flex items-center gap-3">
				<Sidebar />
				<p>Animated Sidebar</p>
			</div>
			<a
				className="flex items-center gap-2 px-4 py-2 text-orange-400 bg-orange-700/20 rounded-xl hover:bg-orange-600/20"
				href="https://www.freecodecamp.org/news/create-a-fully-animated-sidebar/"
			>
				<FiGithub className="text-lg" />
				Source Code
			</a>
		</nav>
	);


*/
