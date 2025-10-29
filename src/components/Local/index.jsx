export function Local() {
  return (

    // <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mt-16">
    <div className="flex flex-col items-center">
      
      <div className="text-xs sm:text-sm grid sm:grid-cols-2 gap-5 mb-8">

        <div className="bg-green-800 text-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-lg font-bold p-1 mb-4 border-b">Contatos</h2>
          <div className="leading-4">
            {/* <img className="mr-2 w-8 inline bg-yellow-400 p-0.5 rounded-xl" src="../../../dist/assets/imagens/smartphone-phone-call-svgrepo-com.svg" alt="" /> */}
            Telefones:
            <span className="font-bold">  2990-2315 |
            2990-1393 |
            2990-7038</span>
              <div>
                <img className="mr-2 w-8 inline" src="imagens/location.svg" alt="" />
                Endereço: <p>Av. Bruno Fernandes, 125</p>
                            <p>Recreio dos Bandeirantes, Rio de Janeiro - RJ</p>
              </div>
          </div>
        </div>

        <div className="bg-green-800 text-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-lg font-bold p-1 mb-4 border-b">Internet</h2>
          <div className="leading-16">
            <a href="https://www.instagram.com">
              <img className="mr-2 w-8 inline" src="imagens/instagram.svg" alt="" />
              <span className="text-xl text-white tracking-widest p-1 rounded-xl bg-green-700">@bandeirantesclub</span>
            </a>
          </div>
          <div className="leading-12">
            <a href="https://wa.me/5521970403459">
              <img className="mr-2 w-8 inline" src="imagens/whatsapp.svg" alt="" />
              <span className="text-xl tracking-widest p-1 rounded-xl bg-green-700">9040-0202</span>
            </a>
          </div>
          
        </div>
      </div>


      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h2 className="text-lg font-bold p-1 mb-4 border-b">Localização</h2>
        <a href="https://maps.app.goo.gl" target="_blank" rel="noopener noreferrer">
          <img className="w-full" src="imagens/bandeirantes-clube-mapa.png" alt="Mapa Clube" />
        </a>

      </div>
    </div>

  )
}