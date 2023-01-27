import { useState } from 'react'
import { useEffect } from 'react'


export default function Input() {

    const [imgUrl, setImgUrl] = useState("")
    const [textInputs,setText] = useState({
        "toptext":"",
        "bottomtext":""
    })
    const [clicked, setClickedStatus] = useState(0)
    
      function handleText(e){
        setText(
           {                ...textInputs,
               [e.target.name]:e.target.value
           }
        )        
      }
      
      function handleImg(){
        setClickedStatus(prevClicked => prevClicked + 1)
      }

      useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes', {
            method: 'GET'
          })
          .then(response => {
            return response.json();
          })
          .then(json => {
            let randomNum = Math.floor(Math.random() * 99)
            let randomImg = json.data.memes[randomNum].url
            setImgUrl(randomImg)
            console.log(randomImg)
            return json;
          })
      },[clicked])
      


    return (
        <div>
            <div className='py-8 mx-auto w-[90vw] max-w-5xl'>
                <div className='flex justify-between'>
                    <input className=' w-1/2 mr-4 p-2 border border-slate-400 rounded-lg placeholder:text-slate-600' type="text" placeholder="Top Text" id='toptext' onChange={handleText} name="toptext"/>
                    <input className='w-1/2 ml-4 p-2 border border-slate-400 rounded-lg placeholder:text-slate-600 ' type="text" placeholder="Bottom text" id='bottomtext' onChange={handleText} name="bottomtext"/>
                </div>
                <button className='w-full my-6 bg-slate-600 py-4 text-white font-bold rounded-lg bg-gradient-to-r from-fuchsia-900 to-purple-600' type="button" onClick={handleImg}> Get a new meme image</button>
            </div>
            <div className='mx-auto w-[90vw] max-w-5xl flex flex-col items-center relative'>
                <div className="absolute max-w-5xl  text-white text-6xl uppercase text-center">{textInputs.toptext}</div>
                <img className='m-auto mx-auto w-[90vw]' src={imgUrl}  /> 
                <div className="absolute bottom-5 max-w-5xl  text-white text-6xl uppercase text-center">{textInputs.bottomtext}</div>
            </div>
        </div>
    )
}