
function Shownum(props){
    return(
    <div>
      <button type="button" onClick={props.change}>Numchange</button>  
      <h2>{props.numcount}</h2>
    </div>
    )
}

export default Shownum