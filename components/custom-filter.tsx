"use client"

import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';

function CustomFilter() {
  return (
    <div className="w-fit">
      <Listbox>
        <div className="relative w-fit z-10">
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>Span</span>
            <Image 
              src={'/chevron-up-down.svg'}
              alt='chevron_up-down'
              width={20}
              height={20}
              className='ml-4 object-contain'
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom="opacity-100"
            leaveTo='opacity-0'
          >
            <Listbox.Options className={'custom-filter__options'}>
              <Listbox.Option>
                <>
                  <span className='block truncate'>Option</span>
                </>
              </Listbox.Option>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter