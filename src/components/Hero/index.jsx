import piscinaImg from '/imagens/piscina.jpg'

export function Hero() {
  return (
    // 1. Container Principal:
    // - `relative`: cria o contexto de posicionamento para o overlay.
    // - `h-[60vh]`: define uma altura para a seção. Ajuste conforme necessário.
    // - `flex items-center justify-center`: centraliza o conteúdo verticalmente e horizontalmente.
    <div className="relative flex h-[60vh] min-h-[400px] items-center justify-center text-center">
      
      {/* 2. Camada da Imagem de Fundo */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${piscinaImg})` }}></div>

      {/* 3. Camada do Overlay */}
      {/* - `bg-black/60` cria um fundo preto com 60% de opacidade. Mude a cor e o valor (ex: bg-blue-900/75) como preferir. */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 4. Container do Conteúdo */}
      {/* - `relative z-10`: coloca este container acima das camadas de imagem e overlay. */}
      <div className="relative z-10 px-4">

        {/* Textos com cores claras para contraste */}
        <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl">
          Bem-vindo ao 
          {/* Corrigi a estrutura do HTML aqui para ser mais semântica */}
          <span className="block text-blue-400">Novo Rio Country Club</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-gray-200">
          O Clube do Recreio dos Bandeirantes
        </p>

        {/* <div className="mt-8">
          <a
            href="#"
            className="m-3 inline-block transform rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold text-blue-950 shadow-lg transition-colors hover:scale-105 hover:bg-yellow-500"
          >
            Saiba Mais
          </a>
        </div> */}
      </div>
    </div>
  );
}