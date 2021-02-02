import React, {Component, Fragment} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import AppStyle from '../../config/appStyle';
import ProfileComponent from '../../components/profile/ProfileComponent';
import DropDownComponent from '../../components/dropdown/DropDownComponent';
import ImageUploadComponent from '../../components/imageupload/ImageUploadComponent';
const {color, font, fontSize} = AppStyle || {};

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView style={style.contaniner}>
          <View style={style.contaniner}>
            <ProfileComponent />
            <DropDownComponent />
            <ImageUploadComponent />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default ProfileScreen;

const style = StyleSheet.create({
  contaniner: {
    flex: 1,
    backgroundColor: color.COLOR_BRIGHT_WHITE,
  },
});
