import { atom, selector } from 'recoil'

export const textStat = atom({
    key: "textStat",
    default: ''
})

export const charCountStat = selector<number>({
    key: "charCountStat",
    get: ({ get }) => {
        const text = get(textStat)
        return text?.length;
    }
})