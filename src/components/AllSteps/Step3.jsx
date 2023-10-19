import React, { useState } from "react"

// import icons
import { ArrowRight } from "lucide-react"

// import shad-cn components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// import nanostores
import { useStore } from "@nanostores/react"

// import stepStore
import { nextStep } from "@/store/stepsStore"
import { addSkillsData, stepsData } from "@/store/stepsDataStore"

const images = [
    {
        category: "Programming Languages",
        arr: [
            "lang_c.svg",
            "lang_csharp.svg",
            "lang_clojure.svg",
            "lang_erlang.svg",
            "lang_java.svg",
            "lang_javascript.svg"
        ]
    },
    {
        category: "Frontend Development.svg",
        arr: ["lang_dart.svg", "lang_kotlin.svg"]
    }
]

const Step3 = () => {
    const { skills } = useStore(stepsData)

    const [imagesToRender, setImagesToRender] = useState(images)
    const [selectedLang, setSelectedLang] = useState(skills)

    const handleSearch = (e) => {
        if (e.target.value === "") {
            setImagesToRender(images);
            return
        }

        const tempArr = [...images]

        const filtered = tempArr.map((obj) => {
            const matchingLangs = obj?.arr.filter((lang) => lang.includes(e.target.value?.trim()))

            return {
                category: obj.category,
                arr: matchingLangs
            }
        })

        setImagesToRender(filtered)
    }

    const handleLangClick = (imgName) => {
        const currentImgIndex = selectedLang.indexOf(imgName)
        const tempArr = [...selectedLang]

        if (currentImgIndex === -1) {
            tempArr.push(imgName)
        } else {
            tempArr.splice(currentImgIndex, 1)
        }
        setSelectedLang(tempArr)
    }


    const renderImages = (obj) => {
      return obj.arr.map((lang) => (
            <div
                onClick={() => handleLangClick(lang)}
                key={`${obj.category}_${lang}`}
                className={`w-full h-full p-4 md:p-8 lg:p-10 rounded-md cursor-pointer  hover:ring-1 hover:ring-[#17C63A]/50 ${
                    selectedLang.includes(lang) ? "bg-[#17C63A]/10" : "bg-black/5"
                }`}
            >
                <img
                    src={`src/assets/languages_logo/${lang}`}
                    alt={lang}
                />
            </div>
        ))
    }

    return (
        <section className=" sectionPadding pb-24 md:pb-20 w-full">
            <div className="flex w-full mx-auto max-w-lg items-center space-x-2">
                <Input
                    onChange={handleSearch}
                    type="technology"
                    placeholder="Type a technology name or search..."
                />
                <Button
                    onClick={() => {
                        addSkillsData(selectedLang)
                        nextStep()
                    }}
                    className=" w-1/2"
                >
                    Continue
                    <ArrowRight className=" ml-2 h-4 w-4" />
                </Button>
            </div>

            <div className="w-full mt-10">
                {imagesToRender.map((obj, idx) => (
                    <div
                        key={obj.category || idx}
                        className=" mt-8"
                    >
                        {obj.arr.length ? <h1>{obj.category}</h1> : null}
                        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-4">
                            {renderImages(obj)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Step3
