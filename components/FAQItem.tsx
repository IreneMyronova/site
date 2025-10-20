'use client';
import { useState } from "react";
import { Icon } from './Icon';

type FAQItemProps = {
  question: string;
  answer: string;
};

const iconClasses = 'size-6 sm:size-8 opacity-60 text-slate-600 dark:text-[#a0b6dc]'

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full flex flex-col items-start p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700 transition-shadow dark:transition-colors group overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <p
        className={`w-full font-bold text-sm sm:text-base text-balance flex justify-between items-start gap-3 sm:gap-2 transition-[height] duration-500 ${
          open ? "h-auto" : "max-h-[120px]"
        }`}
      >
        {question}
        <span>
          {open ? <Icon name="faqMinus" className={iconClasses} /> :  <Icon name="faqPlass" className={iconClasses} />}
        </span>
      </p>

      <small
        className={`text-slate-600 dark:text-[#9fb6db] text-sm block text-balance transition-opacity duration-500 ${
          open ? "opacity-100 mt-3 sm:mt-2" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        {answer}
      </small>
    </div>
  );
}


