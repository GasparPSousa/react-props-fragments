import './footer.css'

function Footer({mensagem}) {

    

    return(
        <div id="footer">
            <p className="paragrafo-footer">{mensagem}</p>
        </div>
    )
}

export default Footer