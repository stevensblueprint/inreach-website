import React, { useRef } from 'react'
import type { RichTextType, Template } from 'tinacms'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { Button } from '@mantine/core'
import Link from 'next/link'
import { Carousel as MantineCarousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import '@mantine/carousel/styles.css'
import { cn } from '../../lib/utils'
import { PageBlocksCarousel } from '~tina/__generated__/types'
import classes from '../carousel/Controls.module.css'

const InfoSection = ({ stats }) => {
  return (
    <div className="info-section">
      {stats.map((stat, index) => (
        <div key={index} className="stat-block">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-description">{stat.description}</div>
        </div>
      ))}
    </div>
  );
};

export const LookingForContainer = () => {
  const stats = [
    {
      number: '500+',
      description: 'anti-LGBTQ+ bills were introduced in 49 U.S. states during 2023, with the majority targeting the trans community',
    },
    {
      number: '43%',
      description: 'of young people (ages 18-24) living in the U.S. reported that they have considered moving as a result of anti-LGBTQ+ legislation, whether that’s relocating to another state or leaving the country altogether',
    },
    {
      number: '4¢',
      description: 'of every $100 awarded by U.S. foundations focuses on trans communities and only 28 cents supports LGBTQ+ issues',
    },
    {
      number: '60+',
      description: 'countries around the world where it remains illegal or fundamentally unsafe to live openly as a LGBTQ+ person',
    },
    {
      number: '3,000,000+',
      description: 'cases backlogged in the U.S. immigration court system',
    },
  ];

  return (
    <div className="looking-for-container">
      <div className="header-block">
        <div className="header">I AM LOOKING FOR</div>
      </div>
      <div className="buttons-block">
        <button className="service-button">HELP & SERVICES FOR MYSELF</button>
        <button className="resources-button">INFORMATION & RESOURCES FOR A CLIENT OR SOMEONE ELSE</button>
        <button className="support-button">HOW TO SUPPORT INREACH AND THE LGBTQ+ COMMUNITY</button>
      </div>
      <InfoSection stats={stats} />
    </div>
  );
};

export const lookingForTemplatelTemplatlookingFlookingFlookingFlookingFForTempl = {
  name: 'lookingFor',
  label: 'Looking For',
  fields: [
    {
      name: 'header',
      type: 'string',
      label: 'Header Text',
    },
    {
      name: 'buttons',
      type: 'object',
      list: true,
      label: 'Buttons',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', type: 'string', label: 'Button Text' },
            { name: 'link', type: 'string', label: 'Button Link' },
          ],
        },
      ],
    },
    {
      name: 'stats',
      type: 'object',
      list: true,
      label: 'Stats',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', type: 'string', label: 'Number' },
            { name: 'description', type: 'rich-text', label: 'Description' },
          ],
        },
      ],
    },
  ],
};
