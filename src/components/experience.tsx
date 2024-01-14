import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Arrow } from './icons'

export default function Experience() {
  const t = useTranslations('Title')
  const p = useTranslations('Profession')
  const d = useTranslations('Description')

  const EXPERIENCIE = [
    {
      date: t('moment'),
      title: p('frontend'),
      description: d('f-description'),
      link: 'https://info.domiplace.com',
    },
    {
      date: 'Noviembre 2023',
      title: 'Full Stack Free Lance - Ecuador',
      description:
        'Over a period of time, I had the privilege of playing the role of Full Stack Freelance in Ecuador, contributing to the success of Nestlé through the development and maintenance of a comprehensive promotions application. In this position, I led the creation and evolution of both the frontend and backend, ensuring an optimized user experience and robust system performance.',
      link: 'https://www.nestle-contigo.ec/promotangogamers',
    },
    {
      date: 'Noviembre 2022',
      title: 'Frontend Mentor - Cesar',
      description:
        'I played the role of teacher at the Syntactic academy in Valledupar, teaching React classes in person. In this teaching role, I provide the necessary foundations in React to train students in the effective development and management of web applications.',
    },
  ]
  return (
    <>
      <ol className='relative border-s border-gray-200 ml-3'>
        {EXPERIENCIE.map((experiencie, i) => (
          <li className='mb-10 ms-4' key={i}>
            <div className='absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-indigo-100 bg-white'></div>
            <time className='mb-1 text-sm font-normal text-primary'>
              {experiencie.date}
            </time>
            <h3 className='text-xl font-semibold text-tertiary mt-2'>
              {experiencie.title}
            </h3>
            <p className='mb-4 text-base font-normal text-pretty text-secondary'>
              {experiencie.description}
            </p>
            {experiencie.link && (
              <Link
                href={experiencie.link}
                target='_blank'
                className='bg-background border dark:border-white/10 border-gray-300 rounded-full inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110'
              >
                Know more... <Arrow />
              </Link>
            )}
          </li>
        ))}
      </ol>
    </>
  )
}
