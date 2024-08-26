import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Acción asíncrona para obtener posts
export const fetchLatestPosts = createAsyncThunk(
  'blog/fetchLatestPosts',
  async (limit: number ) => {
    // const response = await fetch(`/api/blog/latest?limit=${limit}`);
    const response = await fetch(`http://localhost:8000/api/blog/latest?limit=${limit}`);
      const data = await response.json();
    
    return data.data
  }
);


export interface ILatestPosts {
    author: string
    categoryId?: number
    createdAt?: string
    description: string,
    id: number,
    image: string
    title: string,
    updatedAt?: string
    url: string
}
export interface ILatestPostsSliceState {
    posts: ILatestPosts[],
    status: string,
    error: any
}
const initialState: ILatestPostsSliceState = {
    posts: [],
    status: 'idle',
    error: null 
}

export const latestSlice = createSlice({
  name: 'latest',
  initialState,
  
  reducers: {},

    extraReducers: (builder) => {
    builder
      .addCase(fetchLatestPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLatestPosts.fulfilled, (state, action) => {
        const newData = action.payload;        

        if (JSON.stringify(state.posts) !== JSON.stringify(newData)) {
          state.status = 'succeeded';
          state.posts = newData;
        }
      })
      .addCase(fetchLatestPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {  } = latestSlice.actions;

export default latestSlice.reducer;