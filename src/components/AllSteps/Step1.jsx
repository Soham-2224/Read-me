import React, {useState} from "react"

// import icons
import { ArrowRight } from "lucide-react"

// import shad-cn components
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

// import nanostores
import { useStore } from "@nanostores/react"

// import stepStore
import { nextStep } from "@/store/stepsStore"
import { addAboutData, stepsData } from "@/store/stepsDataStore"

// import assets
import aboutMeTemplate from "../../assets/images/about-me-template.png"

  const autofillContent = `🔭 I'm currently working on 
👯 I'm looking to collaborate on
🤝 I'm looking for help with
🌱 I'm currently learning
💬 Ask me about
⚡ Fun fact`;

const Step1 = () => {

    const storeData = useStore(stepsData)

    const [fields, setFields] = useState({
        title: storeData?.aboutMe?.title,
        subtitle: storeData?.aboutMe?.subtitle ,
        desc: storeData?.aboutMe?.desc
    })

    const handleKeyDown = (e) => {
        if (fields.desc.length) return; 
        if (e.key === "Enter") {
            // Replace this with your desired autofill content
            const cursorPosition = e.target.selectionStart
            const newText = fields.desc.slice(0, cursorPosition) + autofillContent + fields.desc.slice(cursorPosition)
            setFields((prev) => ({ ...prev, desc: newText }))

            // Prevent the default enter key behavior 
            e.preventDefault()
        }
    }


    return (
        <section className="grid grid-cols-2 gap-20 2xl:gap-40 pb-24 md:pb-20 w-full">
            <div className=" flex flex-col gap-4 w-full">
                <div className="grid w-full max-w-full items-center gap-1.5">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        value={fields.title}
                        onChange={(e) => setFields((prev) => ({ ...prev, title: e.target.value }))}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Hi 👋, I'm soham"
                    />
                </div>
                <div className="grid w-full max-w-full items-center gap-1.5">
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input
                        value={fields.subtitle}
                        onChange={(e) => setFields((prev) => ({ ...prev, subtitle: e.target.value }))}
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        placeholder="A passionate frontend developer from India."
                    />
                </div>
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">
                        Describe yourself{" "}
                        <span className=" text-[10px] text-label_gray">(Press enter key to autofill)</span>
                    </Label>
                    <Textarea
                        value={fields?.desc}
                        onChange={(e) => setFields((prev) => ({ ...prev, desc: e.target.value }))}
                        onKeyDown={handleKeyDown}
                        className=" min-h-[200px] resize-none"
                        placeholder={autofillContent}
                        id="message"
                    />
                </div>

                <Button
                    onClick={() => {
                        addAboutData(fields)
                        nextStep()
                    }}
                    className=" w-1/3"
                >
                    Continue
                    <ArrowRight className=" ml-2 h-4 w-4" />
                </Button>
            </div>
            <div className=" flex flex-col justify-center">
                <img
                    // class=" w-full cursor-pointer "
                    src={aboutMeTemplate.src}
                    alt="about me template"
                />
                <h2 className=" text-base font-medium text-label_gray mt-4 text-center">
                    This is how about section looks on profile
                </h2>
            </div>
        </section>
    )
}

export default Step1
