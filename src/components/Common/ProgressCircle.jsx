import React from 'react';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';


export default function ProgressCircle({ percentage, size = 64 }) {
    return (
        <Svg height={size} width={size} viewBox="0 0 100 100">
            <Circle cx="50" cy="50" r="40" stroke="#9ca3af" strokeWidth="6" fill="transparent" />
            <Circle cx="50" cy="50" r="40" stroke="#12C660" strokeWidth="6" fill="transparent" strokeDasharray={`${percentage} 100`} />
            <SvgText
              x="50"
              y="50"
              fill="#0f172a"
              fontSize="24"
              fontWeight="700"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {`${Math.round(percentage)}%`}
            </SvgText>
        </Svg>
    );
}