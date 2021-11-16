import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface buttonProps {
  text: string;
  isSelected: Boolean;
  selectedCallback: (buttonChildSelected: number) => void;
  id: number;
}

const FooterButton = (props: buttonProps) => {
  const onPress = () => {
    props.selectedCallback(props.id);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.footerButton,
        {borderColor: props.isSelected ? 'grey' : 'black'},
      ]}>
      <Text style={styles.footerButtonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export const Footer = () => {
  const [selected, setSelected] = useState(-1);
  const buttons = [];
  const buttonText = ['Home', 'Catagories', 'Stuff', 'My Account', 'Basket'];

  const buttonChildSelectedCallback = (buttonChildSelected: number) => {
    setSelected(buttonChildSelected);
  };

  for (var i = 0; i < buttonText.length; i++) {
    buttons.push(
      <FooterButton
        isSelected={selected == i ? true : false}
        text={buttonText[i]}
        selectedCallback={buttonChildSelectedCallback}
        id={i}
        key={i}
      />,
    );
  }

  return <View style={[styles.container]}>{buttons}</View>;
};

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
  },
  footerButton: {
    backgroundColor: '#ff8a00',
    height: 50,
    flex: 1,
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: 'center',
  },
  footerButtonText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Footer;
