export default function Input (){
    return (
        <div>
            <form className='py-8 mx-auto w-[90vw] max-w-5xl'>
                <div className='flex justify-between'>
                <input className=' w-1/2 mr-4 p-2 border border-slate-400 rounded-lg placeholder:text-slate-600'type="text" placeholder="What do you want to meme?"/> 
                <input className='w-1/2 ml-4 p-2 border border-slate-400 rounded-lg placeholder:text-slate-600' type="text" placeholder="meme some more"/>     
                </div>    
                <button className='w-full my-6 bg-slate-600 py-4 text-white font-bold rounded-lg bg-gradient-to-r from-fuchsia-900 to-purple-600' type="submit"> Get a new meme image</button>
            </form>
        </div>
    )
}