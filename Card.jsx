import profilePic from './assets/images.jpeg'
function Card()
{
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Pradee</h2>
            <p className='card-text'>I'm a Full Stack Developer</p>
        </div>
    );
}

export default Card