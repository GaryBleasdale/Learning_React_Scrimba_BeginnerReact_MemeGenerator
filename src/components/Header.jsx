import trollFace from '../assets/Trollface_non-free.png.webp'

export default function Input (){
    return (
    <nav className="bg-gradient-to-r from-fuchsia-900 to-purple-600">
        <div className="flex justify-between p-8  text-white items-center max-w-6xl mx-auto">
            <div className="flex flex-row items-center w-64 justify-between ">
              <img src={trollFace} className="w-14"/>
              <h3 className='text-2xl font-bold tracking-tight	'>Meme Generator</h3>
            </div>
            <div>
              React Course - Project 3
            </div>
        </div>
    </nav>
    )
}