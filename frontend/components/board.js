import Card from "../components/card"
export default function Board({ users }) {
    return (

        <div className="main">
            <Card profile={users[0]}></Card>
            <Card profile={users[1]}></Card>
            <style jsx>{`
          .main {
            font: 15px Helvetica, Arial;
            border: 1px solid #eee;
            padding: 1rem;
            display: flex;
            margin: 1rem;
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