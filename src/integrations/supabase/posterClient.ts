import { createClient } from '@supabase/supabase-js';

const POSTER_SUPABASE_URL = import.meta.env.VITE_POSTER_SUPABASE_URL;
const POSTER_SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_POSTER_SUPABASE_PUBLISHABLE_KEY;

export const posterSupabase = createClient(POSTER_SUPABASE_URL, POSTER_SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
