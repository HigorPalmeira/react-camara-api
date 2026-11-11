import { useState } from "react";
import { ScrollView, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Button } from "@/components/Button";
import { api } from "@/services/api";
import { styles } from "./styles";
import Card from "@/components/Card";
import { Deputado } from "@/types/Deputado";

/*
type Deputado = {
  id: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
};
*/

export default function Home() {
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState("Toque no botão para consultar a API.");
  const [retorno, setRetorno] = useState("");

  const [deputados, setDeputados] = useState<Deputado[]>([])

  async function conectarAPI() {
    setCarregando(true);
    setMensagem("Consultando a API...");
    setRetorno("");

    try {     
      const resposta = await api.get<{ dados: Deputado[] }>("/deputados"); 
      
      const deputados = resposta.data.dados;
      
      console.log("Deputados recebidos:", deputados);
      setMensagem(`Consulta concluída: ${deputados.length} deputados recebidos.`);     
      setRetorno(JSON.stringify(deputados, null, 2));
    } catch {
      setMensagem("Não foi possível consultar a API. Verifique a conexão e tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.titulo}>API da Câmara</Text>
      <Text style={styles.descricao}>Exemplo de conexão com Axios</Text>

      <Button
        title={carregando ? "Consultando..." : "Consultar API"}
        onPress={conectarAPI}
        disabled={carregando}
      />

      <Text style={styles.mensagem}>
        {mensagem}
      </Text>

      <ScrollView style={styles.resultado} contentContainerStyle={styles.conteudo}>
        <Text selectable style={styles.json}>
          {retorno || "O retorno da consulta aparecerá aqui."}
        </Text>
      </ScrollView>

      <FlatList
        data={deputados}
        keyExtractor={(deputado) => deputado.id.toString()}

        renderItem={({item}) => (

          <Card
            deputado={item}
          />

        )}

        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}
