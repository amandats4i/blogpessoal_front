
import { useNavigate } from 'react-router-dom';
import CardTemas from '../cardtema/CardTemas';
import { useContext, useEffect, useState } from 'react';
import Tema from '../../../models/Tema';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { DNA } from 'react-loader-spinner';


function ListaTemas() {

  //Navegação entre componentes, através das rotas.
  const navigate = useNavigate();

  //Aqui, estamos criando um array vazio para armazenar os Temas
  const [temas, setTemas] = useState<Tema[]>([])

  //Acessamos a Context para conectar o usuario e buscar o token 
  //de autenticação para criarmos os temas
  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, {
        headers: { Authorization: token }
      })

    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou. Faça login novamente.')
        handleLogout()
      }
    }

  }
  //Monitora o token para que um usário sem o token, ou seja, 
  //que nao esteja logado, faça envio de informações. 
  useEffect(() => {
    if (token === '') {
      alert('Você precisa fazer o login.')
      navigate('/login')
    }
  }, [token])

  useEffect(() =>{
    buscarTemas()
  }, [temas.length])

  return (
    <>
    {temas.length === 0 && (
      <DNA
      visible={true}
      height="200"
      width="200"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper mx-auto"
  />
    )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <>
              {temas.map((tema) => (
                <>
                  <CardTemas key={tema.id} tema={tema} />
                </>
              ))}



            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaTemas;