import './List-item.css';

function ListItem() {
    return(
        <>
            <li className='suggestion-item'>
                <div className='suggestion-item-btn'>
                    112
                </div>
                <div className='suggestion-item-card'>
                    <h2 className='suggestion-item-card-title'>Add tags for solutions</h2>
                    <p className='suggestion-item-card-description'>
                        Easier to search for solutions based on a specific stack.
                    </p>
                    <button className='suggestion-item-card-btn'>Enhancement</button>
                </div>
                <span className='suggestion-item-comment'>2</span>
            </li>

            <li className='suggestion-item'>
                <div className='suggestion-item-btn'>99</div>
                <div className='suggestion-item-card'>
                    <h2 className='suggestion-item-card-title'>Add a dark theme option</h2>
                    <p className='suggestion-item-card-description'>
                    It would help people with light sensitivities and who prefer dark mode.
                    </p>
                    <button className='suggestion-item-card-btn'>Feature</button>
                </div>
                <span className='suggestion-item-comment'>4</span>
            </li>

            <li className='suggestion-item'>
                <div className='suggestion-item-btn'>65</div>
                <div className='suggestion-item-card'>
                    <h2 className='suggestion-item-card-title'>Q&A within the challenge hubs</h2>
                    <p className='suggestion-item-card-description'>
                        Challenge-specific Q&A would make for easy reference.
                    </p>
                    <button className='suggestion-item-card-btn'>Feature</button>
                </div>
                <span className='suggestion-item-comment'>1</span>
            </li>  

            <li className='suggestion-item'>
                <div className='suggestion-item-btn'>51</div>
                <div className='suggestion-item-card'>
                    <h2 className='suggestion-item-card-title'>Allow image/video upload to feedback</h2>
                    <p className='suggestion-item-card-description'>
                        Images and screencasts can enhance comments on solutions.
                    </p>
                    <button className='suggestion-item-card-btn'>Enhancement</button>
                </div>
                <span className='suggestion-item-comment'>2</span>
            </li>    

            <li className='suggestion-item'>
                <div className='suggestion-item-btn'>42</div>
                <div className='suggestion-item-card'>
                    <h2 className='suggestion-item-card-title'>Ability to follow others</h2>
                    <p className='suggestion-item-card-description'>
                        Stay updated on comments and solutions other people post.
                    </p>
                    <button className='suggestion-item-card-btn'>Feature</button>
                </div>
                <span className='suggestion-item-comment'>3</span>
            </li>   

            {/* <li className='suggestion-item'>
                <div className='suggestion-item-btn'>3</div>
                <div className='suggestion-item-card'>
                    <h2 className='suggestion-item-card-title'>Preview images not loading</h2>
                    <p className='suggestion-item-card-description'>
                        Challenge preview images are missing when you apply a filter.
                    </p>
                    <button className='suggestion-item-card-btn'>Bug</button>
                </div>
                <span className='suggestion-item-comment'>0</span>
            </li>    */}
        </>
    )
}

export default ListItem