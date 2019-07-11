/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import { 
  AdMobBanner, 
  AdMobInterstitial
} from 'react-native-admob'


 


class App extends Component {

  bannerError() {
        console.log('An error');
        return;
    }

     showInterstitial() {
     AdMobInterstitial.showAd().catch(error => console.warn(error));

    }

      componentDidMount() {

        AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
            AdMobInterstitial.setTestDevices(['5DEFCB796917C65328FC0B90B5391639']);
        // AdMobInterstitial.setTestDevices(['5DEFCB796917C65328FC0B90B5391639']);

        AdMobInterstitial.addEventListener('adLoaded',
      () => console.log('AdMobInterstitial adLoaded')
    );
    AdMobInterstitial.addEventListener('adFailedToLoad',
      (error) => console.warn(error)
    );
    AdMobInterstitial.addEventListener('adOpened',
      () => console.log('AdMobInterstitial => adOpened')
    );
    AdMobInterstitial.addEventListener('adClosed',
      () => {
        console.log('AdMobInterstitial => adClosed');
        AdMobInterstitial.requestAd().catch(error => console.warn(error));
      }
    );
    AdMobInterstitial.addEventListener('adLeftApplication',
      () => console.log('AdMobInterstitial => adLeftApplication')
    );

    AdMobInterstitial.requestAd().catch(error => console.warn(error));
    
        
    }

    componentWillUnmount() {
        AdMobInterstitial.removeAllListeners();
    }


  render(){
     return (
    <View style={styles.container}>
                <Button title="Interstitial"
                        onPress={this.showInterstitial}
                        containerViewStyle={styles.interstitialBanner}/>
                <AdMobBanner
                    style={styles.bottomBanner}
                    adSize="banner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"

                    didFailToReceiveAdWithError={this.bannerError}/>
            </View>
            );
  }
 
};

const styles = StyleSheet.create({
  

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
 

 
  interstitialBanner: {
        width: '100%',
        marginLeft: 0
    },
    bottomBanner: {
        position: 'absolute',
        bottom: 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
