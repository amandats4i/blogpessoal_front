import { GithubLogo, LinkedinLogo } from "phosphor-react";

function Footer() {
  return (
    
    <div className='grid grid-cols-1'>
        <div className=' bg-rose-500 text-white flex justify-center px-6  align-bottom'>
            <p>Projeto Blog Pessoal | Feito por: Amanda Tsai </p>
        </div>

        <div className=' bg-rose-500 text-white flex justify-center px-6  align-bottom'>
            <p> Copyright 2024 </p>          
        </div>
        

        <div className=' gap-2 bg-rose-500 text-white flex justify-center px-6 align-bottom'>
              <LinkedinLogo size={30} weight='bold'/>
              <GithubLogo size={30} weight='bold'/>
            </div>

        </div>

        
  )
}

export default Footer
