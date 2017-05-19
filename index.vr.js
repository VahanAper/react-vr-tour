import React, { Component } from 'react';
import {
  View,
  Text,
  Pano,
  AppRegistry,
  asset,
  StyleSheet,
} from 'react-vr';

const places = [
  {
    title: 'Islands',
    image: 'island-garden.jpg',
  },
  {
    title: 'Night',
    image: 'starry-sky.jpg',
  },
  {
    title: 'Winter',
    image: 'winter-outdoor.jpg',
  },
  {
    title: 'Zion',
    image: 'zion-vr.jpg',
  },
];

class WorldTour extends Component {
  constructor() {
    super();

    this.toggleMenu = this.toggleMenu.bind(this);
    this.changePlace = this.changePlace.bind(this);

    this.state = {
      showMenu: false,
      place: 'starry-sky.jpg'
    }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  changePlace(place) {
    console.log('place', place);
    this.setState({
      place: place.image,
    });
  }

  render() {
    let menuText = this.state.showMenu === true ? 'Close' : 'Open';

    return (
      <View>
        <Pano source={asset(this.state.place)}></Pano>
        <View
          onEnter={this.toggleMenu}
          style={styles.menuButton}
        >
          <Text style={styles.menuButtonText}>{menuText}</Text>
        </View>
        {
          this.state.showMenu ?
            <View style={styles.menu}>
              {
                places.map((place, i) => {
                  return (
                    <View
                      onEnter={this.changePlace.bind(null, place)}
                      style={styles.menuItem}
                      key={i}
                    >
                      <Text style={styles.menuItemText}>{place.title}</Text>
                    </View>
                  )
                })
              }
            </View>
          :
            <View></View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 5,
    height: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    transform: [
      { translate: [-2, 0, -7.5] },
    ],
  },
  menuButton: {
    backgroundColor: '#fff',
    borderRadius: 0.25,
    borderWidth: 0.01,
    width: 0.5,
    height: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    transform : [
      { translate: [-2, 0, -5] }
    ],
  },
  menuButtonText: {
    textAlign: 'center',
    fontSize: 0.15,
    color: '#000',
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
    height: 1,
    borderRadius: 0.5,
    borderWidth: 0.02,
    backgroundColor: '#fff'
  },
  menuItemText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#000',
  },
});

AppRegistry.registerComponent('WorldTour', () => WorldTour);
