import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { Pre } from './components'

const components = {
  h1: ({ children, ...props }: any | undefined) => (
    <h1 className='scroll-m-24' {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className='scroll-m-24' {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className='scroll-m-24' {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4 className='scroll-m-24' {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: any) => (
    <h5 className='scroll-m-24' {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: any) => (
    <h6 className='scroll-m-24' {...props}>
      {children}
    </h6>
  ),

  // How to create a copy code button https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
  pre: ({ ...props }: any) => (<Pre {...props} />),

  a: ({ children, ...props }: any) => (
    <Link {...props} target='_blank' className='tracking-wide text-secondary transition-all hover:border-b hover:border-b-primary-hover hover:text-primary-hover'>{children}</Link>
  ),
  p: ({ children, ...props }: any) => (
    <p className='my-10 leading-normal tracking-wide' {...props}>
      {children}
    </p>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote className=' mt-6 border-l-2 border-l-text pl-6 italic' {...props}>
      {children}
    </blockquote>
  ),

  ul: ({ children, ...props }: any) => (
    <ul className='list-disc' {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className='list-decimal' {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className='' {...props}>
      {children}
    </li>
  ),

  table: ({ children, ...props }: any) => (
    <table className='border-collapse' {...props}>
      {children}
    </table>
  ),
  th: ({ children, ...props }: any) => (
    <th className='border border-foreground bg-foreground text-center' {...props}>
      {children}
    </th>
  ),
  tr: ({ children, ...props }: any) => (
    <tr className='' {...props}>
      {children}
    </tr>
  ),
  td: ({ children, ...props }: any) => (
    <td className='border border-foreground px-6 py-2 text-center' {...props}>
      {children}
    </td>
  ),

  // ({ children, className, ...props }: any) => (
  //   <pre className={`overflow-scroll max-w-full ${className}`} {...props}>
  //     {children}
  //   </pre>

  // h1: ({ className, ...props }: ComponentType) => (
  //   <h1
  //       className={cn(
  //         'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
  //         className,
  //       )}
  //       {...props}
  //   />
  // ),
  // h2: ({ className, ...props }: ComponentType) => (
  //   <h2
  //       className={cn(
  //         'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
  //         className,
  //       )}
  //       {...props}
  //   />
  // ),
  // h3: ({ className, ...props }: ComponentType) => (
  //   <h3
  //       className={cn(
  //         'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
  //         className,
  //       )}
  //       {...props}
  //   />
  // ),
  // h4: ({ className, ...props }: ComponentType) => (
  //   <h4
  //       className={cn(
  //         'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
  //         className,
  //       )}
  //       {...props}
  //   />
  // ),
  // h5: ({ className, ...props }: ComponentType) => (
  //   <h5
  //       className={cn(
  //         'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
  //         className,
  //       )}
  //       {...props}
  //   />
  // ),
  // h6: ({ className, ...props }: ComponentType) => (
  //   <h6
  //       className={cn(
  //         'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
  //         className,
  //       )}
  //       {...props}
  //   />
  // ),
  // // a: ({ className, ...props }: ComponentType) => (
  // //   <a
  // //       className={cn('font-medium underline underline-offset-4', className)}
  // //       {...props}
  // //   />
  // // ),
  // p: ({ className, ...props }: ComponentType) => (
  //   <p
  //       className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
  //       {...props}
  //   />
  // ),
  // ul: ({ className, ...props }: ComponentType) => (
  //   <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  // ),
  // ol: ({ className, ...props }: ComponentType) => (
  //   <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  // ),
  // li: ({ className, ...props }: ComponentType) => (
  //   <li className={cn('mt-2', className)} {...props} />
  // ),
  // // blockquote: ({ className, ...props }: ComponentType) => (
  // //   <blockquote
  // //       className={cn(
  // //         'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
  // //         className,
  // //       )}
  // //       {...props}
  // //   />
  // // ),
  // img: ({
  //   className,
  //   alt,
  //   ...props
  // }: React.ImgHTMLAttributes<HTMLImageElement>) => (
  //   // eslint-disable-next-line @next/next/no-img-element
  //   <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  // ),
  // hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  // table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
  //   <div className="my-6 w-full overflow-y-auto">
  //     <table className={cn('w-full', className)} {...props} />
  //   </div>
  // ),
  // tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  //   <tr
  //       className={cn('m-0 border-t p-0 even:bg-muted', className)}
  //       {...props}
  //   />
  // ),
  // th: ({ className, ...props }: ComponentType) => (
  //   <th
  //       className={cn(
  //         'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
  //         className,
  //       )}
  //       {...props}
  //   />
  // ),
  // td: ({ className, ...props }: ComponentType) => (
  //   <td
  //       className={cn(
  //         'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
  //         className,
  //       )}
  //       {...props}
  //   />
  // ),
  // pre: ({ className, ...props }: ComponentType) => (
  //   <pre
  //       className={cn(
  //         'mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4',
  //         className,
  //       )}
  //       {...props}
  //   />
  // ),
  // // code: ({ className, ...props }: ComponentType) => (
  // //   <code
  // //       className={cn(
  // //         'relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm',
  // //         className,
  // //       )}
  // //       {...props}
  // //   />
  // // ),
  // Image,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
