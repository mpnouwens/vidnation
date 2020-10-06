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
  const { colors } = useTheme();
  const actors = data.data?.Actors.split(",");
  const genre = data.data?.Genre.split(",");
  const ratings = data.data?.Ratings;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 20, width: "100%" }}>
          <Image
            source={{
              uri:
                data.data?.Poster !== "N/A"
                  ? data.data?.Poster
                  : "https://i.imgur.com/P7wGCmV.png",
            }}
            style={{ height: 350, width: 250, borderRadius: 10 }}
          />
        </View>
        <View
          style={{
            paddingLeft: 25,
            paddingRight: 25,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: colors.textColour,
              }}
            >
              Year
            </Text>
            <Text
              style={{
                marginBottom: 20,
                color: colors.textColour,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {data.data?.Year}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: colors.textColour,
              }}
            >
              Language
            </Text>
            <Text
              style={{
                marginBottom: 20,
                color: colors.textColour,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {data.data?.Language}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: colors.textColour,
              }}
            >
              Rated
            </Text>
            <Text
              style={{
                marginBottom: 20,
                color: colors.textColour,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {data.data?.Rated}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: colors.textColour,
              }}
            >
              Country
            </Text>
            <Text
              style={{
                marginBottom: 20,
                color: colors.textColour,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {data.data?.Country}
            </Text>
          </View>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
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
              marginTop: 15,
              color: colors.textColour,
            }}
          >
            Rating
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {ratings.map((rating: string, i: number) => {
              return (
                <View
                  key={i}
                  style={{
                    flexDirection: "column",
                    height: 60,
                    width: "auto",
                    borderColor: colors.searchColourBackground,
                    backgroundColor: colors.searchColourBackground,
                    borderWidth: 2,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                    marginBottom: 10,
                    padding: 10,
                  }}
                >
                  <Text style={{ color: colors.textColour }}>
                    {rating.Source}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: colors.textColour,
                    }}
                  >
                    {rating.Value}
                  </Text>
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
                    borderColor: colors.searchColourBackground,
                    backgroundColor: colors.searchColourBackground,
                    borderWidth: 2,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                    marginBottom: 10,
                    padding: 5,
                  }}
                >
                  <Text style={{ color: colors.textColour }}>{genre}</Text>
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
                    borderColor: colors.searchColourBackground,
                    backgroundColor: colors.searchColourBackground,
                    borderWidth: 2,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                    marginBottom: 10,
                    padding: 5,
                  }}
                >
                  <Text style={{ color: colors.textColour }}>{actor}</Text>
                </View>
              );
            })}
          </View>
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
