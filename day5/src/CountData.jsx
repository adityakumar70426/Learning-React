import { useEffect } from "react"

function CountData({ counter, data, display }) {

    useEffect(() => (
        console.log("Mounting Phase")
    ), [])

    useEffect(() => (
        console.log("Update Phase")
    ), [counter])

    useEffect(() => {
        return () => {
            console.log("Unmounting Phase")
        }
    }, [])
    return (
        <div>
            <h2>Count and data Component</h2>
            <h3>Counter : {counter}</h3>
            <h3>Data : {data}</h3>
        </div>
    )
}
export default CountData