import Counter from './Counter/Counter'
import GreenCounterHOC from './Counter/GreenCounter'
import RedCounterHOC from './Counter/RedCounter'
import TestComponent from './Counter/TestComponent'

const RedCounterComponent = RedCounterHOC(TestComponent)
const GreenCounterComponent = GreenCounterHOC(Counter)

const Hoc = () => {
    return (
        <div>
            <RedCounterComponent title="Red Counter" className="text-red-700 font-bold"/>
            <GreenCounterComponent title="Green Counter" className="text-green-700 font-bold"/>
        </div>
    )
}

export default Hoc
