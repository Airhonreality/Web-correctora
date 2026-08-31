import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { testimonials } from "@/lib/db/schema";
import { getPortfolioItemsForSelect } from "@/lib/db/queries";
import { TestimonialForm } from "../../testimonial-form";
import { updateTestimonialAction } from "../../actions";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonialId = Number(id);
  const [item] = await db
    .select()
    .from(testimonials)
    .where(eq(testimonials.id, testimonialId))
    .limit(1);

  if (!item) notFound();

  const portfolioOptions = await getPortfolioItemsForSelect();
  const updateWithId = updateTestimonialAction.bind(null, testimonialId);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-2xl italic">Editar testimonio</h1>
      <TestimonialForm
        action={updateWithId}
        initialValues={item}
        portfolioOptions={portfolioOptions}
      />
    </div>
  );
}
