import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, PlusCircle, SaveIcon } from "lucide-react";
import { UnidadeMedidaList } from "./unidadeMedida-list";

export default function PageUnidadeMedida() {
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Marcas</h1>
          <p className="text-muted-foreground">
            Gerencie seu cadastro de Unidade de Medidas
          </p>
        </div>
        <Link href="/cadastro/marcas/novo">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nova Unidade de Medida
          </Button>
        </Link>
      </div>
      <UnidadeMedidaList />
    </section>
  );
}

