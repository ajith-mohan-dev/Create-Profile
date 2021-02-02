import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AppStyle from '../../config/appStyle';
import {Dropdown} from 'react-native-material-dropdown';
import style from './Style';
const {color, font, fontSize} = AppStyle || {};
var sampleArray = [];

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          item: 'Actor',
          value: 'Actor',
        },
        {
          item: 'Singer',
          value: 'Singer',
        },
        {
          item: 'Producer',
          value: 'Producer',
        },
        {
          item: 'Director',
          value: 'Director',
        },
      ],
      dropDown: 'Categories',
      dropDownData: [],
    };
  }

  onDropDownChange = (item, index) => {
    var itemObj = {
      label: item,
      value: item,
    };

    sampleArray.push(itemObj);
    this.setState({
      dropDown: item,
      dropDownData: sampleArray,
    });
  };

  removeItem = (item, index) => {
    sampleArray.splice(index, 1);

    this.setState({
      dropDownData: sampleArray,
    });
  };

  render() {
    const {dropDownData, data} = this.state || {};

    return (
      <Fragment>
        <View style={style.contaniner}>
          <View style={style.subContainer}>
            <View style={{zIndex: 10}}>
              <Dropdown
                data={this.state.data}
                value={this.state.dropDown}
                textColor={color.COLOR_TEXT_BLACK}
                containerStyle={{marginTop: -20}}
                onChangeText={(item, index) => {
                  this.onDropDownChange(item, index);
                }}
                inputContainerStyle={{
                  borderBottomColor: 'transparent',
                }}
                style={{paddingLeft: 10}}

                // useNativeDriver={true}
              />
            </View>
          </View>
          <View style={style.itemContainer}>
            <ScrollView
              // pagingEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {dropDownData &&
              Array.isArray(dropDownData) &&
              dropDownData.length ? (
                dropDownData.map((item, index) => {
                  return (
                    <View style={style.itemView}>
                      <Text style={style.itemText}>{item.label}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          this.removeItem(item, index);
                        }}>
                        <Image
                          source={require('../../assets/images/close.png')}
                          style={style.crossImg}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })
              ) : (
                <View />
              )}
            </ScrollView>
          </View>
        </View>
      </Fragment>
    );
  }
}

export default ProfileScreen;
