"use client"
import Link from 'next/link';
import * as React from 'react';

export interface ISearchFormResetProps {
}

export function SearchFormReset ({query}: {query?:string}) {
    const reset = ()=>{
            const form = document.querySelector('.search-form') as HTMLFormElement;
            if(form){
                form.reset();
            }
        }
  return (
    <button type='reset' onClick={reset}>
        <Link href={'/'} className='search-btn text-white'>X</Link>
    </button>
  );
}
