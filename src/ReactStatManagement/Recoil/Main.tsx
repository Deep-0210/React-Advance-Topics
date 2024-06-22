import React from 'react'
import Input from './Input/Input'
import { RecoilRoot } from 'recoil'
import CharCount from './Input/CharCount'

const CharCountRecoil = () => {
    return (
        <div>
            <RecoilRoot>
                <Input />
                <CharCount />
            </RecoilRoot>
        </div>
    )
}

export default CharCountRecoil
