// Destructuring features

function ProfileCard({title,handle,image}){
    //const title = props.title;
    //const handle = props.handle;
    console.log(title,handle,image);
    return (<div class='karta'>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-1by1">
                        <img src={image} alt="pda logo"/>
                    </figure>
            </div>
            
<div className="card-content">
    <div className="media-content">
        <p className='title is 4'>{title}</p>
        <p className='subtitle is 6'>{title}</p>
        <img src={image} alt="pda logo"/>
    </div>
</div>
            </div>
            </div>);    
}

export default ProfileCard;