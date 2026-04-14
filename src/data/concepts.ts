import { Concept } from '../types';

export const BIVARIATE_CONCEPTS: Concept[] = [
  {
    id: 'c1',
    category: 'Basics',
    title: 'Explanatory vs Response Variables',
    content: 'The explanatory variable (X) is the one we think "explains" or causes the change. The response variable (Y) is the one we measure to see how it "responds" to the change.',
    example: 'In a study of "Study Time vs Test Score", Study Time is the explanatory variable (X) and Test Score is the response variable (Y).',
  },
  {
    id: 'c2',
    category: 'Basics',
    title: 'Trend and Direction',
    content: 'Direction describes whether the relationship is positive or negative. A positive trend means both variables increase together. A negative trend means as one increases, the other decreases.',
    example: 'Positive: Height vs Weight. Negative: Car Age vs Resale Value.',
  },
  {
    id: 'c3',
    category: 'Analysis',
    title: 'Correlation Coefficient (r)',
    content: 'The r-value measures the strength and direction of a linear relationship. It ranges from -1 to +1.',
    formula: 'r ≈ ±1 (Strong), r ≈ ±0.5 (Moderate), r ≈ 0 (Weak/None)',
    example: 'An r-value of 0.85 indicates a strong positive linear relationship.',
  },
  {
    id: 'c4',
    category: 'Analysis',
    title: 'Coefficient of Determination (r²)',
    content: 'r² tells us the percentage of variation in the response variable that can be explained by the explanatory variable.',
    formula: 'r² = (Correlation Coefficient)²',
    example: 'If r = 0.7, then r² = 0.49. This means 49% of the variation in Y is explained by X.',
  },
  {
    id: 'c5',
    category: 'Analysis',
    title: 'The Linear Model (Equation)',
    content: 'The line of best fit is represented by the equation y = mx + c (or y = a + bx).',
    formula: 'y = (Slope * x) + Intercept',
    example: 'Weight = 0.5 * Height - 20. For every 1cm increase in height, weight is predicted to increase by 0.5kg.',
  },
  {
    id: 'c6',
    category: 'Evaluation',
    title: 'Extrapolation',
    content: 'Extrapolation is making a prediction outside the range of the observed data. This is often unreliable because we don\'t know if the trend continues.',
    example: 'Predicting a 40-year-old\'s height based on data from children aged 5-15.',
  },
  {
    id: 'c7',
    category: 'Evaluation',
    title: 'Correlation vs Causation',
    content: 'Just because two variables are correlated doesn\'t mean one causes the other. There might be a "lurking variable" that affects both.',
    example: 'Ice cream sales and drowning rates are correlated, but both are caused by hot weather (the lurking variable).',
  },
  {
    id: 'c8',
    category: 'Evaluation',
    title: 'Residuals and Appropriateness',
    content: 'Residuals are the differences between observed values and predicted values. A linear model is appropriate if the residuals are randomly scattered with no clear pattern.',
    example: 'If a residual plot shows a "U" shape, a curved model might be more appropriate than a linear one.',
  }
];
