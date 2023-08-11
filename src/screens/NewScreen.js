import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';

const NewsScreen = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      //Change API KEY accordingly
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=85506d7323694e0d8610c327cad7c5f9',
      );
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{flex: 1, padding: 16}}>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <View style={{marginBottom: 16}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{fontSize: 14}}>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.url}
      />
    </View>
  );
};

export default NewsScreen;
