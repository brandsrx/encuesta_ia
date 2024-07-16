import Link from "next/link"

export default function Header(){
    return(
      <header className=" mx-auto py-4 flex justify-between items-center c-dark">
      <div className="text-2xl font-bold">AI Encuesta</div>
      <nav className="space-x-4 items-center">
        <Link href="/">Introducción</Link>
       <Link href="/MarcoAplicativo">Marco Aplicativo</Link>
        <Link href="/info">Informacion</Link>
      </nav>
    </header>
    )
}