import React, { useState, useEffect, } from "react"

const colors = ["#2D3135", "#17C63A", "#13451D", "#186B29"]

const ImageBanner = () => {
    const [randomBlocks, setRandomBlocks] = useState([])

    function generateRandomBlocks() {
        const numberOfBlocksToRender = window.innerWidth >= 1500 ? 600 : window.innerWidth <= 1280 ? 300 :  400
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
        <div className="flex gap-1 fixed -bottom-12 -left-10 -rotate-[12deg] opacity-90 flex-wrap w-[120%] max-sm:hidden ">
            {randomBlocks.map((block, index) => (
                <div key={`${block}_${index}`} className="w-7 h-7 rounded block relative hover:scale-50 hover:transition-transform duration-700 opacity-90" style={{background: block}}></div>
            ))}
        </div>
    )
}

export default ImageBanner
