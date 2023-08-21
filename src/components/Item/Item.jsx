import { Link } from "react-router-dom"
import './item.css'

const Item = ({ to, icon, title, selectedCatogry, setSelectedCatogry, name }) => {
    return (
        <Link to={to}>
            <div className='item'
                onClick={() => { setSelectedCatogry(name) }}
                style={{ color: selectedCatogry === name && '#2892b9' }}>
                {icon}
                <span> {title}</span>
            </div>
        </Link >
    )
}

export default Item