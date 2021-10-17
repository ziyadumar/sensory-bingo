import './Style.scss'

const BingoTile = ({ id, children, onToggle, isSet }: IBingoTile) => {
    return (
        <div onClick={onToggle} className={`tile ${isSet ? "tile--set" : ""}`}>
            <div className={`${isSet ? "text--set" : ""}`}>{children}</div>
        </div>
    )
}

export default BingoTile

interface IBingoTile {
    id: string;
    children: any;
    onToggle: any;
    isSet: boolean;
}
