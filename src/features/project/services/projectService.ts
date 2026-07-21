import { supabase } from "@/lib/supabase";

interface CreateProjectInput {
  name: string;
  description: string;
}

export async function createProject({
  name,
  description,
}: CreateProjectInput) {
  const {
    data: userData,
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  const user = userData.user;

  if (!user) {
    throw new Error("User is not authenticated");
  }

  const {
    data,
    error,
  } = await supabase
    .from("projects")
    .insert({
      user_id: user.id,
      name,
      description,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}