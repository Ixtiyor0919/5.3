import './List.css';
import ListItem from './List-item/List-item';

function List() {
    return(
        <>
            <ul className='todo-list'>
                <ListItem />
            </ul>
        </>
    )
}

export default List