import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface IBlogResponse {
    currentPage: number,
    totalPages: number,
    totalItems: number,
    posts: IBlog[],
}

// Acción asíncrona para obtener posts
export const fetchPosts = createAsyncThunk<IBlogResponse, {  page: number, limit: number}>(
  'blog/fetchPosts',
  async ({ page, limit }: {  page: number, limit: number}) => {
    const response = await fetch(`http://localhost:8000/api/blog?page=${page}&limit=${limit}`);
    // const response = await fetch(`/api/blog/posts?page=${page}&limit=${limit}`);
      const data = await response.json();
    
    return data.data
  }
);


export interface IBlog {
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
export interface IBlogSliceState {
  data: {
    currentPage: number,
    totalPages: number,
    totalItems: number,
    posts: IBlog[],
    }
    status: string,
    error: any
}
const initialState: IBlogSliceState = {
    data: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        posts: [],
    },
    status: 'idle',
    error: null 
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  
  reducers: {},

    extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const newData = action.payload;        

        if (JSON.stringify(state.data) !== JSON.stringify(newData)) {
          state.status = 'succeeded';
          state.data = newData;
        }
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {  } = blogSlice.actions;

export default blogSlice.reducer;