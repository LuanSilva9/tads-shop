import { TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Table } from "lucide-react";


export function UnidadeMedidaList() {
  return (
    <section className="mt-8 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{/* Dados de marcas */}</TableBody>
      </Table>
    </section>
  );
}

