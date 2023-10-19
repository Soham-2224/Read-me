import React, { useState } from "react"

// import icons
import { ArrowRight } from "lucide-react"

// import shad-cn components
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

// import nanostores
import { useStore } from "@nanostores/react"

// import stepStore
import { nextStep } from "@/store/stepsStore"
import { addAboutData, stepsData } from "@/store/stepsDataStore"

const placeholders = {
    github: "github username",
    medium: "medium username (with @)",
    dribbble: "dribble username",
    facebook: "facebook username",
    stackoverflow: "stackoverflow user ID",
    codepen: "Email",
    devto: "dev.to username",
    hackerrank: "hackerrank username",
    twitter: "Email",
    youtube: "youtube channel name",
    behance: "behance username",
    hackerearth: "Email",
    leetcode: "leetcode username",
    codeforces: "codeforces username",
    codesandbox: "Email"
}

const Step4 = () => {
    const storeData = useStore(stepsData)

    const [fields, setFields] = useState(storeData.socials)

    // console.log(fields)

    return (
        <section className="pb-24 md:pb-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 justify-between">
                {Object.keys(fields).map((field) => (
                    <div
                        key={field}
                        className="flex items-center gap-4"
                    >
                        <img
                            src={`src/assets/socials/${field}.png`}
                            alt={field}
                            className=" w-6 h-6"
                        />
                        <Input
                            value={fields[field]}
                            onChange={(e) => setFields((prev) => ({ ...prev, [field]: e.target.value?.trim() }))}
                            type="text"
                            name={`socials_${field}`}
                            placeholder={placeholders[field]}
                        />
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center mt-8">
                <Button
                    onClick={() => {
                        addAboutData(fields)
                        nextStep()
                    }}
                    className=" w-1/6"
                >
                    Continue
                    <ArrowRight className=" ml-2 h-4 w-4" />
                </Button>
            </div>
        </section>
    )
}

export default Step4
