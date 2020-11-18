import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_7: true }

  render = () => (
    <View>
      <Text style={styles.Text_3}>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Switch
        activeColor="#094a8b"
        inactiveColor="#d9bfd7"
        trackColor={{ false: "#d9bfd7", true: "#094a8b" }}
        style={styles.Switch_7}
        value={this.state.Switch_7}
        onValueChange={nextChecked => this.setState({ Switch_7: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_3: { color: "#18aa30" },
  View_1: {},
  Text_3: { color: "#18aa30" },
  Button_5: {},
  View_1: {},
  Text_3: { fontSize: 30, color: "#18aa30" },
  Button_5: {},
  View_1: {},
  Text_3: { fontSize: 30, color: "#18aa30" },
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" }
})
