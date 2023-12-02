import "./AppClass";
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const imgData = imageData()
  return(
    <div>
      <h1>Kalvium gallary</h1>
      <div>
        {
        imgData.map((image,index)=>{
          return(
            <>
             <div key={index}>
              <img src={image.img} alt="" />
            </div>
            </>
           
          )
        })
        }
      </div>
    </div>
  )
}

export default App;