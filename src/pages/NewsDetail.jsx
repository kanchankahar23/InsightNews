import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const NewsDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return <p className="text-center mt-10 text-red-500 font-semibold">Article not found</p>;
    }

    return (
        <>
            <Navbar  />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 text-red-600 font-semibold hover:underline"
                >
                    ← Back
                </button>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{state.title}</h1>
                {state.description && (
                    <p className="mt-4 text-lg md:text-xl text-gray-700">{state.description}</p>
                )}

                {state.publishedAt && (
                    <p className="mt-2 text-sm text-gray-500">
                        Updated – {new Date(state.publishedAt).toLocaleString()} – {state.source?.name || "Unknown"}
                    </p>
                )}

           
                {state.author && (
                    <div className="flex items-center mt-4">
                        <img
                            src={state.authorImage || "https://imgs.search.brave.com/48CqzWrkAptwpz4tzzC07zVPULeuOP_plWPh5x-Mx1w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzI4LzEwLzQz/LzM2MF9GXzUyODEw/NDMzOF9UdkxPVmha/SVlxd0hmdnA4VXZ4/OVNHaHl6aFd2TDFK/WS5qcGc"}
                            alt={state.author}
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <span className="text-gray-700 font-semibold">{state.author}</span>
                    </div>
                )}


                <img
                    src={state.urlToImage || "https://imgs.search.brave.com/kp_nagqx8m4kFH7Rmx76E3nI-9rl0XxOXsEAUah4Vqo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NTM1NTI3NS9waG90/by9icmVha2luZy1u/ZXdzLW1hbGUtYW5j/aG9yLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1DeTV5WjU4/TlUyelpoeVc5ejVB/RkZYd0p5THdqeUw2/OUtyeGsyWnVwSmxV/PQ"}
                    alt={state.title || "News Image"}
                    className="w-full mt-6 rounded-lg object-cover shadow-md h-96"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://imgs.search.brave.com/kp_nagqx8m4kFH7Rmx76E3nI-9rl0XxOXsEAUah4Vqo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NTM1NTI3NS9waG90/by9icmVha2luZy1u/ZXdzLW1hbGUtYW5j/aG9yLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1DeTV5WjU4/TlUyelpoeVc5ejVB/RkZYd0p5THdqeUw2/OUtyeGsyWnVwSmxV/PQ";
                    }}
                />
                <p className="text-gray-700 mt-6 leading-relaxed text-lg">
                    {state.content || "No content available."}
                </p>
                {state.url && (
                    <a
                        href={state.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
                    >
                        Read original article →
                    </a>
                )}
            </div>
        </>
    );
};

export default NewsDetail;
