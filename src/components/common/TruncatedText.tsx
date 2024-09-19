import React from 'react';
import { Text, View } from 'react-native';
import StyledText from './StyledText';

interface TruncatedTextProps {
  text: string;
  maxLength?: number;
  [x: string]: any;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength = 100, ...props }) => {
  const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <View style={{ width: '100%' }}>
      <StyledText numberOfLines={1} {...props}>{truncatedText}</StyledText>
    </View>
  );
};

export default TruncatedText;
