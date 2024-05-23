import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from 'react-router-dom';
import { loadSupabase, TABLE_NAME } from '../config';
import { OrderBy, PATH } from '../constant';
import type { Recipe, Recipes } from '../types';

const supabase = loadSupabase();

export async function getRecipes({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const sortKey = url.searchParams.get('sortKey') || OrderBy.CreatedAt;
  const { data: recipes, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .order(sortKey, { ascending: false })
    .returns<Recipes>();

  if (error) {
    throw new Error(error.message);
  }
  return { recipes, sortKey };
}

export async function getRecipe({ params }: LoaderFunctionArgs) {
  const { data: recipe, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .match({ id: params.id })
    .limit(1)
    .maybeSingle<Recipe>();

  if (error) {
    throw new Error(error.message);
  }
  if (!recipe) {
    throw new Response('Recipe Not Found', { status: 404 });
  }
  return recipe;
}

export async function createRecipe({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // validate data
  const errors = validate(data);
  if (Object.keys(errors).length > 0) {
    return errors;
  }
  // insert data
  const { error } = await supabase.from(TABLE_NAME).insert([data]);
  if (error) {
    throw new Error(error.message);
  }
  return redirect(PATH.Home);
}

export async function updateRecipe({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // validate data
  const errors = validate(data);
  if (Object.keys(errors).length > 0) {
    return errors;
  }
  // update data
  const { error } = await supabase
    .from(TABLE_NAME)
    .update(data)
    .match({ id: params.id });

  if (error) {
    throw new Error(error.message);
  }
  return redirect(PATH.Home);
}

export async function deleteRecipe({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const recipeId = formData.get('recipeId');
  console.info(`Deleting card with id: ${recipeId}...`);
  const { error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .match({ id: recipeId })
    .single();

  if (error) {
    throw new Error(error.message);
  }
  console.info(`Deleted card with id: ${recipeId}`);
  return null;
}

function validate(data: Record<string, FormDataEntryValue>) {
  const errors: Record<string, string> = {};
  if (!data.title) {
    errors.title = 'Title is required';
  }
  if (Number(data.rating) < 0 || Number(data.rating) > 5) {
    errors.rating = 'Rating must be between 0 and 10';
  }
  if (!data.method) {
    errors.method = 'Method is required';
  }
  return errors;
}
