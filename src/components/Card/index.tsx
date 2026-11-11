
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Deputado } from "@/types/Deputado";

type DeputadoProps = {
    deputado: Deputado,
}

export default function Card({ deputado }: DeputadoProps) {

    return (

        <View style={styles.container}>

            <Text>Nome: {deputado.nome}</Text>
            <Text>Sigla Partido: {deputado.siglaPartido}</Text>
            <Text>Sigla UF: {deputado.siglaUf}</Text>
            <Text>URL Foto: {deputado.urlFoto}</Text>

        </View>

    );

}