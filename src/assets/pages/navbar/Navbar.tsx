import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="grid grid-cols-12">

        <div className="col-span-8 bg-indigo-950 text-white flex justify-start px-6">
            <Link to='/home' className='hover:text-gray-500 font-bold'> Blog Pessoal</Link>
        </div>

        <div className="col-span-1.5 bg-indigo-950 text-white flex justify-around hover:bg-slate-500">
            Temas
            </div>

        <div className="col-span-1.5 bg-indigo-950 text-white flex justify-around hover:bg-slate-500">
            Posts
            </div>

        <div className="col-span-1.5 bg-indigo-950 text-white flex justify-around hover:bg-slate-500">
            <p>Perfil</p>
            </div>

        <div className="col-span-1.5 bg-indigo-950 text-white flex justify-around hover:bg-slate-500">
            <p>Sair</p>
            </div>

    
      
    </div>
  )
}

export default Navbar
