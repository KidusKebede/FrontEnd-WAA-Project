import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import { setLoading } from "../../store/loading/loading";
export const propertySlice = createSlice({
  name: "property",
  initialState: {
    properties: [],
    propertyDetail: {},
  },
  reducers: {
    setProperties: (state, { payload }) => {
      state.properties = payload;
    },
    setPropertyDetail: (state, { payload }) => {
      state.propertyDetail = payload;
    },
  },
});

export const { setProperties, setPropertyDetail } = propertySlice.actions;

export function fetchProperties(filterData = null) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    await axios
      .get("http://localhost:8080/api/v1/properties/", {
        params: filterData,
      })
      .then((response) => {
        dispatch(setProperties(response.data.data));
        //dispatch(setLoading(false));
      })
      .catch((er) => {
        //dispatch(setLoading(false));
      });
  };
}

export function fetchPropertyDetail(id) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    await axios
      .get("http://localhost:8080/api/v1/properties/" + id)
      .then((response) => {
        dispatch(setPropertyDetail(response.data.data));
        //dispatch(setLoading(false));
      })
      .catch((er) => {
        //dispatch(setLoading(false));
      });
  };
}

// export const

export default propertySlice.reducer;