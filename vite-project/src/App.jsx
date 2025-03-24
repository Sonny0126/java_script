import Child from './Child'
import { ClassComp, FunctionComp, ArrowFunctionComp } from './Component'
function Hello() {
  return <h1>Hello</h1>
}

function App(){
  return (
    <>
    <Hello />
    <h2>World</h2>
    <Child />
    <ClassComp />
    <FunctionComp />
    <ArrowFunctionComp />
    </>
  )
}

export default App