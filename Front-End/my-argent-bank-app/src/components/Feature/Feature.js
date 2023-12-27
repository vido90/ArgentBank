import './Feature.scss';

function Feature({ image, alt, title, text }) {
    return (
        <div className='feature__item'>
            <img src={image} alt={alt} className='feature__icon'/>
            <h3 className='feature__item-title'>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Feature