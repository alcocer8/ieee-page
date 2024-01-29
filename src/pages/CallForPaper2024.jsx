import { Link } from "react-router-dom";

function CallForPaper2024() {
    return (
        <>
            {/* Hero azul */}
            <div className="font-mono bg-blue-600">
                <div className="w-full h-screen flex flex-col justify-center px-20">
                    <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-center">
                        2023 IEEE International Conference on Engineering Veracruz (IEEE
                        ICEV 2024)®
                    </h1>

                    <h2 className="my-5 text-white md:text-3xl sm:text-2xl text-4xl font-bold md:py-6 text-center">
                        Engineering Advances for the Benefit of Humanity Boca del Río,
                        Veracruz
                    </h2>

                    <div className="mx-auto w-fit flex flex-col md:flex-row gap-4">
                        <a
                            href="/assets/IEEE-2024.pdf"
                            className="text-xl uppercase bg-black  text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-black transition-all duration-500 "
                        >
                            View Full Document
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* Hero azul */}
        </>
    )
}

export default CallForPaper2024