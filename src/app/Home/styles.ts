import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F8",
    paddingTop: 62,
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#202C50"
  },
  descricao: {
    fontSize: 15,
    color: "#526078",
    marginTop: 8,
    marginBottom: 24
  },
  mensagem: {
    fontSize: 15,
    color: "#202C50",
    marginVertical: 20
  },
  resultado: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8
  },
  conteudo: {
    padding: 16
  },
  json: {
    fontSize: 13,
    lineHeight: 20,
    color: "#24324B"
  },
});
