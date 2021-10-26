import './banner.css'

function Banner({nome, clique}) {

    return(

        <div id="banner">
            <p className="paragrafo-banner">Fala aí {nome}, beleza? </p>
            <button> {clique} </button>
        </div>
    )

}

export default Banner