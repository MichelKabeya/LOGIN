import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 15,
    marginBottom: 50,
  },
  SkillText: {
    fontSize: 15,
    marginVertical: 5,
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
  },
  skillContainer: {
    flex: 5,
  },
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  Mainpicture: {},
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    margin: 8,
    padding: 8,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  BannerImage: {
    height: 350,
    alignContent: "center",
  },

  detailsText: {
    gap: 10,
  },
  signup: {
    paddingTop: 10,
    marginBottom: 20,
    color: "turquoise",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {},
  ViewImage: {
    width: 300,
    height: 300,
  },
  radio: {
    flex: 0,
    backgroundColor: "#F5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  radioGroupGenre: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 15,
  },
  radioGroup: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 15,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  background: {
    flex: 1,
    backgroundColor: "#f7f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },
  headings: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  lockimage: {
    marginTop: 0,
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  inputFlex: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "flex-start",
    width: "90%",
    gap: 30,
  },
  labels: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    width: "20%",
  },
  inputs: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: "black",
    width: "67%",
  },
  forget: {
    marginTop: 20,
    marginBottom: 5,
    color: "red",
    fontSize: 15,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  menubar: {
    marginTop: -80,
    marginBottom: 20,
    flexDirection: "row",
    paddingBottom: 60,
    width: "95%",
  },
  languageToggle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
    width: "60%", // Adjust width as needed
  },
  deleteBtn: {
    backgroundColor: '#e15656',
    padding: 5,
    borderRadius: 5
  },
  deleteBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export {styles}