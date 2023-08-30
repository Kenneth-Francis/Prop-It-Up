

const PersonCard = (props) => {

  const {firstName, lastName, age, hairColor} = props;

  return (
    <div className="card shadow mb-4 p-4 mx-auto" style={{width: "24rem"}}>
      <div className="card-header">
        <h1 className="text-start">{lastName}, {firstName}</h1>
      </div>
      <div class="card-body d-flex flex-column align-items-start">
        <h5>Age: {age}</h5>
        <h5>Hair Color:  <span className={`${hairColor}`}>{hairColor}</span></h5> 
      </div>
    </div>
  )
}

export default PersonCard;