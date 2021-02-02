import React, {Component, Fragment} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AppStyle from '../../config/appStyle';
import style from './Style';
import * as ImagePicker from 'react-native-image-picker';

const {color, font, fontSize} = AppStyle || {};

var sampleArray = [];

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      avatarSource: '',
    };
  }

  uploadImage = () => {
    ImagePicker.showImagePicker((response) => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        this.setState(
          {
            avatarSource: source,
          },
          () => {},
        );
      }
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor={color.COLOR_APPCOLOR1} />
        <View style={style.contaniner}>
          <View style={style.imgContainer}>
            <TouchableOpacity onPress={this.uploadImage}>
              <Image
                source={
                  this.state.avatarSource.length === 0
                    ? require('../../assets/images/profile.png')
                    : this.state.avatarSource
                }
                style={style.imgView}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={style.formContainer}>
            <View style={style.nameView}>
              <TextInput
                defaultValue={this.state.name}
                onChangeText={(val) => {
                  this.setState({name: val});
                }}
                placeholder="Name"
                keyboardType="default"
                style={style.nameTextInput}
                numberOfLines={1}
              />
            </View>
            <View style={style.desView}>
              <TextInput
                multiline
                numberOfLines={4}
                value={this.state.comment}
                onChangeText={(val) => this.setState({comment: val})}
                placeholder="Description"
                style={style.desTextInput}
              />
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}

export default ProfileComponent;
