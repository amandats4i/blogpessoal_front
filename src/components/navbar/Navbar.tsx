import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {
    const navigate = useNavigate();

    const {handleLogout} = useContext(AuthContext)

    function logout(){
        
        handleLogout()
        alert("O usuario foi deslogado com sucesso :D")
        navigate('/login')
    }

 let navbarComponent
  
  return (
    <div className="grid grid-cols-12 bg-rose-500">

        <div className="col-span-5 text-white flex justify-start px-6 font-bold text-lg ">
            <Link to='/home' className='hover:text-rose-300'> 
            Blog Pessoal</Link>
        </div>

        <div className="col-span-2  text-white flex justify-around hover:bg-rose-200">
        <Link to='/temas' className='hover:text-rose-500 hover:underline'> 
            Temas</Link>
            
            </div>

        <div className="col-span-2  text-white flex justify-around hover:bg-rose-200">
        <Link to='/cadastrarTema' className='hover:text-rose-500 hover:underline'> 
            Cadastrar Tema</Link>
            </div>

         <div className="col-span-2  text-white flex justify-around hover:bg-rose-200 ">
         <Link to='/postagens' className='hover:underline hover:text-rose-500'>Postagens</Link>
            </div>

            {/* <div className="col-span-2  text-white flex justify-around hover:bg-rose-200 hover:text-rose-300">
        <Link to='/perfil' className='hover:underline'>Perfil</Link>
            </div> */}
       
         <div className="col-span-1.5  text-white flex justify-around hover:bg-rose-200 hover: underline hover:text-rose-500">
            <Link to ='' onClick = {logout} > 
            Sair </Link>
        </div>
      
    </div>
  )
}



export default Navbar
