import React, { FC, PropsWithChildren } from 'react';
import { NavigationContainer, Theme,DefaultTheme } from '@react-navigation/native';

type Props = PropsWithChildren;

export const NavigationProvider: FC<Props> = (props) => {
  const { children } = props;

  return (
    <NavigationContainer theme={CustomTheme} onReady={onReady}>
      {children}
    </NavigationContainer>
  );
};

const onReady = () => {
  console.log('Navigation is ready');
};

const CustomTheme: Theme = {
	...DefaultTheme,
	// FIXME:
  // colors: {
  //   primary: Colors.Salmon,
  //   border: Colors.Transparent,
  //   text: Colors.Jacarta,
  //   notification: Colors.MadderLake,
  //   card: Colors.White,
  //   background: Colors.Cultured,
  // },
  dark: false,
};