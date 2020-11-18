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

  state = {
    Switch_7: false,
    TextInput_14: "",
    DateTimePicker_16: new Date(""),
    TextInput_19: "250"
  }

  render = () => (
    <View>
      <Text style={styles.Text_3}>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Switch
        activeColor="#188b09"
        inactiveColor="#72086a"
        trackColor={{ false: "#72086a", true: "#188b09" }}
        style={styles.Switch_7}
        value={this.state.Switch_7}
        onValueChange={nextChecked => this.setState({ Switch_7: nextChecked })}
      />
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/hero_A8NvV4z.jpeg"
        }}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_14}
        onChangeText={nextValue => this.setState({ TextInput_14: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        style={styles.DateTimePicker_16}
        date={this.state.DateTimePicker_16}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_16: selectedDate })
        }
      />
      <TextInput
        placeholder="26"
        keyboardType="numeric"
        value={this.state.TextInput_19}
        onChangeText={nextValue => this.setState({ TextInput_19: nextValue })}
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
  Switch_7: { alignSelf: "flex-start" },
  View_1: {},
  Text_3: { fontSize: 30, color: "#18aa30" },
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  Image_9: {},
  View_1: {},
  Text_3: { fontSize: 30, color: "#18aa30" },
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  Image_9: {},
  View_1: {},
  Text_3: { fontSize: 30, color: "#18aa30" },
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  Image_9: {},
  View_1: {},
  Text_3: { fontSize: 30, color: "#18aa30" },
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  Image_9: {},
  TextInput_14: {},
  DateTimePicker_16: {},
  TextInput_19: {},
  View_1: {},
  Text_3: { fontSize: 30, color: "#18aa30" },
  Button_5: {},
  Switch_7: { alignSelf: "flex-start" },
  Image_9: {},
  TextInput_14: {},
  DateTimePicker_16: { color: "#bf2b2b" },
  TextInput_19: {}
})
