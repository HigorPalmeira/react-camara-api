import { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Button } from "@/components/Button";
import { api } from "@/services/api";
import { styles } from "./styles";
import Card from "@/components/Card";
import { Deputado } from "@/types/Deputado";

export default function Home() {
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState("Toque no botão para consultar a API.");

  const [deputados, setDeputados] = useState<Deputado[]>([])

  async function conectarAPI() {
    setCarregando(true);
    setMensagem("Consultando a API...");

    try {     
      const resposta = await api.get<{ dados: Deputado[] }>("/deputados"); 
      
      const deputados = resposta.data.dados;
      
      setMensagem(`Consulta concluída: ${deputados.length} deputados recebidos.`);
      
      setDeputados(deputados);
      
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
