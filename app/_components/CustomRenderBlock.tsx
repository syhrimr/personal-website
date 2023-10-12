import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import { PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'

import { PortableText } from "@portabletext/react"
import Image from 'next/image'
import Balancer from "react-wrap-balancer"

type Props = {
  params: PortableTextBlock[]
}

function SampleImageComponent({ value, isInline }: { value: any, isInline: boolean }) {
  const { width, height } = getImageDimensions(value)
  const imageSrc = urlBuilder()
        .image(value)
        .width(isInline ? 100 : 800)
        .height(isInline ? 80 : 640)
        .fit('max')
        .auto('format')
        .url();

  console.log(imageSrc)

  return (
    <Image
      src={imageSrc}
      alt={value.alt || 'blog image'}
      width={width}
      height={height}
      loading="lazy"
      style={{
        display: isInline ? 'inline-block' : 'block',
        aspectRatio: width / height,
      }}
    />
  )
};

function SampleCodeBlockComponent({ value }: { value: any }) {
  const { languange, code } = value;
  
  return (
    <pre
      className="block bg-slate-200"
      style={{
        padding: "0.75rem",
        margin: "1rem 0",
        boxSizing: "border-box",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        width: "calc(100% - 5rem)",
        overflowX: "scroll",
        backgroundColor: "rgb(226 232 240 / 1)"
      }}
    >
      <code
        className="whitespace-pre-wrap"
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word"
        }}
      >
        {code}
      </code>
    </pre>
  )
}

export default function CustomRenderBlock({ params }: Props) {
  const components: PortableTextComponents = {
    types: {
      image: SampleImageComponent,
      code: SampleCodeBlockComponent
    },
    marks: {
      em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,
      link: ({value, children}) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
        const rel = target === '_blank' ? 'noreferrer noopener' : '';
        return (
          <a
            href={value?.href}
            target={target}
            rel={rel}
            className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
          >
            {children}
          </a>
        )
      },
    },
    block: {
      h1: ({children}) => <h1 className="text-5xl my-5 drop-shadow font-extrabold">{children}</h1>,
      h2: ({children}) => <h2 className="text-3xl my-5 drop-shadow font-extrabold">{children}</h2>,
      h3: ({children}) => <h3 className="text-2xl my-5 drop-shadow font-extrabold">{children}</h3>,
      normal: ({children}) => <p className="inline-block py-3">{children}</p>,
      blockquote: ({children}) => <blockquote className="p-4 mt-2 mb-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800my-3">{children}</blockquote>,
    },
    list: {
      bullet: ({children}) => <ul className="mb-2" style={{listStylePosition: "outside",listStyleType: "disc"}}>{children}</ul>,
      number: ({children}) => <ol className="mb-2" style={{listStylePosition: "outside", listStyleType: "decimal"}}>{children}</ol>,
    },
    listItem: {
      bullet: ({children}) => <li className="pb-2 ml-4">{children}</li>,
      number: ({children}) => <li className="pb-2 ml-4">{children}</li>,
    }
  };

  return (
    <Balancer>
      <PortableText
        value={params}
        components={components}
      />
    </Balancer>
  )
}