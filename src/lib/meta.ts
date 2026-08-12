import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { SITE_URL } from "../config/site"

export function ensureMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(
    selector,
  ) as HTMLMetaElement | HTMLLinkElement | null

  if (!element) {
    element = (document.createElement(
      selector.startsWith("link") ? "link" : "meta",
    ) as HTMLMetaElement | HTMLLinkElement)

    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

export function usePageMeta(title: string, description: string) {
  const location = useLocation()

  useEffect(() => {
    const canonical = `${SITE_URL}${location.pathname}`

    document.title = `${title} | RefactorQ.AI`

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: description,
    })

    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: `${title} | RefactorQ.AI`,
    })

    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    })

    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    })

    ensureMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "RefactorQ.AI",
    })

    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: `${title} | RefactorQ.AI`,
    })

    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    })

    ensureMeta('link[rel="canonical"]', { rel: "canonical", href: canonical })
  }, [description, location.pathname, title])
}
