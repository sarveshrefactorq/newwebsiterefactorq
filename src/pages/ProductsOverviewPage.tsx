import { products } from "../data/products"
import { usePageMeta } from "../lib/meta"

import { PageIntro } from "../components/ui/PageIntro"
import { ProductCard } from "../components/ui/ProductCard"
import { Reveal } from "../components/ui/Reveal"

export function ProductsOverviewPage() {
  usePageMeta(
    "Products",
    "Explore LeadGen, CloudGuardian, and voice-agent from RefactorQ.AI.",
  )

  return (
    <>
      <PageIntro
        body="The products section is separate from services by design. These products represent repeatable operational patterns that RefactorQ has shaped through consulting and delivery work."
        eyebrow="Products"
        title="Operational products built from consulting patterns that proved worth packaging."
      />
      <section className="page-shell py-14 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <Reveal key={product.slug}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
