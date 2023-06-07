import * as React from 'react';
import { Keyboard, Pressable, Text } from 'react-native';
import { Buttons } from '../styles';

type PrimaryButtonProps = {
	label: string,
	action: () => void,
	disabled?: boolean,
}
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({label, action, disabled}) => {
	return (
		<Pressable disabled={disabled} style={
			({pressed}) => { 
				return disabled ? 
					{...Buttons.primary.containerDisabled} :
					pressed == true ? 
					{...Buttons.primary.containerPressed} :
					{...Buttons.primary.container} 
			}
		} onPress={action}>
			<Text style={Buttons.primary.label}>{label}</Text>
		</Pressable>
	);
}

