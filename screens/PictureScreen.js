import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function PictureScreen() {
  return (
    <ScrollView>
      <View style={{ marginTop: 25, flex: 1, alignItems: "center", justifyContent: "center",  }}>
        <View style={{ backgroundColor: "#aeaeae", borderRadius: 10, overflow: "hidden" }}>
          <View>
            <Image
              source={require("../assets/images/mom.png")}
              style={{
                height: 340,
                width: 350
              }}
            />
          </View>
          <View style={{ padding: 10, width: 155 }}>
            <Text>Title</Text>
            <Text style={{ color: "#777", paddingTop: 5 }}>
              Description of the image
            </Text>
          </View>
        </View>
      </View>
      
    </ScrollView>
  );
}
