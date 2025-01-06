import { Stack } from "expo-router";
import React from 'react';
import StackRoute from './index';
import { BasketContext} from '../Context';

export default function RootLayout() {
  return (
    <BasketContext>
    <Stack screenOptions={{ headerShown: false }}>
      <StackRoute />
    </Stack>
    </BasketContext>
  );
}
