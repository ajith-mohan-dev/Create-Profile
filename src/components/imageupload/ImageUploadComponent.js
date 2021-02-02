import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import * as ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import style from './Style';

var sampleArray = [];

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: '',
      ImageArray: [],
      isModalVisible: false,
    };
  }

  addImage = () => {
    sampleArray.push(this.state.avatarSource);
    this.setState({
      ImageArray: sampleArray,
    });
  };

  uploadGridImage = () => {
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
          () => {
            this.addImage();
          },
        );
      }
    });
  };

  imagePress = (item) => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      image: item.uri,
    });
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.imagePress(item);
        }}>
        <View style={{margin: 4, borderRadius: 6}}>
          <ImageBackground
            source={{uri: item.uri}}
            style={style.renderImg}></ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const imageUrlformodal = [
      {
        url: this.state.image,
      },
    ];

    return (
      <Fragment>
        <View style={style.contaniner}>
          <FlatList
            data={this.state.ImageArray}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            extraData={this.state.ImageArray}
            numColumns={2}
            pagingEnabled
          />
        </View>
        <TouchableOpacity
          onPress={this.uploadGridImage}
          style={{marginHorizontal: 10, marginVertical: 5}}>
          <View style={style.uploadBox}>
            <Text style={style.txt} numberOfLines={1}>
              Upload Image
            </Text>
            <Image
              source={require('../../assets/images/plus1.png')}
              style={style.plusIcon}
            />
          </View>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
          style={style.modalContainer}>
          <TouchableOpacity style={style.modalView} onPress={this.toggleModal}>
            <Image
              source={require('../../assets/images/close.png')}
              style={style.crossIcon}
            />
          </TouchableOpacity>
          <ImageViewer
            imageUrls={imageUrlformodal}
            style={{flex: 1, resizeMode: 'contain'}}
            backgroundColor="transparent"
            pageAnimateTime
          />
        </Modal>
      </Fragment>
    );
  }
}

export default ProfileScreen;
