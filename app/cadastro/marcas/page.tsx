import { Button } from "@/components/ui/button";

import { Link, PlusCircle } from "lucide-react";
import { MarcaList } from "./marca-list";
export default function PageMarcas() {
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Marcas</
          <p className="text-muted-foreground">
            Gerencie seu cadastro de marcas
          </p>
        </div>
        <Link href="/cadastro/marcas/novo">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nova Marca
          </Button>
        </Link>
      </div>
      <MarcasList />
    </section>
  );
}
