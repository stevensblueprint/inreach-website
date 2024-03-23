// @ts-nocheck
import React from 'react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Button } from '@mantine/core'
import Link from 'next/link'

const components = {
  ActionButton: (props) => {
    return (
      <Button variant='filled' color='#65676B' component={Link} href={`${props.link}`} >{props.actionText}</Button>
    )
  }
}

export const TakeAction = ({data}) => {
  return (
    <div className='border-2 border-gray-400 rounded-lg flex flex-col justify-between items-center gap-3 max-w-lg min-w-full text-black p-4 bg-white'>
      {data.title &&
        <h1 className='lg:text-2xl md:text-xl text-2xl font-bold'>{data.title}</h1>
      }
      {data.text &&
        <p className='md:text-md text-sm lg:text-lg'>{data.text}</p>
      }
      <TinaMarkdown components={components} content={data.body} />
    </div>
  )
}
export const TakeActionContainer = ({data}) => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 p-6 gap-4'>
      {data.items &&
        data.items.map((block, i: number) => {
          return (
            <TakeAction data={block} key={i} />
          )
        })
      }
    </div>
  )
}

export const takeActionBlockTemplate = {
  name: "actions",
  label: "Actions",
  fields: [
    {
      type: "object",
      label: "Action Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title
          }
        },
      },
      fields: [
        {
          type: "string",
          label: "Title", 
          name: "title"
        },
        {
          type: "string",
          label: "Text", 
          name: "text"
        },
        {
          label: "Body",
          type: "rich-text",
          name: "body",
          isBody: true,
          templates: [
            {
              name: "ActionButton",
              label: "Action Button",
              fields: [
                {
                  type: "string",
                  name: "actionText",
                  label: "Action Button Text"
                }, 
                {
                  type: "string",
                  name: "link",
                  label: "Button Link",
                  required: true
                }
              ]
            }
          ]
        },
      ]
    }
  ]
}

