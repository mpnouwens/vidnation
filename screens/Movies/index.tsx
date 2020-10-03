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
  searchMoviesText: state.search.searchMoviesText,
  searchMoviesData: state.search.searchMoviesData,
  masterDetailData: state.search.masterDetailData,
});

const mapDispatch = (dispatch: Dispatch) => ({
  setSearchMoviesText: (searchMoviesText: string) => dispatch.search.searchMoviesText(searchMoviesText),
  searchMoviesAsync: (searchMoviesText: string) => dispatch.search.searchMoviesAsync(searchMoviesText),
  masterDetailAsync: (moviesText: string) => dispatch.search.masterDetailAsync(moviesText)
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps & NavigationProps;

class Movies extends React.Component<Props> {
  render() {
      console.log('this.props.searchMoviesText', this.props.searchMoviesText)
      console.log('searchMoviesData', this.props.searchMoviesData)
    const masterDetailData = this.props.searchMoviesData;
    const renderMoviesContent = () => {
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
              placeholder="Search movies"
              onChangeText={(input: string) => {
                this.props.setSearchMoviesText(input);
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
              onPress={() => {this.props.searchMoviesAsync(this.props.searchMoviesText)}}
            />
          </View>
          <ScrollView style={{ width: "100%" }}>
            {masterDetailData.Search ? (
              renderMoviesContent()
            ) : (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../../assets/movies.png")}
                  style={styles.logo}
                />
                <Text style={{ fontSize: 18 }}>
                  Find your favourite movies.
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

export default connect(mapState, mapDispatch)(Movies);
