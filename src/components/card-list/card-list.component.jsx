import './card-list.css'

const CardList = ({monsters}) => (
        <div className='card-list'>
            {monsters.map((monster) => {
                const { name, email, id } = monster;
                return(
                <div className='card-container' key={id}>
                <img src="" alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>
                </div> 
            )}
            )}
        </div>
    );

export default CardList
