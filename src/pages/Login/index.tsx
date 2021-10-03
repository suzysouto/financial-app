import { Button } from "../../components/atoms/Button";
import { InputText } from "../../components/molecules/InputText"
import { Link } from "../../components/molecules/Link";

export const Login = () => {
    return (
        <div className="w-screen h-screen bg-gray-50 flex justify-center">
            <div className="w-full h-full max-w-screen-lg grid grid-cols-2">
                <aside className="flex">
                    <img src="/hero-image.svg" />
                </aside>
                <main className="flex flex-col justify-center items-center gap-16">
                    <h1 className="font-bold text-3xl">Controle seus gastos</h1>
                    <form className="flex flex-col w-full gap-4 max-w-xs">
                        <InputText Label="Email" type="email" />
                        <InputText Label="Senha" type="password" />
                        <Button>Log In</Button>
                    </form>
                    <Link href="/register">Criar Conta</Link>
                </main>
            </div>
        </div>
    );
};
