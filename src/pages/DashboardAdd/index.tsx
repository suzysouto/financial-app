import { Button } from "../../components/atoms/Button";
import { InputText } from "../../components/molecules/InputText"
import { Link } from "../../components/molecules/Link";
import { SidebarHero } from "../../components/organism/SidebarHero";
import { TemplateContainer, TemplateContent, TemplateMainHeroSection } from "../../components/templates";

export const DashboardAdd = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                <SidebarHero />
                <TemplateMainHeroSection>
                    <h1 className="font-bold text-3xl">Cadastre nova despesa</h1>
                    <form className="flex flex-col w-full gap-4 max-w-xs">
                        <InputText Label="Despesa" type="text" />
                        <InputText Label="Categoria" type="text" />
                        <InputText Label="Valor" type="number" />
                        <Button>Cadastrar</Button>
                    </form>
                    <Link href="/dashboard">Voltar</Link>
                </TemplateMainHeroSection>
            </TemplateContent>
        </TemplateContainer>
    );
};