// import {ActivityIndicator} from 'react-native';
// import ScreenState from '../ScreenState';
// import {LoadingState} from './styles';
// import type {Props} from './types';

// const NetworkData = <T>({data, renderData, onRefetch}: Props<T>) => {
//   if (data.type === 'loading') {
//     return (
//       <LoadingState>
//         <ActivityIndicator>
//       </LoadingState>
//     );
//   }

//   if (data.type === 'error') {
//     return (
//       <ScreenState
//         icon="link-broken"
//         description={data.message}
//         onPressAsync={onRefetch}
//       />
//     );
//   }

//   return renderData(data.data);
// };

// export default NetworkData;
