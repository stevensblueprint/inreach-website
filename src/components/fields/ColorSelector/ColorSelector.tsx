import { cn } from '../../../lib/utils'
import * as React from 'react'
import { wrapFieldsWithMeta,  } from 'tinacms'

const colorOptions = [
	'Ally Green',
	'Light Grey',
	'Soft Black',
	'Dark Grey',
	'White',
	'Teal',
	'Cornflower',
	'Cool Grey',
	'Pink',
	'Light Blue',
	'Purple',
	'Dark Blue',
	'Green',
	'Yellow',
	'Orange',
	'Red',
	'Brown',
	'Dark Brown',
]

export const ColorSelector = wrapFieldsWithMeta(({ input }) => {

  return (
    <>
      <input {...input} type='text' id={input.name} className='hidden' />
      <div className='flex gap-2 flex-wrap'>
        {colorOptions.map((color) => {
          return (
            <button
              key={color}
              className={cn('transition-all font-medium p-2 w-max h-9 rounded-lg bg-white leading-none shadow-md', {
                'bg-blue-500 text-white': input.value === color,
              })}
              onClick={() => {
                input.onChange(color)
              }}
            >
              {color}
            </button>
          )
        })}
      </div>
    </>
  )
}) as any