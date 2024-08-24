import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//* Interfaces
interface IUser {
        id: number;
        name: string;
      email: string;
      roles: {id: number, name: string}[]
}; 
export interface IUserSliceState {
    user: IUser
    isAuthenticated: boolean
    isAdmin: boolean
    accessToken: string;
    status: "idle" | "loading" | "failed";
    error: unknown | null | string
}
interface ILoginResponse {
  payload: {
    user: IUser
    accessToken: string
  }
  }



//* Login Fetch
export const fetchLogin = createAsyncThunk<ILoginResponse, { email: string, password: string }>(
  'auth/fetchLogin',
  async ({ email, password }, { rejectWithValue }) => {
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

      if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    return data;
  }
);

//* Redux User Fetch
export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async () => {
    
    const response = await fetch('http://localhost:8000/api/users/me', {
    // const response = await fetch('/api/auth/me', {
      method: 'GET',
      credentials: 'include'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const data = await response.json(); 
    
    return data.payload
  }
);


//* Slice
const initialState: IUserSliceState = {
    user: { id: 0, name: '', email: '', roles: [] },
    accessToken: '',
    isAuthenticated: false,
    isAdmin: false,
    status: "idle",
    error: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

    reducers: {
      loginState(state, action) {
        
        state.isAuthenticated = true;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        if (action.payload.payload.user.roles.some((role: any) => role.name === "admin")) {
          state.isAdmin = true;
        }
      },
      logoutState(state) {
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.user = { id: 0, name: '', email: '', roles: [] };
      state.accessToken = "";
      state.status = 'idle';
    },
  },

    extraReducers: (builder) => {
      builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading';
      })
        .addCase(fetchLogin.fulfilled, (state, action) => {
        
        state.status = 'idle';
        state.accessToken = action.payload.payload.accessToken;
        state.isAuthenticated = true;          
        state.user = action.payload.payload.user;
        if (action.payload.payload.user.roles.some((role: any) => role.name === "admin")) {
          state.isAdmin = true;
        }
      })
      .addCase(fetchLogin.rejected, (state, action) => {
          state.status = 'failed';
          
          state.error = action.error.message;
      })
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
        .addCase(fetchUser.fulfilled, (state, action) => { 
          
        state.status = 'idle';
        state.isAuthenticated = true;          
        state.user = action.payload
        if (action.payload.roles.some((role: any) => role.name === "admin")) {
          state.isAdmin = true;
        }

      })
      .addCase(fetchUser.rejected, (state, action) => {
          state.status = 'failed';
          
          state.error = action.error.message;
      });

  }
});

export const { loginState, logoutState } = authSlice.actions;

export default authSlice.reducer;
