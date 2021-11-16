import React, {useState} from 'react';
// import {
//   ActivityIndicator,
//   Button,
//   FlatList,
//   ListRenderItemInfo,
//   Text,
//   View,
// } from 'react-native';
// import {makeRequest, NameData} from '../scripts/request';
//
// export const List = () => {
//   const [isLoading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//
//   const getData = async (url: string) => {
//     try {
//       setLoading(true);
//       setData((await makeRequest(url)).data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   return (
//     <View>
//       <Button
//         onPress={() => {
//           getData('https://reqres.in/api/users?page=2');
//         }}
//         title={'Press'}
//       />
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={({id}, index) => id}
//           renderItem={({item}: ListRenderItemInfo<NameData>) => (
//             <Text>{item.first_name}</Text>
//           )}
//         />
//       )}
//       <Text>-------------------------------</Text>
//     </View>
//   );
// };
