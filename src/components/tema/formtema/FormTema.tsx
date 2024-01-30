import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { toastAlerta } from "../../../utils/ToastAlerta";

function FormTema() {

    //Navegação entre componentes, através das rotas.
    const navigate = useNavigate();

    //Aqui, estamos criando um objeto "undefined"
    const [tema, setTema] = useState<Tema>({} as Tema)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    //Acessamos a Context para conectar o usuario e buscar o token 
    //de autenticação para editarmos os temas os temas
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id:string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou. Faça login novamente.', 'info')
                handleLogout()
            }
        }

    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa fazer o login.', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })

    }

    function retornar() {
        navigate('/temas')
    }

    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
    
        if (id !== undefined) {
          try {
            await atualizar(`/temas`, tema, setTema, {
              headers: {
                'Authorization': token
              }
            })
    
            toastAlerta('Tema atualizado com sucesso', 'sucesso')
            retornar()
    
          } catch (error: any) {
            if (error.toString().includes('403')) {
              toastAlerta('O token expirou, favor logar novamente', 'info')
              handleLogout()
            } else {
              toastAlerta('Erro ao atualizar o Tema', 'erro')
            }
    
          }
    
        } else {
          try {
            await cadastrar(`/temas`, tema, setTema, {
              headers: {
                'Authorization': token
              }
            })
    
            toastAlerta('Tema cadastrado com sucesso', 'sucesso')
    
          } catch (error: any) {
            if (error.toString().includes('403')) {
              toastAlerta('O token expirou, favor logar novamente', 'info')
              handleLogout()
            } else {
              toastAlerta('Erro ao cadastrado o Tema', 'erro')
            }
          }
        }
        setIsLoading(false)
        retornar()
      }
            //CADASTRAR TEMA!// 

            return (
                <div className="container flex flex-col items-center justify-center mx-auto mt-20">
                    <h1 className="text-4xl text-center my-8">
                        {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
                    </h1>

                    <form className="w-1/2 flex flex-col gap-4 " onSubmit={gerarNovoTema}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="descricao">Descrição do tema</label>
                            <input
                                type="text"
                                placeholder="Descrição"
                                name='descricao'
                                className="border-2 border-slate-700 rounded p-2"
                                value={tema.descricao}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                            />
                        </div>
                        <button
                            className="rounded-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                            type="submit"
                        > {isLoading ?
                            <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> : 
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar Tema'}</span>

                        }
                         
                        </button>
                    </form>
                </div>
            );
        }

    



export default FormTema;