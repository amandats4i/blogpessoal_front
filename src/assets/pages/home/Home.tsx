function Home() {

    return(
        <>
        <div id="container" className="bg-rose-300 flex justify-center">
       
            <div id="subcontainer" className="container grid grid-cols-2 text-white">
                
                <div id="texto" className="flex flex-col gap-4 items-center justify-center py-4">
                    
                    <h2 className="text-5xl font-bold">
                        Seja bem-vinde!</h2>

                    <p className="text-xl">
                        Expresse aqui os seus pensamentos e opiniões.</p>

                    <div className="flex justify-around gap-4">
                        <div className="rounded text-white border-white border-solid border-2 px-4 py-2">
                            Nova Postagem</div>

                        <div className="rounded text-rose-500 border-white bg-white border-solid border-2 px-4 py-2">
                            Ver Postagem</div>
                    </div>
                </div>
    
                <div>
    
                <div id="imagem" className="flex justify-center">
                    <img src = "https://ik.imagekit.io/r79tg58za/programmer.png?updatedAt=1705525390544" alt = "pagina home" className="w-2/3"/>
                </div>

                </div>

            </div>
        </div>
    
        </>
    )
    
    }
    
    export default Home