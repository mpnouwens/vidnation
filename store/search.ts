import { createModel, Reducer } from "@rematch/core";
import { RootModel } from "./models";

export const search = createModel<RootModel>()({
  state: {
    searchMoviesText: "",
    searchMoviesData: [],
    searchSeriesText: "",
    searchSeriesData: [],
    masterDetailData: {},
  },
  reducers: {
    searchMoviesText(state, searchMoviesText: string) {
      return {
        ...state,
        searchMoviesText,
      };
    },
    searchMoviesData(state, payload: Object) {
      return { ...state, ...payload };
    },
    searchSeriesText(state, searchSeriesText: string) {
      return {
        ...state,
        searchSeriesText,
      };
    },
    searchSeriesData(state, payload: Object) {
      return { ...state, ...payload };
    },
    masterDetailData(state, payload: Object) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    async searchSeriesAsync(payload: string, state) {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=597bf54e&s=${payload}&type=series`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          dispatch.search.searchSeriesData({ searchSeriesData: responseJson });
        })
        .catch((error) => {
          alert("error!");
        });
    },
    async searchMoviesAsync(payload: string, state) {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=597bf54e&s=${payload}&type=movie`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          dispatch.search.searchMoviesData({ searchMoviesData: responseJson });
        })
        .catch((error) => {
          alert("error!");
        });
    },
    async masterDetailAsync(payload: string, state) {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=597bf54e&i=${payload}&plot=full`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("responseJson", responseJson);
          dispatch.search.masterDetailData({ masterDetailData: responseJson });
        })
        .catch((error) => {
          alert("error!");
        });
    },
  }),
});
