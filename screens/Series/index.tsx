import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "../../components";
import { connect } from "react-redux";
import "redux";
import { RootState, Dispatch } from "../../store";

interface NavigationProps {
  navigation: any;
}

const mapState = (state: RootState) => ({
  searchSeriesText: state.search.searchSeriesText,
  searchSeriesData: state.search.searchSeriesData,
  masterDetailData: state.search.masterDetailData,
});

const mapDispatch = (dispatch: Dispatch) => ({
  setSearchSeriesText: (searchSeriesText: string) => dispatch.search.searchSeriesText(searchSeriesText),
  searchSeriesAsync: (searchSeriesText: string) => dispatch.search.searchSeriesAsync(searchSeriesText),
  masterDetailAsync: (seriesText: string) => dispatch.search.masterDetailAsync(seriesText)
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps & NavigationProps;

class Series extends React.Component<Props> {
  render() {
    const masterDetailData = this.props.searchSeriesData;
    const renderSeriesContent = () => {
      return (
        masterDetailData.Search &&
        masterDetailData.Search.map &&
        masterDetailData.Search.map(
          (
            item: { Title: string; Poster: string; imdbID: string },
            i: number
          ) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                    this.props.masterDetailAsync(item && item.imdbID).then(() => {
                        this.props.navigation.navigate("MasterDetail", { masterDetailObj: this.props.masterDetailData, myTitle: item && item.Title});
                    })
                   
                }}
                style={{
                  flexDirection: "row",
                  width: "100%",
                  paddingLeft: 15,
                  paddingTop: 5,
                  marginBottom: 10,
                }}
              >
                {item && item.Poster ? (
                  <Image
                    source={{ uri: item && item.Poster }}
                    style={{ height: 200, width: 150, borderRadius: 10 }}
                  />
                ) : (
                  <Text>No image</Text>
                )}

                <Text style={{ marginLeft: 15 }} key={i}>
                  {item && item.Title}
                </Text>
              </TouchableOpacity>
            );
          }
        )
      );
    };

    return (
      <>
        <View style={styles.container}>
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
              backgroundColor="#E3E3E3"
              color="black"
              borderColor="gray"
              fontSize={16}
              padding={10}
              marginLeft={10}
              marginBottom={5}
              marginRight={10}
            />
            <Button
              color="black"
              title="Search"
              onPress={() => this.props.searchSeriesAsync(this.props.searchSeriesText)}
            />
          </View>
          <ScrollView style={{ width: "100%" }}>
            {masterDetailData.Search ? (
              renderSeriesContent()
            ) : (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../../assets/series.png")}
                  style={styles.logo}
                />
                <Text style={{ fontSize: 18 }}>
                  Find your favourite series.
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
});

export default connect(mapState, mapDispatch)(Series);
