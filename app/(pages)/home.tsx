import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const posts = [
  {
    id: '1',
    user: 'John Doe',
    image: 'https://via.placeholder.com/400x300',
    likes: 120,
    comments: 15
  },
  {
    id: '2',
    user: 'Jane Smith',
    image: 'https://via.placeholder.com/400x300',
    likes: 98,
    comments: 22
  },
  {
    id: '3',
    user: 'Mike Ross',
    image: 'https://via.placeholder.com/400x300',
    likes: 76,
    comments: 9
  }
];

const home = () => {
  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>{item.user}</Text>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart-outline" size={24} color="#000" />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chatbubble-outline" size={24} color="#000" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="share-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BagPackers</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Icon name="notifications-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 4,
    // borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  notificationButton: {
    padding: 5
  },
  postContainer: {
    marginBottom: 20,
    paddingHorizontal: 16
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionText: {
    marginLeft: 5
  }
});

export default home;
