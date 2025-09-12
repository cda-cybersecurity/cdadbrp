import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={1000}
      height={1000}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[12.375rem] w-full h-[56px]', className)}
      src="https://images.squarespace-cdn.com/content/v1/65dc63f60b27af5692b39b37/cb403798-ac3f-428c-92f7-b623f6a93f9c/CDA+LOGO.png"
    />
  )
}
