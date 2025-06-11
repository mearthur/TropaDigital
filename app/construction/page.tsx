import Image from 'next/image';
import Contruction from '@/public/construction.png';

export default function Construction() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <div className="max-w-md">
        <Image src={Contruction} alt="Em construção" className="h-lg mx-auto mb-2 w-lg" />
        <h1 className="text-3xl font-bold text-gray-800">Página em Construção</h1>
        <p className="mt-1 text-gray-600">
          Estamos trabalhando para entregar essa funcionalidade em breve.
          <br />
          Volte mais tarde para ver as novidades!
        </p>
        <div className="mt-6">
          <a
            href="/home"
            className="rounded-full bg-[#CC6237] px-6 py-2 font-medium text-white transition-colors hover:bg-[#b2552e]"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
}
