import React, { useState } from "react"

// import icons
import { ArrowRight } from "lucide-react"

// import shad-cn components
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { CustomSelect } from "../ui/CustomSelect"

// import nanostores
import { useStore } from "@nanostores/react"

// import stepStore
import { nextStep } from "@/store/stepsStore"
import { addAboutData, addStatsData, stepsData } from "@/store/stepsDataStore"

// import constants
import { selectOptions } from "@/lib/constants"

const Step2 = () => {
    const queryParams = new URLSearchParams(window.location.search)
    const username = queryParams.get("username")
    const {stats} = useStore(stepsData)

    const [fields, setFields] = useState({
        colorTheme: stats?.colorTheme,
        cardBorder: stats?.cardBorder,
        privateCommits: stats?.privateCommits,
        lifetimeCommits: stats?.lifetimeCommits
    })

    const onSelectChange = (value) => {
        setFields((prev) => ({ ...prev, colorTheme: value }))
    }

    return (
        <section className="grid grid-cols-2 gap-20 2xl:gap-40 pb-24 md:pb-20 w-full">
            <div className=" sectionPadding | flex flex-col gap-8">
                <div>
                    <Label className=" text-lg font-medium text-label_gray">Card Theme</Label>
                    <CustomSelect
                        onChange={onSelectChange}
                        placeholder="Select themes"
                        options={selectOptions}
                        className="w-full mt-1"
                        selectLabel="Themes"
                    />
                </div>

                <div>
                    <h2 className=" text-lg font-medium text-label_gray">Do you want to show card borders?</h2>
                    <div className="flex items-center space-x-2 mt-2">
                        <Label htmlFor="card-border">Card Border</Label>
                        <Switch
                            checked={fields.cardBorder}
                            onCheckedChange={(e) => setFields((prev) => ({ ...prev, cardBorder: e }))}
                            id="card-border"
                        />
                    </div>
                </div>

                <div>
                    <h2 className=" text-lg font-medium text-label_gray">Do you want to include private commits?</h2>
                    <div className="flex items-center space-x-2 mt-2">
                        <Label htmlFor="private-commits">Private Commits</Label>
                        <Switch
                            checked={fields.privateCommits}
                            onCheckedChange={(e) => setFields((prev) => ({ ...prev, privateCommits: e }))}
                            id="private-commits"
                        />
                    </div>
                </div>

                <div>
                    <h2 className=" text-lg font-medium text-label_gray">Do you want to include lifetime commits?</h2>
                    <div className="flex items-center space-x-2 mt-2">
                        <Label htmlFor="lifetime-commits">Lifetime Commits</Label>
                        <Switch
                            checked={fields.lifetimeCommits}
                            onCheckedChange={(e) => setFields((prev) => ({ ...prev, lifetimeCommits: e }))}
                            id="lifetime-commits"
                        />
                    </div>
                </div>

                {/* button */}
                <Button
                    onClick={() => {
                        addStatsData(fields)
                        nextStep()
                    }}
                    className=" w-1/2"
                >
                    Continue
                    <ArrowRight className=" ml-2 h-4 w-4" />
                </Button>
            </div>
            <div className=" sectionPadding | flex flex-col gap-10">
                <img
                    className=" pointer-events-none select-none"
                    src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=${fields?.colorTheme}&hide_border=${!fields.cardBorder}&include_all_commits=${
                        fields.lifetimeCommits
                    }&count_private=${fields.privateCommits}`}
                    alt=""
                />
                <img
                    className=" pointer-events-none select-none"
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${fields?.colorTheme}&hide_border=${!fields.cardBorder}`}
                    alt=""
                />
                <img
                    className=" pointer-events-none select-none"
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${fields?.colorTheme}&hide_border=${!fields.cardBorder}&include_all_commits=${
                        fields.lifetimeCommits
                    }&count_private=${fields.privateCommits}&layout=compact`}
                    alt=""
                />
            </div>
        </section>
    )
}

export default Step2
