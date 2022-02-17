import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async () => {
        const response = await fetch('https://picsum.photos/v2/list?page=3&limit=9');
        const formattedResponse = await response.json();
        return formattedResponse;
    }
    )

export const gallerySlice = createSlice({
     name: 'gallery',
     initialState: {
        photos:[],
        isLoading:false, 
     },
     extraReducers: {
         [getPhotos.pending]: (state) => {
           state.isLoading= true;  
         },
         [getPhotos.fulfilled]: (state,action) => {
             state.photos = action.payload;
             state.isLoading = false
         },
         [getPhotos.rejected]: (state,action) => {
             state.isLoading = false;
         }
     }
});

/*
keyword:
  .pending (chua giai quyet) wait async loading to get api
  .fulfilled (hoan thanh):api loaded success
*/

export default gallerySlice.reducer