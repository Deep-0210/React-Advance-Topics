import { textStat } from '../Store'
import { useRecoilState } from 'recoil'

const Input = () => {

    const [text, setText] = useRecoilState(textStat)

    return (
        <>
            <div className='mt-10 w-max mx-auto'>
                <input type="text" name="charLength" id="charLength" className='border border-black h-8 px-2 rounded-lg' placeholder='value' value={text} onChange={((e) => setText(e.target.value))} />

                <div className='mt-5'>
                    <span className='font-bold text-xl'>Your text:</span>
                </div>
            </div>

            <div className='max-w-[500px] overflow-y-auto mx-auto mt-5'>
                {text}
            </div>
        </>
    )
}

export default Input
