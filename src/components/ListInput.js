import React from ' react';
import {Text, Input, ListItem, Left, Right} from 'native-base';
import sColor from '../public/styles/color';
import s from '../public/styles/SellerProfile';
import color from '../config';

const ListInput = ({
  label,
  value,
  handleChange,
  placeholder,
  children,
  disabled = false,
  type = 'default',
}) => {
  return (
    <ListItem style={s.listInput}>
      <Left>
        <Text style={sColor.regularGrayColor}>{label}</Text>
      </Left>
      <Right style={s.flex}>
        {children ? (
          children
        ) : (
          <Input
            placeholderTextColor={color.regularGray}
            placeholder={placeholder}
            disabled={disabled}
            keyboardType={type}
            style={s.textRight}
            value={value}
            onChangeText={handleChange}
          />
        )}
      </Right>
    </ListItem>
  );
};

export default ListInput;
