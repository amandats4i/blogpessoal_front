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
  
  return (
    <div className="grid grid-cols-12 bg-rose-500">

        <div className="col-span-5  text-white flex justify-start px-6 font-bold">
            <Link to='/home' className='hover:text-rose-300'> 
            Blog Pessoal</Link>
        </div>

        <div className="col-span-2  text-white flex justify-around hover:bg-rose-200">
            Postagens
            </div>

        <div className="col-span-1.5  text-white flex justify-around hover:bg-rose-200">
            <p>Tema</p>
            </div>

        <div className="col-span-2  text-white flex justify-around hover:bg-rose-200">
            <p>Cadastrar Tema</p>
            </div>

        <div className="col-span-1.5  text-white flex justify-around hover:bg-rose-200">
            <p>Login</p>
            </div>
       
         <div className="col-span-1.5  text-white flex justify-around hover:bg-rose-200">
            <Link to ='' onClick = {logout} className="hover: underline"> 
            Sair </Link>
        </div>
      
    </div>
  )
}

export default Navbar
