
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Deputado } from "@/types/Deputado";
import Image from "../Image";

type DeputadoProps = {
    deputado: Deputado,
}

export default function Card({ deputado }: DeputadoProps) {

    return (

        <View style={styles.container}>

            <Image
                imageUrl={deputado.urlFoto}
            />

            <Text style={styles.title}>{deputado.nome}</Text>
            <Text style={styles.description}>Partido: {deputado.siglaPartido}</Text>
            <Text style={styles.description}>UF: {deputado.siglaUf}</Text>


        </View>

    );

}