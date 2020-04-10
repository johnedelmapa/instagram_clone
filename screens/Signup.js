import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, updateUsername, updateBio} from '../actions/user.js';
import styles from '../styles.js'

class Signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Signup </Text>
        <TextInput
          style={styles.border}
          value={this.props.newuser.email}
          onChangeText={input => this.props.updateEmail(input)}
          placeholder='Email'
        />
        <TextInput
          style={styles.border}
          value={this.props.newuser.password}
          onChangeText={input => this.props.updatePassword(input)}
          placeholder='Password'
          secureTextEntry={true}
        />
        <TextInput
          style={styles.border}
          value={this.props.newuser.username}
          onChangeText={input => this.props.updateUsername(input)}
          placeholder='Username'
        />
        <TextInput
          style={styles.border}
          value={this.props.newuser.bio}
          onChangeText={input => this.props.updateBio(input)}
          placeholder='Bio'
        />
        <TouchableOpacity style={styles.button} onPress={ () => this.props.newuser }>
          <Text> Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    updateEmail, 
    updatePassword, 
    updateUsername, 
    updateBio
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    newuser: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)