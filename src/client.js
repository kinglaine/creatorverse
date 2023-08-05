import { createClient } from '@supabase/supabase-js';

const URL = 'https://apbcimnemsjqhtiiuxjt.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwYmNpbW5lbXNqcWh0aWl1eGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwOTYwMzIsImV4cCI6MjAwNjY3MjAzMn0.wKVlshXCgBZiValm5l-ckQ9S6ARJV7fBEY9dCn_0Rz8';

export const supabase = createClient(URL, API_KEY);