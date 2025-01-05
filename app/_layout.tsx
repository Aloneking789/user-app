import { Stack } from "expo-router";
import React from 'react';
import StackRoute from './index';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <StackRoute />
    </Stack>
  );
}
