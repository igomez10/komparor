
export default function Button({ id }) {
  return (
    <div className="main">
      <div className="button" >Here</div>
      <style jsx>{`
          .main {
            font: 15px Helvetica, Arial;
            border: 1px solid #eee;
            padding: 0 10px;
          }
          .button {
            background-color: rgb(34, 168, 80) ;
            margin: auto;
            width: 3rem;
            height: 1rem;
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