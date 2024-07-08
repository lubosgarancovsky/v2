import React, { useRef } from 'react';
import { useContactForm } from './useContactForm';

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { send, state, setState } = useContactForm(formRef);

  return (
    <>
      <form ref={formRef} className="flex flex-col gap-6" onSubmit={send}>
        <textarea
          className="bg-background-100 rounded-md p-4"
          placeholder="Your message here..."
          name="message"
          rows={6}
          required
        />
        <button
          type="submit"
          color="primary"
          className="ml-auto text-black bg-foreground hover:bg-neutral-200 px-6 py-2 rounded-md active:scale-95 duration-150"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
