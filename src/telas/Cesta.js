import { Image, StyleSheet, Dimensions, Text, View} from "react-native";
import topo from "../../assets/topo.png";
``
const width = Dimensions.get("screen").width

export default function Cesta(){
    return <>
        <Image style={estilos.topo} source={topo}/>

        <Text style={estilos.titulo}>Detalhes da cesta</Text>
        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de verduras</Text>
            <Text>Fazenda do Leôncio</Text>
            <Text>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
            <Text>R$ 40, 00</Text>
        </View>
    </>
    
}

const estilos = StyleSheet.create({
    topo: {
        width: width,
        height: 578 / 768 * width
    },
    titulo: {
        width: width,
        textAlign: "center",
        position: "absolute",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        padding: 16,
        fontWeight: "bold"
    }, 
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});
