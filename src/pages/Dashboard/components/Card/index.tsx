import tw from "tailwind-styled-components";
import { Button } from "../../../../components/atoms/Button";

export const Card = ({ title, category, price }) => {
    return (
        <ArticleContainer>            
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="px-4 h-8 flex items-center justify-center text-purple-900 bg-purple-100 rounded-full self-start">{category}</p>
            <p className="font-medium">R$ {price}</p>
            <footer className="w-full flex justify-between">
                <Button className="" variant='ghost'>Editar</Button>
                <Button className="" variant='ghost'>Excluir</Button>                
            </footer>
        </ArticleContainer>
    );
};

export const ArticleContainer = tw.article`
    bg-white p-4 shadow-md relative flex justify-between flex-col gap-4
`;
