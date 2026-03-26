import { Image, StyleSheet, Dimensions, Text} from "react-native";
import topo from "../../assets/topo.png";

const width = Dimensions.get("screen").width

export default function Cesta(){
    return <>
        <Image style={estilos.topo} source={topo}/>
        <Text style={estilos.titulo}>Detalhes da cesta</Text>
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
    }
});
