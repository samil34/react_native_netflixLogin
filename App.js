import React, { Component } from 'react';
import {
  View, Text, Image, SafeAreaView, Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';


import {Input, Button, CheckBox  } from './src/Components'

const { width } = Dimensions.get('window')


export default class App extends Component {

  state = {
    username: '',
    password: '',
    isShowPassword: false
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }


  render() {

    const {
      username,
      password,
      isShowPassword

    } = this.state
    return (

      
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

        <ScrollView contentContainerStyle={{ flex: 1}}>

          {/* Logo Image */}
          <View style={{ flex: 1 }}>

            <Image
              source={require('./src/image/logo.png')}
              style={styles.logo}
            />


          </View>
          <View style={[styles.supContainer, { flex: 0.5 }]}>

            <Text style={ { fontSize:38, color:'white', fontWeight: 'bold'}}>
              Sign In
            
            </Text>
          </View>



          {/* Form */}
          <View style={[styles.subContainer, { flex: 3 }]}>

            <Input
              placeholder={'Email or phone number'}
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}

            />

            <Input
              placeholder={'Password'}
              secureTextEntry={isShowPassword}
              keyboardType={'numeric'}
              value={password}
              onChangeText={(password) => this.setState({ password })}
            />



           


            <Button
              text={'Sign In'}
              onPress={() => {
                console.log('State Değerleri ', username, ' ', password);

              }}
            />

             <View style={{
              flexDirection: 'row',
              width: '90%',
              marginBottom: 40,
              marginTop: 10,
              justifyContent: 'space-between'
            }}>

              <CheckBox
                text='Remember Me'
                status={isShowPassword}
                onPress={() => this.setState({ isShowPassword: !isShowPassword })}
              />


              <TouchableOpacity>
                <Text style={[styles.mainText, { fontSize: 16, marginLeft: 15, top: 20 }]}>Need Help?</Text>

              </TouchableOpacity>


            </View>

            

          </View>



          {/* Login With Facebook */}
          <View style={[styles.supContainer, { flex: 0.5, flexDirection: 'row' }]}>

            <Image
              source={require('./src/image/facebook.png')}
              style={styles.facebook}
            />
            <Text style={[styles.mainText, { fontSize: 15, marginLeft: 15 }]}>Log In with Facebook</Text>


          </View>



          {/* Bottom */}
          <View style={[styles.supContainer, { flex: 0.5 }]}>

            <Text style={styles.mainText}>
              New to Netflix?
            <Text style={styles.whiteText}>  Sign up new</Text>
            </Text>
          </View>

        </ScrollView>

      </SafeAreaView>
    )
  }

}

const styles = {
  groundText: { color: 'black'},
  mainText: { color: 'gray' },
  whiteText: { color: 'white', fontWeight: 'bold' },
  supContainer: {marginLeft: 20},
  subContainer: { alignItems: 'center', justifyContent: 'center', },
  logo: { width: 200, height: 100, },
  facebook: { width: 20, height: 20 },
  line: { width: '35%', height: 0.5, backgroundColor: 'gray' }

}