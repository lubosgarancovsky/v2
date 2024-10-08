import { useState } from 'react';
import emailjs from '@emailjs/browser';

export type ContactFormState = 'success' | 'error' | 'idle' | 'loading';
export const useContactForm = (formRef: React.RefObject<HTMLFormElement>) => {
  const [state, setState] = useState<ContactFormState>('idle');

  const send = async (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      setState('loading');
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        );
      } catch (_) {
        setState('error');
      } finally {
        setState('success');
        e.target.reset();
      }
    }
  };

  return { send, state, setState };
};
