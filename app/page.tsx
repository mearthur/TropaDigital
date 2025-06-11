import Image from 'next/image';
import Logo from '@/public/Frame.png';
import ImageForm from '@/public/Group 1.png';
import Form from './_components/form';

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="flex h-auto w-full max-w-[756.5px] flex-col gap-8 rounded-[20px] bg-white p-6 shadow-[0px_100px_200px_0px_rgba(0,0,0,0.25)] md:mt-7 lg:mt-0 lg:h-[498px] lg:flex-row lg:p-10">
        {/* Lado esquerdo */}
        <div className="flex w-full flex-col gap-9 lg:w-1/2">
          <Image src={Logo} alt="Logo Tropa Digital" />
          <section>
            <h1 className="text-3xl font-bold text-[#CC6237]">Bem-vindo de volta</h1>
            <p className="text-[#2A4D8E80]">Entre com sua conta para acessar o painel.</p>
          </section>
          <Form />
        </div>

        {/* Lado direito */}
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="s flex items-center justify-center sm:h-[360px] sm:w-[320px] md:h-[420px] md:w-[360px] lg:h-[478px] lg:w-[398px]">
            <Image
              alt="Imagem Ilustração"
              src={ImageForm}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
