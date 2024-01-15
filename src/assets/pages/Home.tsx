function Home() {

    return(
        <>
        <div style = {{
            width: "100vw", //100% da viewpoint//
            display: "flex",
            justifyContent: "center"
    
        }}>
            <div>
                <div style={{
                    width: "80vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                
                    <h2>Seja bem-vinde!</h2>
                    <p>Expresse aqui os seus pensamentos e opiniões.</p>
                </div>
    
                <div id="imagem" style={{
                    width:"80vw",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                }}>
    
                <div>
                    <img src = "https://i.imgur.com/VpwApCU.png" alt = "pagina home" width="400px"/>
                </div>

                </div>

            </div>
        </div>
    
        </>
    )
    
    }
    
    export default Home