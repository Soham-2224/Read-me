import { atom } from "nanostores"

const initialValue = { value: 0 }

const steps = atom(initialValue)

function nextStep() {
    steps.set({ value: steps.get().value + 1 })
}

function prevStep() {
    steps.set({ value: steps.get().value - 1 })
}

export { steps, nextStep, prevStep }
