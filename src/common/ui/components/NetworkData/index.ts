// import {ActivityIndicator} from 'react-native';
// import {LoadingState} from './styles';
// import type {Props} from './types';
// import {Character} from '../../../../views/Character/index'

// const NetworkData = <T>({data, renderData, onRefetch}: Props<T>) => {
//   if (data.type === 'loading') {
//     return (
//       <LoadingState>
//         <ActivityIndicator />
//       </LoadingState>
//     );
//   }

//   if (data.type === 'error') {
//     return (
//       <Character
//         icon="link-broken"
//         description={data.message}
//         onPressAsync={onRefetch}
//       />
//     );
//   }

//   return renderData(data.data);
// };

// export default NetworkData;
