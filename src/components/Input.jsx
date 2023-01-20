import memeData from '../assets/memeData'
import {useState} from 'react'


export default function Input (){
    
    const [imgUrl, setImgUrl] = useState("")

    function imageGetter(){
        let randomNum = Math.floor(Math.random() * 99)
        let randomImg =  memeData.data.memes[randomNum].url 
        setImgUrl(randomImg)
     } 



    return (
        <div>
            <div className='py-8 mx-auto w-[90vw] max-w-5xl'>
                <div className='flex justify-between'>
                    <input className=' w-1/2 mr-4 p-2 border border-slate-400 rounded-lg placeholder:text-slate-600'type="text" placeholder="Top Text"/> 
                    <input className='w-1/2 ml-4 p-2 border border-slate-400 rounded-lg placeholder:text-slate-600' type="text" placeholder="Bottom text"/>     
                </div>    
                <button className='w-full my-6 bg-slate-600 py-4 text-white font-bold rounded-lg bg-gradient-to-r from-fuchsia-900 to-purple-600' type="button" onClick={imageGetter}> Get a new meme image</button>
            </div>
            <div >
                <img src={imgUrl} className='m-auto'/>
            </div>
        </div>
    )
}