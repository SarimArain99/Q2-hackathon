interface ValidationRule {
  required: () => ValidationRule;
  error: (message: string) => ValidationRule;
  warning: (message: string) => ValidationRule;
  min: (value: number) => ValidationRule;
  max: (value: number) => ValidationRule;
}

type ValidationFunction = (Rule: ValidationRule) => ValidationRule;

interface ProductField {
  name: string;
  type: 'string' | 'image' | 'text' | 'number' | 'boolean';
  title: string;
  validation?: ValidationFunction;
  options?: {
    hotspot?: boolean;
    list?: { title: string; value: string }[];
  };
  description?: string;
}

interface ProductSchema {
  name: string;
  type: 'document';
  title: string;
  fields: ProductField[];
}

const productSchema: ProductSchema = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required().error('Name is required'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image of the product.',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      validation: (Rule) => Rule.required().error('Price is required'),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) =>
        Rule.max(150).warning?.('Keep the description under 150 characters.'),
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule) =>
        Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule) =>
        Rule.min?.(0).error('Stock level must be a positive number.'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Sofa', value: 'Sofa' },
        ],
      },
      validation: (Rule) => Rule.required().error('Category is required'),
    },
  ],
};

export default productSchema;
