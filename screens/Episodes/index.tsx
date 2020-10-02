import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from '../../components'
import { connect } from 'react-redux';
import 'redux';
import { RootState, Dispatch } from '../../store'

const mapState = (state: RootState) => ({
    search: state.search,
})

const mapDispatch = (dispatch: Dispatch) => ({
    setSearchText: (searchText: string) => dispatch.search.searchText(searchText),
    searchAsync: (searchText: string) => dispatch.search.searchAsync(searchText)
})

type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps

class Episodes extends React.Component<Props> {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <TextInput
                        placeholder="Search episodes"
                        onChangeText={(input: string) => { this.props.setSearchText(input) }}
                        backgroundColor="#E3E3E3"
                        color="black"
                        borderColor="gray"
                        fontSize={16}
                        padding={10}
                        marginBottom={5}
                    />
                </View>
                <View style={{ flex: 2.5, alignItems: "center" }}>
                    <Image source={require("../../assets/episodes.png")} style={styles.logo} />
                    <Text style={{ fontSize: 18 }}>Find your favourite episodes.</Text>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        margin: 10
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 5
    }
})


export default connect(mapState, mapDispatch)(Episodes)
