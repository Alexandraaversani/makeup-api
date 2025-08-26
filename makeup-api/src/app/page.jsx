// src/app/page.jsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Turma: Desenvolvimento de Sistemas 2</h1>
      <h2 className="text-2xl">Escola: SENAI Valinhos</h2>
      <p className="mt-2">Aluna: Alexandra Cristina Aversani</p>
      <Image src="/avatar.png" alt="Foto do aluno" width={150} height={150} className="rounded-full my-4" />
      <blockquote className="italic text-center max-w-md mt-4">
        “A persistência é o caminho do êxito.” — Charles Chaplin
      </blockquote>
    </main>
  );
}


