import React from "react"

// import nanostores
import { useStore } from "@nanostores/react"

// import stepStore
import { steps } from "../../store/stepsStore.js"

// import components
import Step1 from "./Step1.jsx"
import Step2 from "./Step2.jsx"
import Step3 from "./Step3.jsx"
import Step4 from "./Step4.jsx"

const views = {
    0: Step1,
    1: Step2,
    2: Step3,
    3: Step4
}

const AllSteps = () => {
    const storeSteps = useStore(steps)

    const CurrentStep = views[storeSteps.value]

    return (
        <div className=" mt-10 w-full">
            <CurrentStep />
        </div>
    )
}

export default AllSteps
