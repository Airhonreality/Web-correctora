import { getPortfolioItemsForSelect } from "@/lib/db/queries";
import { TestimonialForm } from "../testimonial-form";
import { createTestimonialAction } from "../actions";

export default async function NewTestimonialPage() {
  const portfolioOptions = await getPortfolioItemsForSelect();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-2xl italic">Nuevo testimonio</h1>
      <TestimonialForm action={createTestimonialAction} portfolioOptions={portfolioOptions} />
    </div>
  );
}
