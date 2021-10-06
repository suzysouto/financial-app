import { Button } from "../../components/atoms/Button";
import { TemplateContainer } from "../../components/templates";
import { Card } from "./components/Card";

export const Dashboard = () => {
    const array = [
        {id: "0", title: "Disney+", category: "Streaming", price: "R$ 9,50"},
        {id: "1", title: "PrimeVideo", category: "Streaming", price: "R$ 9,90"},
        {id: "2", title: "Cagece", category: "Bens de Consumo", price: "R$ 70,00"},
        {id: "3", title: "GloboPlay", category: "Streaming", price: "R$ 9,50"},
        {id: "4", title: "Internet", category: "Bens de Consumo", price: "R$ 74,90"}
    ];

    return ( 
        <TemplateContainer>
            <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6">
                <span className="font-bold text-2xl">Expanse Tracker</span>

                <nav className="flex gap-4">
                    <Button>Adicionar Nova Conta</Button>
                    <Button variant="ghost">Sair</Button>
                </nav>
            </header>

            <main className="w-full bg-purple-100 max-w-screen-lg h-5/6 grid overflow-y-scroll content-start grid-cols-3 gap-4 p-4">
                {array.map((item) => (
                    <Card key={item.id} title={item.title} category={item.category} price={item.price} />
                ))}
            </main>
        </TemplateContainer>
    );
};