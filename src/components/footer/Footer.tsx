import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {

  const {usuario} = useContext(AuthContext)

  let component: ReactNode  

let data = new Date().getFullYear() //variável que define o ano atual automaticamente!


if (usuario.token !== ""){
  component = (
    <div className='grid grid-cols-1'>
        <div className=' bg-rose-500 text-white flex justify-center px-6  align-bottom'>
            <p>Projeto Blog Pessoal | Feito por: Amanda Tsai </p>
        </div>

        <div className=' bg-rose-500 text-white flex justify-center px-6  align-bottom'>
            <p> Copyright {data} </p>          
        </div>
        

        <div className=' gap-2 bg-rose-500 text-white flex justify-center px-6 align-bottom'>
              <LinkedinLogo size={30} weight='bold'/>
              <GithubLogo size={30} weight='bold'/>
            </div>

        </div>
  )
}
  return (
    <>
    {component}
    </>
    

        
  )
}

export default Footer
