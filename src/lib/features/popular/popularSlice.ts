import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Acción asíncrona para obtener posts
export const fetchPopularPosts = createAsyncThunk(
  'blog/fetchPopularPosts',
  async (limit: number ) => {
    // const response = await fetch(`/api/blog/popular?limit=${limit}`);
    const response = await fetch(`http://localhost:8000/api/blog/popular?limit=${limit}`);
      const data = await response.json();
    
    return data.data
  }
);


export interface IPopularPosts {
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
export interface IPopularPostsSliceState {
    posts: IPopularPosts[],
    status: string,
    error: any
}
const initialState: IPopularPostsSliceState = {
    posts: [],
    status: 'idle',
    error: null 
}

export const popularSlice = createSlice({
  name: 'popular',
  initialState,
  
  reducers: {},

    extraReducers: (builder) => {
    builder
      .addCase(fetchPopularPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularPosts.fulfilled, (state, action) => {
        const newData = action.payload;        

        if (JSON.stringify(state.posts) !== JSON.stringify(newData)) {
          state.status = 'succeeded';
          state.posts = newData;
        }
      })
      .addCase(fetchPopularPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {  } = popularSlice.actions;

export default popularSlice.reducer;