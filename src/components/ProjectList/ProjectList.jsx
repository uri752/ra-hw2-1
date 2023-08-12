export const ProjectList = (props) => {
    const { items } = props;    
    const listData = items.map( item => <div class='item'><img src={item.img}/></div> );
       
    return (
        <div className='items'> 
            {listData}
        </div>
    );
}