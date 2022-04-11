import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%"
  },
  buttonsContainer: {
    width: "100%",
    position: "absolute",
    bottom: 50
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center"
  },

  title: {
    fontSize: 40,
    fontWeight: "800"
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62'
  },
  subtitleCTA: {
    fontSize: 16,
    color: '#5c5e62',
    fontWeight: "900",
    textDecorationLine: 'underline'
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute"
  }

});

export default styles;