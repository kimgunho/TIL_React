import { useParams } from "react-router-dom";


const Coin = () => {
    const {id} = useParams<{id : string}>();
    return <div>coin {id}</div>
}

export default Coin;