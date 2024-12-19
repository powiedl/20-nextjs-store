import { createClient } from '@supabase/supabase-js';

const bucket = 'main-bucket';

export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  // const newName = `/users/${timestamp}-${image.name}`; // for a directory
  const newName = `${timestamp}-${image.name}`; // for a single file

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: '3600',
    });
  if (!data) throw new Error('Image upload failed');
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = (url: string) => {
  const imageName = url.split('/').pop(); // Get the last part of the URL
  if (!imageName) throw new Error('Invalid URL');
  return supabase.storage.from(bucket).remove([imageName]);
};
