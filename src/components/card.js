export default function Card(props) {
  const image = props.image;
  return (
    <div className="card">
      {image && <img src={image} alt="card"/>}
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

