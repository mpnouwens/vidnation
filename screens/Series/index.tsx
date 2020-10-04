import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "../../components";
import { connect } from "react-redux";
import "redux";
import { RootState, Dispatch } from "../../store";

import { useTheme } from "../../theme/hooks";

interface NavigationProps {
  navigation: any;
}

const mapState = (state: RootState) => ({
  searchSeriesText: state.search.searchSeriesText,
  searchSeriesData: state.search.searchSeriesData,
  masterDetailData: state.search.masterDetailData,
});

const mapDispatch = (dispatch: Dispatch) => ({
  setSearchSeriesText: (searchSeriesText: string) =>
    dispatch.search.searchSeriesText(searchSeriesText),
  searchSeriesAsync: (searchSeriesText: string) =>
    dispatch.search.searchSeriesAsync(searchSeriesText),
  masterDetailAsync: (seriesText: string) =>
    dispatch.search.masterDetailAsync(seriesText),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps & NavigationProps;

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const colors = useTheme();
    return <Component {...props} colors={colors} />;
  };
}

class Series extends React.Component<Props> {
  render() {
    const masterDetailData = this.props.searchSeriesData;
    const colors = this.props.colors;

    const searchSeriesAsync = () => {
      return (
        masterDetailData.Search &&
        masterDetailData.Search.map &&
        masterDetailData.Search.map(
          (
            item: {
              Title: string;
              Poster: string;
              imdbID: string;
              Year: string;
            },
            i: number
          ) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  this.props.masterDetailAsync(item && item.imdbID).then(() => {
                    this.props.navigation.navigate("MasterDetail", {
                      masterDetailObj: this.props.masterDetailData,
                      myTitle: item && item.Title,
                    });
                  });
                }}
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  backgroundColor: colors.colors.navBackground,
                  borderRadius: 10,
                }}
              >
                {item && item.Poster ? (
                  <Image
                    source={{ uri: item && item.Poster }}
                    style={{
                      height: 150,
                      width: 100,
                      borderRadius: 10,
                      margin: 10,
                    }}
                  />
                ) : (
                  <Text>No image</Text>
                )}

                <View
                  style={{
                    marginLeft: 5,
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "auto",
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: colors.colors.textColour,
                    }}
                    key={i}
                  >
                    {item && item.Title}
                  </Text>
                  <Text
                    style={{ marginTop: 5, color: colors.colors.textColour }}
                  >
                    Year - {item && item.Year}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }
        )
      );
    };

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.colors.backgroundColour,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextInput
            placeholder="Search series"
            onChangeText={(input: string) => {
              this.props.setSearchSeriesText(input);
            }}
            backgroundColor={colors.colors.searchColourBackground}
            color={colors.colors.textColour}
            borderColor="gray"
            fontSize={16}
            padding={10}
            marginLeft={10}
            marginBottom={5}
            marginRight={10}
          />
          <TouchableOpacity
            style={{ width: "20%" }}
            onPress={() => {
              this.props.searchSeriesAsync(this.props.searchSeriesText);
            }}
          >
            <Text
              style={{
                paddingLeft: 20,
                color: colors.colors.textColour,
                fontSize: 18,
                width: 100,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>
        {masterDetailData.Search ? (
          <ScrollView style={{ width: "100%" }}>
            {searchSeriesAsync()}
          </ScrollView>
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "85%",
            }}
          >
            <Image source={colors.colors.seriesImage} style={styles.logo} />
            <Text style={{ fontSize: 18, color: colors.colors.textColour }}>
              Find your favourite series.
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
});

export default connect(mapState, mapDispatch)(withMyHook(Series));
