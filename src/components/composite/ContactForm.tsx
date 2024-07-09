import React, { useRef } from 'react';
import { useContactForm } from './useContactForm';
import { cn } from '../../utils';

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { send, state } = useContactForm(formRef);

  const isDisabled = state === 'loading';

  return (
    <>
      <form ref={formRef} className="flex flex-col gap-6" onSubmit={send}>
        <textarea
          className={cn('bg-background-100 rounded-md p-4', {
            'outline outline-red-500': state === 'error'
          })}
          placeholder="Your message here..."
          name="message"
          rows={6}
          required
        />
        {state === 'error' && (
          <p className="text-red-500">
            The message could not be sent due to an unexpected error. Please try
            again later.
          </p>
        )}
        <button
          type="submit"
          color="primary"
          className={cn(
            'ml-auto text-black bg-foreground hover:bg-neutral-200 px-6 py-2 rounded-md active:scale-95 duration-150 flex gap-3 items-center',
            {
              'pointer-events-none opacity-70': isDisabled
            }
          )}
          disabled={isDisabled}
        >
          {isDisabled && <div className="loader "></div>}
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
