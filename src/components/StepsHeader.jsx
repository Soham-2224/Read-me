import React from "react"

// import icons
import { ArrowLeft } from "lucide-react"

// import shad-cn components
import { Button } from "./ui/button"

// import nanostores
import { useStore } from "@nanostores/react"

// import stepStore
import { steps, prevStep } from "../store/stepsStore.js"

const StepsHeader = () => {
    const storeSteps = useStore(steps)

    const titles = ["About Me", "Github Stats", "Skills", "Socials"]

    return (
        <div className=" grid grid-cols-3 w-full">
            {storeSteps.value === 0 ? (
                <a href="/">
                    <Button
                        variant="ghost"
                        className=" w-fit"
                        onClick={prevStep}
                    >
                        <ArrowLeft className=" sm:mr-2 h-4 w-4" /> <span className=" max-sm:hidden">Back</span>
                    </Button>
                </a>
            ) : (
                <Button
                    variant="ghost"
                    className=" w-fit"
                    onClick={prevStep}
                >
                    <ArrowLeft className=" sm:mr-2 h-4 w-4" /> <span className=" max-sm:hidden">Back</span>
                </Button>
            )}
            <h1 className=" relative text-lg md:text-2xl font-bold text-primary_black text-center before:w-1/4 md:before:w-1/6 before:h-1 before:bg-label_gray before:absolute before:bottom-2 md:before:bottom-0 before:left-1/2 before:-translate-x-1/2">
                {titles[storeSteps.value]}
            </h1>
        </div>
    )
}

export default StepsHeader
