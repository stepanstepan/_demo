import { z } from 'zod';

const schema = z.object({
  'name': z.string().describe('Company Name'),
  'website': z.string().describe('Official Website'),
  'trial': z.string().nullable().describe('Trial Period Company Offers'),
  'pricing': z.array(
    z.object({
      name: z.string().describe('Product plan title'),
      price: z.number().nullable().describe('Product plan price in USD'),
      duration: z.string().describe('Product plan duration, e.g. annual, monthly, weekly'),
      annual_discount: z.number().nullable().describe('Discount applied for annual plans in USD'),
      comment: z.string().optional().describe('Additional notes about the product plan (optional)'),
      features: z.array(z.string()).describe('List of features included in the pricing plan')
    })
  ).describe('Product Pricing Plans'),
  'features': z.array(
    z.object({
      name: z.string().describe('Feature title'),
      description: z.string().describe('Detailed feature description'),
    })
  ).describe('List of features offered by each platform, such as AI capabilities, omnichannel support, automation, and analytics, is crucial for meeting business needs'),
  'integration': z.string().describe('The ability to integrate with existing tools and systems is important for seamless operations'),
  'support': z.string().describe('The quality of customer support provided by the platform itself can be a deciding factor'),
  'scalability': z.string().describe('The ability to scale the service as the business grows is essential'),
  'customization': z.string().describe('The level of customization available to tailor the platform to specific business need'),
  'reviews_pros': z.array(
    z.object({
      description: z.string().describe('Brief description of advantage'),
    })
  ).describe('List of things the product is praised for in reviews'),
  'reviews_cons': z.array(
    z.object({
      description: z.string().describe('Brief description of disadvantages'),
    })
  ).describe('List of things the product is criticized for in reviews.')
});

export default schema;