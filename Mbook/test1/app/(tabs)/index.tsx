import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

// HEADER_MAX_HEIGHT =120;
// HEADER_MIN_HEIGHT =120;
 
// const {value} =Animated

// class App extends Component{
//   constructor(props){
//     super(props);
    

//     this.scrollY = new Value(0);
//   }
// }render(){
//   const HEADER_HEIGHT = this.state.scrollY.interpolate({
//     inputRange:[0,HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT]
//     outputRange:[HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT]
//     extrapolate:'clamp'
//   });
// }



const [scrollX, setScrollX] = useState(new Animated.Value(0));
const HEADER_HEIGHT = 95; 
const Header = () => (
  <View style={styles.header}>
    <View>
      <Text style={styles.logo}> MBook</Text>
    </View>
    <View style={styles.headerIcons}>
      <AntDesign name="qrcode" size={24} color="white" />
      <AntDesign name="bells" size={24} color="white" style={{ marginLeft: 15 }} />
      <AntDesign name="profile" size={24} color="white" style={{ marginLeft: 15 }} />
    </View>
  </View>
);

const FirstRoute = () => (
  <ScrollView style={[styles.scene, { backgroundColor: 'white' }]} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
    <View style={{ height: 190, marginTop: 10 }}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          alignItems: "center",
          flexDirection: "row",
        }}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          style={styles.imgContainer1}
          source={{
            uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/generate/cover/66c52f2a_e5872d_1.983.jpg",
          }}
        />
        <Image
          style={styles.imgContainer1}
          source={{
            uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/generate/cover/65717810_274522_1.983.jpg",
          }}
        />
        <Image
          style={styles.imgContainer1}
          source={{
            uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/books/cover/677e1d09_c07a9e_1.983.jpg",
          }}
        />
      </ScrollView>
    </View>
    <View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19 }}>Энэ сарын онцлох</Text>
          <AntDesign name="star" size={18} color="gold" />
        </View>
      </View>
      <Text style={{ fontWeight: 100, marginLeft: 15, marginBottom: 15 }}>Аудио ном</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/6799b65d_555658_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Б.Шүүдэрцэцэг</Text>
          <Text style={{ fontSize: 10, marginLeft: 10, width:100}}>Уулсын домог Хотулун </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/6791e2d0_2c1425_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Хайтан</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Эргээд ир </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/6788a9a8_c1848b_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Жэймс Р.Доти</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Шидэт мухлаг </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/677e2e0a_a49b8d_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Ёко Огава</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Төгс тоо</Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          
        </View>
      </ScrollView>
    </View>
    <View>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19 }}>Зөвхөн Mbook-ээс</Text>
          <FontAwesome name="headphones" size={18} color="grey" />
        </View>

        <View style={{ flexGrow: 2, flexDirection: "row", alignItems: "center", justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => { /* Add action here */ }}>
            <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 18, color: "orange" }}>
              Бүгд {'>'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontWeight: 100, marginLeft: 15, marginBottom: 15 }}>Аудио номнууд</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/61b95324_a8a79f_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Сонг Хөнбин</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Мөнгөний дайн </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/673e8292_ada8a9_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>С.Батжаргал</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Үүлэн сүүдэр</Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
        
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/60debcda_d39c78_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Адам Грант</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Анхдагчид</Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/60bf80a5_94b4aa_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Л.Түдэв</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Уулын үер</Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
         
        </View>
      </ScrollView>
    </View>

    <View>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19 }}>Анх удаа ном сонсох гэж </Text>
        </View>

        <View style={{ flexGrow: 2, flexDirection: "row", alignItems: "center", justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => { /* Add action here */ }}>
            <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 18, color: "orange" }}>
              Бүгд {'>'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19 }}>байна уу?</Text>
        </View>
      <Text style={{ fontWeight: 100, marginLeft: 15, marginBottom: 15 }}>Унших завгүй бол СОНСООД үз</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/63ed8896_644b55_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Б.Лхагвасүрэн</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Уянгын тойрог</Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/658009f8_818c8f_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Хермани Хессе</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Сиддхарта</Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
         
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/60bf80a5_94b4aa_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Колин Хүүвер</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Верити </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/660a22c4_555162_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>Н.Эрдэнэбат</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Гүртэн 1</Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          
        </View>
      </ScrollView>
    </View>


    <View>
      <View style={{ flexDirection: "row", marginTop: 50,marginBottom:10 }}>
        <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19 }}>Багц номууд</Text>
          <FontAwesome name="book" size={18} color="grey" />
        </View>

        <View style={{ flexGrow: 2, flexDirection: "row", alignItems: "center", justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => { /* Add action here */ }}>
            <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 18, color: "orange" }}>
              Бүгд {'>'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/bundles/6597ae4e_c97e9f_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/bundles/65641b03_bd9b89_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/bundles/65641b10_465e85_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/bundles/65641c42_75bcd3_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          
        </View>
      </ScrollView>
    </View>







    
    
    return (
    <ImageBackground
      style={{ width: "auto", height: 280, flex: 1, marginTop: 30 }}
      source={{
        uri: "https://wallpapers.com/images/hd/orange-background-bo32s5wg7bprnzvj.jpg",
      }}
    >
      <View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19, color: "white" }}>Credit books</Text>
            <FontAwesome name="ring" size={18} color="grey" />
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: 100, marginLeft: 15, marginBottom: 15, color: "white" }}>
            Subscription үйлчилгээг идэвхжүүлээд  доорх номуудаас 1-г сонгон сонсоорой
          </Text>
          <FontAwesome name="headphone" size={18} color="grey" />
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        >
          

          {[
            {
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqnBCjKr1cy6gDJZzSX9gtqaPZyTfj_GiGA&s",
            },
            {
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/64265122_b4b99a_1.jpg",
              title: "James",
              subtitle: "Shidet muhlag",
            },
            {
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/64488b2c_85b3b2_1.jpg",
              title: "James",
              subtitle: "Shidet muhlag",
            },
            {
              uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/6195f730_828181_1.jpg",
              title: "James",
              subtitle: "Shidet muhlag",
            },
            {
              uri: "https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/66149f41_272c39_1.jpg",
              title: "James",
              subtitle: "Shidet muhlag",
            },
          ].map((item, index) => (
            <View key={index}>
              {index === 0 ? (
                <Animated.View
                  style={[
                    styles.imgContainerWrapper,
                    {
                      opacity: scrollX.interpolate({
                        inputRange: [0, 100],
                        outputRange: [1, 0.5],
                        extrapolate: "clamp",
                      }),
                    },
                  ]}
                >
                  <Image style={styles.imgContainer} source={{ uri: item.uri }} />
                  <Text style={{ color: "whitesmoke", marginLeft: 10 }}>{item.title}</Text>
                  <Text style={{ color: "white", fontSize: 10, marginLeft: 10 }}>{item.subtitle}</Text>
                </Animated.View>
              ) : (
                <View style={styles.imgContainerWrapper}>
                  <Image style={styles.imgContainer} source={{ uri: item.uri }} />
                  <Text style={{ color: "whitesmoke", marginLeft: 10 }}>{item.title}</Text>
                  <Text style={{ color: "white", fontSize: 10, marginLeft: 10 }}>{item.subtitle}</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );

      <View>
      <View style={{ flexDirection: "row", marginTop: 50, }}>
        <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19 }}>Заавал сонсох 10 ном</Text>
          <FontAwesome name="headphone" size={18} color="grey" />
        </View>

        <View style={{ flexGrow: 2, flexDirection: "row", alignItems: "center", justifyContent: 'flex-end' }}>
          
        </View>
      </View>
      <View>
      <Text style={{ fontWeight: 100, marginLeft: 15,marginBottom:15 ,color:"black" }}>Subscription/Credit эрхээрээ аваарай</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/bundles/6597ae4e_c97e9f_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/bundles/65641b03_bd9b89_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/bundles/65641b10_465e85_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/bundles/65641c42_75bcd3_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          
        </View>
      </ScrollView>
    </View>



    <ImageBackground
            style={{ width: "auto", height: 280,flex:1,marginTop:30}}
            source={{
              uri: "https://wallpapers.com/images/hd/orange-background-bo32s5wg7bprnzvj.jpg"   }}
          >
            <View >
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19,color:"white" }}>Buri-н санал болгох</Text>
          <FontAwesome name="ring" size={18} color="grey" />
        </View>
        <View style={{ flexGrow: 2, flexDirection: "row", alignItems: "center", justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => { /* Add action here */ }}>
            <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 18, color: "red" }}>
              Бүгд {'>'}
            </Text>
          </TouchableOpacity>
        </View>

        
      </View>
      <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" ,marginBottom:20}}>
          <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19,color:"white" }}>номууд</Text>
        </View>
      
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View>
          <Image
            style={styles.imgContainer3}
            source={{
              uri: "data:image/jpeg;base64,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"       }}
          />
          
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/633e81c9_3f3f3c_1.jpg",
            }}
          />
          <Text style={{ color: "whitesmoke", marginLeft: 10 , }}>James</Text>
          <Text style={{ color: "white",fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/620eece9_b2632f_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ color: "white",fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
         
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/6639a806_676f6d_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ color: "white",fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/600e41ed_a8a08d_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
          <Text style={{ color: "white",fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>
          <FontAwesome5 name="headphones-alt" size={16} style={styles.minuscircle} color="black" />
          <Ionicons name="document-text" style={styles.docum} size={16} color="black" />
        </View>
      </ScrollView>
      </View>
      </ImageBackground>


      <View>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19 }}>Зохиолчид</Text>
          <FontAwesome name="write" size={18} color="grey" />
        </View>

        <View style={{ flexGrow: 2, flexDirection: "row", alignItems: "center", justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => { /* Add action here */ }}>
            <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 18, color: "orange" }}>
              Бүгд {'>'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            style={styles.imgContainer4}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/author/square/66dfebe5_7c716b_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 60 }}>James</Text>
         
        </View>
        <View>
          <Image
            style={styles.imgContainer4}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/square/65260bb5_aa6e42_1.001.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 60 }}>James</Text>
      
        </View>
        <View>
          <Image
            style={styles.imgContainer4}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/author/square/66e00103_336580_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 60 }}>James</Text>
         
        </View>
        <View>
          <Image
            style={styles.imgContainer4}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/author/square/66dff07f_9c8a78_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 60 }}>James</Text>
         
        </View>
      </ScrollView>
    </View>




    <View style={{marginBottom:50}}>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 19 }}>Эрхлэн гаргагч,хэвлэлийн </Text>
          
          <FontAwesome name="book" size={18} color="green" />
        </View>
        

        <View style={{ flexGrow: 2, flexDirection: "row", alignItems: "center", justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => { /* Add action here */ }}>
            <Text style={{ fontWeight: 600, marginLeft: 15, fontSize: 18, color: "orange" }}>
              Бүгд {'>'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={{ flexGrow: 8, flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontWeight: 600, marginLeft: 10, fontSize: 19 }}> газрууд</Text>
        </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            style={styles.imgContainer4}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/publishers/cover/66df99a8_a59915_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 60 }}>James</Text>
         
        </View>
        <View>
          <Image
            style={styles.imgContainer4}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/publishers/cover/66df990f_83191b_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 60 }}>James</Text>
      
        </View>
        <View>
          <Image
            style={styles.imgContainer4}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/newsfeed/item/publishers/cover/66df9924_787d81_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 60 }}>James</Text>
         
        </View>
        <View>
          <Image
            style={styles.imgContainer4}
            source={{
              uri: "https://ub1.cdn.mplus.mn/r_sm_h/images/publisher/photos/71191/676bb4b1_9aafcc_1.jpg",
            }}
          />
          <Text style={{ color: "gray", marginLeft: 60 }}>James</Text>
         
        </View>
      </ScrollView>
    </View>




    


  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={[styles.scene, { backgroundColor: 'white' }]} showsVerticalScrollIndicator={false}>
    {/* Content */}
  </ScrollView>
);

const ThirdRoute = () => (
  <ScrollView style={[styles.scene, { backgroundColor: 'white' }]} showsVerticalScrollIndicator={false}>
    {/* Content */}
  </ScrollView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    { key: "first", title: "Танд зориулсан" },
    { key: "second", title: "Аудио ном" },
    { key: "third", title: "Цахим ном" },
  ];

  return (
    <SafeAreaView style={styles.container}>
    <Header />
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 400 }} 
      renderTabBar={(props) => (
        <TabBar
          {...props}
          scrollEnabled={true}
          style={{ backgroundColor: 'white' }}
          activeColor="#fc5e00"  
          inactiveColor="black" 
          indicatorStyle={{
            backgroundColor: '#fc5e00', 
            height: 3,                
          }}
          
        />
      )}
    />
    <Text>HELLO WORLD</Text>
  </SafeAreaView>
  );
}

// === СТИЛҮҮД ===
const styles = StyleSheet.create({
  tabView: {
    backgroundColor: "black",
  },
  tabBar: {
    backgroundColor: "white",
  },
  indicator: {
    backgroundColor: "red",
  },
  labelStyle: {
    fontSize: 14,
    color: "black", 
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: "#fc5e00",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  scene: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgContainer: {
    height: 150,
    width: 150,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  imgContainer1: {
    height: 170,
    width: 330,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  imgContainer3: {
    height: 150,
    width: 150,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
   
  },
  imgContainer4: {
    height: 150,
    width: 150,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 180,
  },
  minuscircle: {
    position: "absolute",
    top: 4,
    right: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },
  docum: {
    position: "absolute",
    top: 4,
    right: 43,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  imgContainerWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});
