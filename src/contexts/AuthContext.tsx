/* Essa classe inteira é para autenticação para login e logout, ou seja, é um CONTEXTO de AUTENTICAÇÃO */

import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import {login} from "../services/Service"
import { toastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

/*Todos os "filhos" do componente principal App terão acesso a essa interface */
interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })
    /*Animação de carregamento dos botões*/
    const [isLoading, setIsLoading] = useState(false)

    /*Metodo login*/
    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta("Usuário logado com sucesso :D", 'sucesso')
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta("Dados do usuário inconsistentes :/", 'erro')
            setIsLoading(false)
        }
    }

    /*Método Logout*/
    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
  
    }

    /*AuthProvider é o provedor. Ele faz o retorno dos objetos como parametros, todos os componentes de children*/
    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )

    
}