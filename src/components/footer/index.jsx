import { Cidade, Cidade2, Cidadeinfo, Cidademain, Direita, DireitaA, DireitaP, Titu, Titu2 } from '../../styles/style';
import { FaRobot } from "react-icons/fa";

export default function Rodape() {
    return (
        <Cidademain>
            <Titu>Todos os direitos reservados <FaRobot /></Titu>
            <Titu2>Jandson Barros &#169;</Titu2>
        </Cidademain>)
}