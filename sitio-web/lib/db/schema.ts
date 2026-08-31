import { pgTable, serial, text, timestamp, boolean, integer } from "drizzle-orm/pg-core";

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  body: text("body").notNull(),
  coverImageUrl: text("cover_image_url"),
  published: boolean("published").notNull().default(true),
  preferenceOrder: integer("preference_order").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const portfolioItems = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  bookTitle: text("book_title").notNull(),
  authorName: text("author_name").notNull(),
  genre: text("genre").notNull(),
  correctionSummary: text("correction_summary").notNull(),
  coverImageUrl: text("cover_image_url"),
  authorized: boolean("authorized").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  bookTitle: text("book_title").notNull(),
  quote: text("quote").notNull(),
  featuredOnHome: boolean("featured_on_home").notNull().default(false),
  // Relación opcional: un testimonio puede vincularse a un libro del portafolio, no es obligatorio.
  portfolioItemId: integer("portfolio_item_id").references(() => portfolioItems.id, {
    onDelete: "set null",
  }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const authorBooks = pgTable("author_books", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  editorialNote: text("editorial_note"),
  description: text("description").notNull(),
  coverImageUrl: text("cover_image_url"),
  purchaseLink: text("purchase_link"),
  purchasePlatform: text("purchase_platform"),
  publisherLogos: text("publisher_logos"),
  preferenceOrder: integer("preference_order").notNull().default(0),
  published: boolean("published").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
