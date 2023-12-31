import React, { useState, useEffect, } from "react"

const colors = ["#2D3135", "#17C63A", "#13451D", "#186B29"]

const ImageBanner = () => {
    const [randomBlocks, setRandomBlocks] = useState([])

    function generateRandomBlocks() {
        const numberOfBlocksToRender = window.innerWidth >= 2500 ? 600 : window.innerWidth >= 1800 ? 400 : 300 
        const newRandomBlocks = Array.from({ length: numberOfBlocksToRender }, () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            return randomColor
        })

        setRandomBlocks(newRandomBlocks)
    }

    useEffect(() => {
        generateRandomBlocks()

        window.addEventListener("resize", () => generateRandomBlocks())

        return () => {
            window.removeEventListener("resize", () => generateRandomBlocks())
        }
    }, [])


    return (
        <div className="flex gap-1 fixed -bottom-2 lg:-bottom-16 -right-10 2xl:right-8 rotate-[12deg] opacity-90 flex-wrap w-[1600px] 2xl:w-[120%] max-sm:hidden z-0">
            {randomBlocks.map((block, index) => (
                <div key={`${block}_${index}`} className="w-7 lg:w-8 2xl:w-9 2xl:h-9 lg:h-8 h-7 rounded block relative hover:scale-50 hover:transition-transform duration-700 opacity-90" style={{background: block}}></div>
            ))}
        </div>
    )
}

export default ImageBanner
