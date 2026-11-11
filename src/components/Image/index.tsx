import { View } from "react-native";
import { styles } from "./styles";

type ImageProps = {
    imageUrl: string,
}

export default function Image({ imageUrl }: ImageProps) {

    return  (

        <View style={styles.container}>
            <img
                src={imageUrl}
                style={styles.imageTop}
            />
        </View>

    );

}