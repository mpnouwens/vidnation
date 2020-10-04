import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import "redux";
import { SafeAreaView } from "../../components";
import { useTheme } from "../../theme/hooks";

interface NavigationProps {
  navigation: any;
  route: any;
}

type Props = NavigationProps;

const Content = (data: any) => {
  console.log(data);
  const { colors } = useTheme();
  console.log("masterDetailObj", data);
  const actors = data.data?.Actors.split(",");
  const genre = data.data?.Genre.split(",");
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 20, width: "100%" }}>
          <Image
            source={{ uri: data.data?.Poster }}
            style={{ height: 350, width: 250, borderRadius: 10 }}
          />
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 10,
              color: colors.textColour,
            }}
          >
            Plot
          </Text>
          <Text
            style={{
              paddingTop: 20,
              paddingRight: 10,
              fontSize: 18,
              color: colors.textColour,
            }}
          >
            {data.data?.Plot}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 10,
              color: colors.textColour,
            }}
          >
            Genre
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {genre.map((genre: string, i: number) => {
              return (
                <View
                  key={i}
                  style={{
                    flexDirection: "row",
                    height: 40,
                    width: "auto",
                    borderColor: "#E3E3E3",
                    backgroundColor: colors.badgeColourBackground,
                    borderWidth: 2,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                    marginBottom: 10,
                    padding: 5,
                  }}
                >
                  <Text>{genre}</Text>
                </View>
              );
            })}
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 10,
              color: colors.textColour,
            }}
          >
            Actors
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {actors.map((actor: string, i: number) => {
              return (
                <View
                  key={i}
                  style={{
                    flexDirection: "row",
                    height: 40,
                    width: "auto",
                    borderColor: "#E3E3E3",
                    backgroundColor: "#E3E3E3",
                    borderWidth: 2,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                    marginBottom: 10,
                    padding: 5,
                  }}
                >
                  <Text>{actor}</Text>
                </View>
              );
            })}
          </View>
          <Text style={{ marginBottom: 50 }}>{data.data?.Year}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

class MasterDetail extends React.Component<Props> {
  render() {
    const { masterDetailObj } = this.props.route.params;

    return <Content data={masterDetailObj} />;
  }
}

export default MasterDetail;
