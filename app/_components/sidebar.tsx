import { CalendarDays, CircleUser, LayoutGridIcon, Power, SquareUser, Users } from 'lucide-react';
import SidebarButton from '@/app/_components/ui/sidebar.button';
import Logo from '@/public/Frame.png';
import LogoMobile from '@/public/Vector.png';
import Image from 'next/image';
import UserProfile from './userprofile';

export default function Sidebar() {
  return (
    <div className="flex w-20 flex-col justify-between border-r-2 border-gray-200 bg-white md:w-64">
      <div>
        <div className="flex justify-center px-4 py-6 md:justify-start md:px-11">
          <Image src={Logo} alt="Logo Tropa Digital" className="hidden h-auto w-auto md:block" />
          <Image
            src={LogoMobile}
            alt="Logo Tropa Digital"
            className="h-8 w-8 sm:block md:hidden md:h-auto md:w-auto"
          />
        </div>
        <div className="flex flex-col gap-2 p-3.5 sm:items-center">
          <SidebarButton href="/construction">
            <LayoutGridIcon />
            <span className="hidden md:inline">Dashboard</span>
          </SidebarButton>

          <SidebarButton href="/home">
            <CalendarDays />
            <span className="hidden md:inline">Eventos</span>
          </SidebarButton>

          <SidebarButton href="/construction">
            <Users />
            <span className="hidden md:inline">Equipes</span>
          </SidebarButton>

          <SidebarButton href="/construction">
            <SquareUser />
            <span className="hidden md:inline">Inscrições</span>
          </SidebarButton>
        </div>
      </div>
      <div>
        <div className="hidden px-4 pt-4 md:block">
          <section className="rounded-2xl border-2 border-[#DFDCD5]"></section>
        </div>

        <div className="flex flex-col items-center gap-3 p-3 pt-7 md:items-start">
          <div className="hidden md:block">
            <UserProfile name="Kaique Steck" role="Administrador" />
          </div>
          <SidebarButton href="/construction">
            <CircleUser />
            <span className="hidden md:inline">Alterar Dados</span>
          </SidebarButton>

          <SidebarButton href="/">
            <Power />
            <span className="hidden md:inline">Sair</span>
          </SidebarButton>
        </div>
      </div>
    </div>
  );
}
