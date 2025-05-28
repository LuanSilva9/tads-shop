import { ProdutosForm } from "../grupos-produto-form";

export default function PageNovoProduto() {
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Novo produto</h1>
          <p className="text-muted-foreground">Cadastre um novo produto</p>
        </div>
      </div>
      <ProdutosForm />
    </section>
  );
}
