import Image from 'next/image'
import Link from 'next/link'
import type { Doc } from 'contentlayer/generated'
import { authors } from '@/utils/authors'
import { SocialIcon } from '@/Icons/Social/Social'
import { GithubIcon } from '@/Icons/Social'

interface AuthorProps {
  doc: Doc
}

export function Author({ doc }: AuthorProps) {
  const author = authors.find(item => item.id === doc.author)
  if (!author) {
    return <></>
  } else {
    const githubSocial = author.socials.find(social => social.id === 'github')

    return (
      <section className='relative rounded-sm border border-text p-5'>
        <h2 className='absolute -top-4 bg-background px-2'>About the author</h2>
        <div className='flex flex-col items-start gap-2 md:flex-row'>
          <Image
              className='rounded-full border-2 border-primary'
              src={author.image}
              width={80}
              height={80}
              unoptimized
              alt={`Profile of ${author.fullName}`}
          />

          <div className='flex-1'>
            <small className='text-xs'>Written by:</small>
            <div className='flex items-center gap-1'>
              <h3>{author.fullName}</h3>
              {' - '}
              <small className='text-xs'>{author.profession}</small>
            </div>

            <p className='mt-2'>{author.shortDescription}</p>

            <div className='mt-4 flex items-center gap-3'>
              {author.socials.map(social => (
                <Link href={social.link} key={social.id} className=' text-text'>
                  <SocialIcon type={social.id} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            {
              githubSocial
                ? (
                  <Link className='flex items-center gap-2 rounded bg-[#000000] p-2 transition-all hover:text-title' href={githubSocial.link}>
                    <GithubIcon />
                    <span>Follow me</span>
                  </Link>
                  )
                : null
            }
          </div>
        </div>
      </section>
    )
  }
}
