import React, { useState, useEffect, useRef, useCallback } from 'react';

export function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  
  // Configurações personalizáveis
  const AUTOPLAY_DELAY = 3000; // 3 segundos
  const PAUSE_ON_HOVER = true;
  const PAUSE_ON_INTERACTION = true;
  
  const items = [
    {
      title: "Sou Clean",
      description: "Serviço de Lava a Jato."
    },
    {
      title: "The Place", 
      description: "Academia de Misculação e Fitness."
    },
    {
      title: "NTC",
      description: "Núcleo de Tênis City."
    },
    {
      title: "Novo Rio Soccer",
      description: "Escolinha de Futebol do Fluminense"
    }
  ];

  // Função para parar o autoplay - Memoizada com useCallback
  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Função para iniciar o autoplay - Memoizada com useCallback
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, AUTOPLAY_DELAY);
  }, [items.length, AUTOPLAY_DELAY]);

  // Função para avançar para o próximo slide
  // const nextSlide = useCallback(() => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  // }, [items.length]);

  // // Função para voltar ao slide anterior
  // const prevSlide = useCallback(() => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  // }, [items.length]);

  // Função para ir para um slide específico
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Effect para gerenciar o autoplay - Agora com dependências corretas
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    // Cleanup function
    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying, isPaused, startAutoPlay, stopAutoPlay]);

  // Função para lidar com interações do usuário
  const handleUserInteraction = useCallback((callback) => {
    if (PAUSE_ON_INTERACTION) {
      setIsAutoPlaying(false);
      // Reativa autoplay após 5 segundos de inatividade
      setTimeout(() => {
        setIsAutoPlaying(true);
      }, 5000);
    }
    callback();
  }, [PAUSE_ON_INTERACTION]);

  // Função para pausar ao passar o mouse (hover)
  const handleMouseEnter = useCallback(() => {
    if (PAUSE_ON_HOVER) {
      setIsPaused(true);
    }
  }, [PAUSE_ON_HOVER]);

  // Função para retomar quando o mouse sair
  const handleMouseLeave = useCallback(() => {
    if (PAUSE_ON_HOVER) {
      setIsPaused(false);
    }
  }, [PAUSE_ON_HOVER]);

  return (
    <div 
      className="relative max-w-fit mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card atual */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 className="font-bold text-xl mb-2 text-green-800">
          {items[currentIndex].title}
        </h3>
        <p className="text-gray-600">
          {items[currentIndex].description}
        </p>
      </div>

      {/* Botões de navegação */}
      {/* <button 
        onClick={() => handleUserInteraction(prevSlide)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-yellow-300 text-blue-950 p-2 rounded-full hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl"
        aria-label="Slide anterior"
      >
        ←
      </button>
      
      <button 
        onClick={() => handleUserInteraction(nextSlide)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-amber-300 text-blue-950 p-2 rounded-full hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl"
        aria-label="Próximo slide"
      >
        →
      </button> */}

            {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleUserInteraction(() => goToSlide(index))}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentIndex 
                ? 'bg-amber-400 ring-2 ring-amber-200' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Barra de progresso (opcional) */}
      <div className="mt-3 bg-gray-200 rounded-full h-1 overflow-hidden">
        <div 
          className={`h-full bg-amber-400 transition-all duration-100 ${
            isAutoPlaying && !isPaused ? 'animate-pulse' : ''
          }`}
          style={{
            width: `${((currentIndex + 1) / items.length) * 100}%`,
            transition: isAutoPlaying && !isPaused ? `width ${AUTOPLAY_DELAY}ms linear` : 'width 0.3s ease'
          }}
        />
      </div>
    </div>
  );
}