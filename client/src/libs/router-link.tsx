import { ReactNode, MouseEvent } from 'react'
import { useRouter } from 'next/router'

export function RouterLink({ children, href, ...props }: Props) {
  const router = useRouter()
  const defClassName = `${props.className || ''} router-link`

  // prettier-ignore
  const className = (href === router.asPath)
			? `${defClassName} ${props.activeClass || 'router-link-active'}`
			: defClassName

  // __FUNCTIONS
  const handleRouterLink = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault()
    router.push(href)
  }

  // __RENDER
  return (
    <a className={className.trim()} href={href} {...props} onClick={handleRouterLink}>
      {children}
    </a>
  )
}

export interface Props {
  children: ReactNode;
  className?: string;
  activeClass?: string;

  /**
   * Specifies the URL of the page the link goes to
   */
  href: string;

  /**
   * Specifies where to open the linked document
   */
  target?: '_blank' | '_parent' | '_self' | '_top';

  /**
   * Specifies the relationship between the current document and the linked document
   */
  rel?:
    | 'alternate'
    | 'author'
    | 'bookmark'
    | 'external'
    | 'help'
    | 'license'
    | 'next'
    | 'nofollow'
    | 'noreferrer'
    | 'noopener'
    | 'prev'
    | 'search'
    | 'tag';

  /**
   * Specifies which referrer information to send with the link
   */
  referrerpolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
}
