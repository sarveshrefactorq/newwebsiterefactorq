import { services } from "../data/services"
import { products } from "../data/products"
import { caseStudies } from "../data/caseStudies"

export function findService(slug?: string) {
  return services.find((service) => service.slug === slug)
}

export function findProduct(slug?: string) {
  return products.find((product) => product.slug === slug)
}

export function findCaseStudy(slug?: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}
