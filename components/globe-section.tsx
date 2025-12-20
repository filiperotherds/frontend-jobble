import { Globe } from "./ui/globe";

export default function GlobeSection() {
  return (
    <div className="relative px-8 py-20 w-full bg-theme-secondary flex items-center justify-center overflow-hidden">
      <div className="z-20 w-full max-w-[1200px] flex items-start justify-start">
        <div className="w-full max-w-[600px] flex flex-col items-start justify-start space-y-8">
          <div className="flex flex-row items-center justify-center space-x-2">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="glowGradient">
                  <stop offset="0%" stopColor="#4ade80" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity={0} />
                </radialGradient>
              </defs>

              <circle cx="10" cy="10" r="8" fill="url(#glowGradient)">
                <animate
                  attributeName="r"
                  values="8;12;8"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0.2;0.6"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle cx="10" cy="10" r="2.5" fill="#4ade80" />
            </svg>

            <span className="text-xs font-mono text-zinc-300">
              Alcance Global
            </span>
          </div>

          <h1 className="text-5xl font-extrabold text-white">
            VISIBILIDADE GLOBAL PARA O SEU NEGÓCIO
          </h1>

          <p className="text-zinc-300 leading-6">
            Veja em tempo real como seu negócio está indo em qualquer lugar do
            mundo. Acompanhe quantos leads você está gerando, quanto está
            vendendo e qual é o retorno de cada campanha. Gerencie seus clientes
            em um único lugar, receba alertas automáticos sobre o que é
            importante e tenha relatórios fáceis de entender. Tudo isso ajuda
            você a crescer mais rápido e com segurança.
          </p>
        </div>
      </div>

      <div className="z-0 absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full flex items-center justify-center overflow-hidden">
        <div className="w-[800px] h-[800px] pointer-events-auto">
          <Globe className="right-0 bottom-0" />
        </div>
      </div>
    </div>
  );
}
