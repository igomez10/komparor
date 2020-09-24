
import Button from "../components/button"
export default function Card({ profile }) {
  return (
    <div className="main">
      <h1>{profile.id}</h1>
      <img src={profile.photo_url}></img>
      <Button id={profile.id}></Button>
      <style jsx>{`
          .main {
            font: 15px Helvetica, Arial;
            border: 1px solid #eee;
            padding: 0 10px;
          }
          h1 {
            font-size: 16px;
            font-weight: bold;
            margin: 10px 0;
          }
        `}</style>
    </div>
  )
}