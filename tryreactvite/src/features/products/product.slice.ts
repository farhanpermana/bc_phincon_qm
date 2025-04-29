import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url?: string;
}

interface ProductState {
  products: Product[];
  total: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  total: 0,
  status: 'idle',
  error: null,
};

const API_URL = import.meta.env.VITE_API_URL;

// Async thunk to fetch products with params
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params: URLSearchParams) => {
    const res = await fetch(`${API_URL}/products?${params}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return await res.json() as { products: Product[]; total: number };
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<{ products: Product[]; total: number }>) => {
        state.products = action.payload.products;
        state.total = action.payload.total;
        state.status = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch products';
      });
  }
});

export default productsSlice.reducer;
