import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import "redux";
import { RootState, Dispatch } from "../../store";

interface NavigationProps {
  navigation: any;
  route: any;
}

const mapState = (state: RootState) => ({
  searchData: state.search.seriesData,
});

const mapDispatch = (dispatch: Dispatch) => ({
  setSearchText: (searchText: string) => dispatch.search.searchText(searchText),
  searchAsync: (searchText: string) => dispatch.search.searchAsync(searchText),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps & NavigationProps;

class MasterDetail extends React.Component<Props> {
  render() {
    const { masterDetailObj } = this.props.route.params;
    console.log("masterDetailObj", masterDetailObj);

    const actors = masterDetailObj?.Actors.split(",");
    const genre = masterDetailObj?.Genre.split(",");

    return (
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 20, width: "100%" }}>
          <Image
            source={{ uri: masterDetailObj?.Poster }}
            style={{ height: 350, width: 250, borderRadius: 10 }}
          />
        </View>

        <View style={{ paddingLeft: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 10 }}>
            Plot
          </Text>
          <Text style={{ padding: 20, fontSize: 18 }}>
            {masterDetailObj?.Plot}
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 10 }}>
            Genre
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
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
                  <Text>{genre}</Text>
                </View>
              );
            })}
          </View>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 10 }}>
            Actors
          </Text>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
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
          <Text style={{ marginBottom: 50 }}>{masterDetailObj?.Year}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
});

export default connect(mapState, mapDispatch)(MasterDetail);
