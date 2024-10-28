import { FlatList, Text } from 'react-native';

const Trending = ({ posts }) => {
  return (
    <FlatList 
      data={posts}
      horizontal // making flatlist horizontal for horizontal scrolling
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className='text-3xl text-white' key={item.id}>{item.id}</Text>
      )}
    />
  )
}

export default Trending;