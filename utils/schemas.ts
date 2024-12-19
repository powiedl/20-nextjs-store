// meine Version
import { z, ZodSchema } from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'name must be at least 2 characters.',
    })
    .max(100, {
      message: 'name must be less than 100 characters.',
    }),
  company: z.string(),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: 'price must be a positive number.',
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'description must be between 10 and 1000 words.',
    }
  ),
});

export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  console.log('validateImageFile');
  const maxUploadSize = 1024 * 1024; // 1 MB
  const acceptedFileTypes = ['image/'];
  const z1 = z.instanceof(File);
  console.log('validateImageFile - it is a file ...');
  const z2 = z1.refine(
    (file) => {
      return !file || file.size <= maxUploadSize;
    },
    {
      message: 'File size must be less than 1 MB and must be an image.',
    }
  );
  console.log('validateImage, it is small enough ...');
  const z3 = z2.refine((file) => {
    return (
      !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
    );
  }, 'File must be an image.');
  console.log('validateImage, it is an image ...');
  return z3;
}
export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  console.log('validateWithZodSchema');
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(' '));
  }
  return result.data;
}

/*
// Johns Version
import { z, ZodSchema } from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'name must be at least 2 characters.',
    })
    .max(100, {
      message: 'name must be less than 100 characters.',
    }),
  company: z.string(),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: 'price must be a positive number.',
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'description must be between 10 and 1000 words.',
    }
  ),
});
export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ['image/'];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, 'File size must be less than 1MB')
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, 'File must be an image');
}

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(','));
  }
  return result.data;
}
*/
