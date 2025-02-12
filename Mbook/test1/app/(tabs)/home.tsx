import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const CreditBooks = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Essentialism: Цөөн зүйлс",
      author: "Грег Маккеоун",
      image: "https://via.placeholder.com/150", // Жишээ зураг
    },
    {
      id: 2,
      title: "Дүрэмгүй байх дүрэм",
      author: "Рийд Хастингс",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Хүчтэй сэтгэл зүйтэй хүмүүс...",
      author: "Эми Морин",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Бөгтөр нуруутан",
      author: "Хард Билгүүн",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Цагаан бороо",
      author: "Б. Намчинмэд",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Анхдагчид",
      author: "Адам Грант",
      image: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Credit books 📚</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002366",
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  bookContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    marginRight: 10,
    padding: 10,
    alignItems: "center",
    width: 150,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 4,
  },
  bookTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  bookAuthor: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});

export default CreditBooks;
