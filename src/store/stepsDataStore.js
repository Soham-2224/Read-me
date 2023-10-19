import { atom } from "nanostores"

const initialValue = {
    aboutMe: {
        title: "",
        subtitle: "",
        desc: ""
    },
    stats: {
        colorTheme: "dark",
        cardBorder: true,
        privateCommits: false,
        lifetimeCommits: true,
    },
    skills: [],
    socials: {
        "github": "",
        "medium": "",
        "dribbble": "",
        "facebook": "",
        "stackoverflow": "",
        "codepen": "",
        "devto": "",
        "hackerrank": "",
        "twitter": "",
        "youtube": "",
        "behance": "",
        "hackerearth": "",
        "leetcode": "",
        "codeforces": "",
        "codesandbox": ""
    }
}

const stepsData = atom(initialValue)

const addAboutData = function addAboutData(data) {
    stepsData.set({...stepsData.get(), aboutMe: data})
}

const addStatsData = function addStatsData(data) {
    stepsData.set({...stepsData.get(), stats: data})
}

const addSkillsData = function addSkillsData(data) {
    stepsData.set({...stepsData.get(), skills: data})
}

export { stepsData, addAboutData, addStatsData, addSkillsData }
