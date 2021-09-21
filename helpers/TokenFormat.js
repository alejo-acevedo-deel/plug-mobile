import React from 'react';
import { Text } from 'react-native';
import NumberFormat from "react-number-format";

const TokenFormat = ({ value, token, style }) => (
    <NumberFormat
        value={value}
        displayType='text'
        thousandSeparator=','
        decimalScale={5}
        suffix={` ${token}`}
        renderText={value => <Text style={style}>{value}</Text>}
    />
)

export default TokenFormat;
