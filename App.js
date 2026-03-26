import { StatusBar, SafeAreaViewBase } from 'react-native';
import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaViewBase>
      <StatusBar/>
      <Cesta/>
    </SafeAreaViewBase>
  );
}
