
export const Toolbar = (props) => {
  return(
    <div className='categories'>
      {            
        props.filters.map( (element,index) => (            
        <div className={ element === props.selected ? 'selected' :''} key={index} onClick={() => props.onSelectFilter(element)}>{element}</div>
        ))          
      }
    </div>
  )    
}