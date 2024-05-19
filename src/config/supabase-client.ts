import { createClient } from '@supabase/supabase-js';
import { getEnvValue } from '../utils';

let supabase: ReturnType<typeof createClient>;

export function loadSupabase() {
  const supabaseUrl = getEnvValue('VITE_APP_SUPABASE_URL');
  const supabaseKey = getEnvValue('VITE_APP_SUPABASE_ANON_KEY');

  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseKey);
  }
  return supabase;
}
