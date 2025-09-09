import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl ring-1 ring-black/5">
          <div className="flex flex-col items-center space-y-10">
            {/* Header Section */}
            <header className="flex flex-col items-center w-full">
              <div className="mb-8">
                <Image 
                  src="/avatar.png" 
                  alt="Foto do aluno" 
                  width={140} 
                  height={140} 
                  className="rounded-full border-4 border-white shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                  priority
                />
              </div>
              <div className="text-center space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-emerald-300 text-transparent bg-clip-text">
                  Alexandra Cristina Aversani
                </h1>
                <p className="text-lg text-gray-600 tracking-wide">
                  Desenvolvimento de Sistemas 2
                </p>
                <p className="text-emerald-600 font-medium">SENAI Valinhos</p>
              </div>
            </header>

            {/* Quote Section */}
            <blockquote className="text-center max-w-2xl mx-auto">
              <p className="text-xl italic text-gray-600">
                "A persistência é o caminho do êxito"
              </p>
              <footer className="mt-2 text-gray-500">— Charles Chaplin</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </main>
  );
}