import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



// Acción asíncrona para obtener posts
export const fetchPost = createAsyncThunk(
  'post/fetchPost',
    async (postUrl: string) => {
    const response = await fetch(`/api/blog/post?postUrl=${postUrl}`);
    const data = await response.json();
        
    return data.data
  }
);


export interface IPost {
    author: string
    category: { id: number, name: string }
    createdAt?: string
    description: string,
    id: number,
    image: string
    title: string,
    updatedAt?: string
    url: string
    views: number
}
export interface IPostSliceState {
  data: IPost,
    status: string,
    error: any
}
const initialState: IPostSliceState = {
    data: {
        author: "",
        category: {id: 0, name: ""},
        createdAt: "",
        description: "",
        id: 0,
        image: "",
        title: "",
        updatedAt: "",
        url: "",
        views: 0
    },
    status: 'idle',
    error: null 
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  
  reducers: {},

    extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        const newData = action.payload;        
        if (JSON.stringify(state.data) !== JSON.stringify(newData)) {
          state.status = 'succeeded';
          state.data = newData;
        }
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {  } = postSlice.actions;

export default postSlice.reducer;