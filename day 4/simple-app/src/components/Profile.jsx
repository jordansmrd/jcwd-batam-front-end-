import "../css/style.css"

function Profile(props) {
   return (
    <div>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    </div>
   )

}

export default Profile

