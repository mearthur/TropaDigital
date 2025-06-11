import { CircleSmall, EllipsisVertical, Plus, Search } from 'lucide-react';
import Sidebar from '../_components/sidebar';
import { Input } from '../_components/ui/input';
import { Button } from '../_components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/_components/ui/table';
import { Badge } from '../_components/ui/badge';

export default function Home() {
  const label = 'Ativo';
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-[#F8F8F8]">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="mx-4 my-6 rounded-lg p-6">
          <div className="flex w-full items-center justify-between pb-4">
            <div className="space-y-1">
              <span className="text-lg font-normal text-[#2A4D8E80]">
                Bem vindo de volta, <span className="font-bold text-black">Kaique Steck</span>
              </span>
              <h2 className="text-xl font-semibold text-[#CC6237]">Todos eventos</h2>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 sm:p-6">
            <div className="flex w-full flex-col items-end gap-4 sm:flex-row sm:items-center sm:justify-end">
              <div className="w-full sm:w-auto">
                <div className="relative w-full sm:w-[250px] md:w-[250px]">
                  <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Buscar eventos"
                    className="w-full rounded-full pl-10"
                  />
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <Button className="w-full rounded-full sm:w-auto">
                  <Plus className="mr-2" />
                  Inserir Novo
                </Button>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <Table className="min-w-full sm:overflow-scroll">
                <TableHeader>
                  <TableRow className="font-semibold">
                    <TableHead>Nome do evento</TableHead>
                    <TableHead>Total de equipes</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="font-normal text-[#657593]">
                    <TableCell className="w-[32%]">Clube do Laço Coração Pantaneiro</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell className="p-0">
                      <Badge
                        variant={label === 'Ativo' ? 'default' : 'outline'}
                        className="flex items-center gap-1.5"
                      >
                        <CircleSmall className="rounded-full bg-[#4DEF00] text-[#4DEF00]" />
                        {label}
                      </Badge>
                    </TableCell>
                    <TableCell>09 a 11 de Julho</TableCell>
                    <TableCell className="text-right">
                      <EllipsisVertical size={24} className="mt-1.5 text-[#CC6237]" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="font-normal text-[#657593]">
                    <TableCell className="w-[32%]">Clube do Laço Coração Pantaneiro</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell className="p-0">
                      <Badge
                        variant={label === 'Ativo' ? 'default' : 'outline'}
                        className="flex items-center gap-1.5"
                      >
                        <CircleSmall className="rounded-full bg-[#4DEF00] text-[#4DEF00]" />
                        {label}
                      </Badge>
                    </TableCell>
                    <TableCell>09 a 11 de Julho</TableCell>
                    <TableCell className="text-right">
                      <EllipsisVertical size={24} className="mt-1.5 text-[#CC6237]" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
