'use server';

import { revalidatePath } from 'next/cache';

export async function submitLeadMagnetForm(formData: FormData) {
  // In a real implementation, this would connect to a database or email service
  // For now, we'll just simulate a successful submission

  // Extract form data
  const name = formData.get('name');
  const email = formData.get('email');
  const industry = formData.get('industry');

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log('Lead magnet form submitted:', { name, email, industry });

  // Revalidate the path to update any server components
  revalidatePath('/');

  return {
    success: true,
    message:
      'Thank you for your submission! Your guide has been sent to your email.',
  };
}
