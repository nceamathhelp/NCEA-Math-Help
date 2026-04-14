import { Question } from '../types';

export const BIVARIATE_QUESTIONS: Question[] = [
  // ACHIEVED
  {
    id: 'a1',
    difficulty: 'Achieved',
    text: "In a scatter plot showing height vs weight, if the points generally move from the bottom-left to the top-right, what is the direction of the trend?",
    options: ["Positive", "Negative", "No trend", "Circular"],
    correctAnswer: 0,
    explanation: "A positive trend means that as one variable increases, the other also tends to increase, moving from bottom-left to top-right.",
    graphType: 'scatter',
    graphData: [
      { x: 150, y: 50 }, { x: 155, y: 55 }, { x: 160, y: 58 }, { x: 165, y: 65 }, 
      { x: 170, y: 70 }, { x: 175, y: 72 }, { x: 180, y: 80 }, { x: 185, y: 85 }
    ]
  },
  {
    id: 'a2',
    difficulty: 'Achieved',
    text: "If the points on a scatter plot are very close to the line of best fit, how would you describe the strength of the relationship?",
    options: ["Weak", "Moderate", "Strong", "Non-existent"],
    correctAnswer: 2,
    explanation: "The closer the points are to the trend line, the stronger the relationship is.",
    graphType: 'scatter',
    graphData: [
      { x: 10, y: 11 }, { x: 20, y: 19 }, { x: 30, y: 31 }, { x: 40, y: 39 }, 
      { x: 50, y: 51 }, { x: 60, y: 59 }, { x: 70, y: 71 }, { x: 80, y: 79 }
    ]
  },
  {
    id: 'a3',
    difficulty: 'Achieved',
    text: "What does an 'unusual value' or 'outlier' look like on a scatter plot?",
    options: ["A point that follows the trend perfectly", "A point that is far away from the main cluster of data", "The point at the very center of the data", "A point on the Y-axis"],
    correctAnswer: 1,
    explanation: "Outliers are data points that stand out because they don't follow the general pattern or are far from the rest of the data."
  },
  {
    id: 'a4',
    difficulty: 'Achieved',
    text: "If the correlation coefficient (r) is -0.92, what does this tell us about the relationship?",
    options: ["Strong positive relationship", "Weak negative relationship", "Strong negative relationship", "Moderate positive relationship"],
    correctAnswer: 2,
    explanation: "An r-value close to -1 indicates a strong negative linear relationship.",
    graphType: 'scatter',
    graphData: [
      { x: 10, y: 90 }, { x: 20, y: 82 }, { x: 30, y: 71 }, { x: 40, y: 58 }, 
      { x: 50, y: 52 }, { x: 60, y: 39 }, { x: 70, y: 31 }, { x: 80, y: 18 }
    ]
  },
  {
    id: 'a5',
    difficulty: 'Achieved',
    text: "Which variable is usually placed on the horizontal (X) axis?",
    options: ["Response variable", "Explanatory variable", "Dependent variable", "Random variable"],
    correctAnswer: 1,
    explanation: "The explanatory variable (the one we think 'explains' the change) goes on the X-axis."
  },
  {
    id: 'a6',
    difficulty: 'Achieved',
    text: "What is 'scatter' in the context of a bivariate relationship?",
    options: ["The color of the points", "The vertical spread of the points around the trend line", "The number of points on the graph", "The average value of the X variable"],
    correctAnswer: 1,
    explanation: "Scatter refers to how much the points vary or 'spread out' vertically from the trend line."
  },
  {
    id: 'a7',
    difficulty: 'Achieved',
    text: "If a relationship is described as 'linear', what shape does the trend follow?",
    options: ["A curve", "A straight line", "A wave", "A circle"],
    correctAnswer: 1,
    explanation: "Linear means the relationship can be best represented by a straight line."
  },
  {
    id: 'a8',
    difficulty: 'Achieved',
    text: "What does r² (the coefficient of determination) represent?",
    options: ["The slope of the line", "The percentage of variation in the response variable explained by the explanatory variable", "The average error of the model", "The maximum value of Y"],
    correctAnswer: 1,
    explanation: "r² tells us how much of the change in the Y variable can be explained by the change in the X variable."
  },
  {
    id: 'a9',
    difficulty: 'Achieved',
    text: "If the points on a scatter plot form a 'U' shape, the relationship is:",
    options: ["Linear", "Non-linear", "Positive", "Strong"],
    correctAnswer: 1,
    explanation: "A 'U' shape is a curve, which means the relationship is non-linear.",
    graphType: 'scatter',
    graphData: [
      { x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 2 }, { x: 4, y: 1 }, 
      { x: 5, y: 2 }, { x: 6, y: 5 }, { x: 7, y: 10 }
    ]
  },
  {
    id: 'a10',
    difficulty: 'Achieved',
    text: "A 'cluster' on a scatter plot is:",
    options: ["A single outlier", "A group of points that are close together and separate from others", "The entire set of data", "The line of best fit"],
    correctAnswer: 1,
    explanation: "Clusters are distinct groups of data points that might suggest different sub-groups within the data."
  },

  // MERIT
  {
    id: 'm1',
    difficulty: 'Merit',
    text: "In the equation Weight = 0.5 * Height - 20, what does the '0.5' represent in context?",
    options: ["The average weight of all people", "For every 1cm increase in height, weight is predicted to increase by 0.5kg", "The weight of someone with 0cm height", "The total number of people sampled"],
    correctAnswer: 1,
    explanation: "The slope (0.5) tells us the predicted change in the response variable for every one-unit increase in the explanatory variable."
  },
  {
    id: 'm2',
    difficulty: 'Merit',
    text: "Why is an 'extrapolation' (predicting outside the data range) often considered unreliable?",
    options: ["The math is harder to do", "We don't know if the trend continues the same way outside the observed range", "The r-value becomes zero", "Computers cannot calculate it"],
    correctAnswer: 1,
    explanation: "Extrapolation assumes the trend stays the same forever, which might not be true (e.g., a person's height doesn't increase forever)."
  },
  {
    id: 'm3',
    difficulty: 'Merit',
    text: "If the scatter increases as the X-variable increases (fan shape), how does this affect our predictions?",
    options: ["Predictions for large X values are more reliable", "Predictions for large X values are less reliable", "The trend line becomes curved", "The r-value increases"],
    correctAnswer: 1,
    explanation: "More scatter means more variation, so our predictions become less certain and less reliable.",
    graphType: 'scatter',
    graphData: [
      { x: 10, y: 10 }, { x: 12, y: 11 }, { x: 15, y: 14 }, 
      { x: 40, y: 30 }, { x: 45, y: 50 }, { x: 50, y: 20 },
      { x: 80, y: 10 }, { x: 85, y: 90 }, { x: 90, y: 40 }
    ]
  },
  {
    id: 'm4',
    difficulty: 'Merit',
    text: "When discussing the 'appropriateness' of a linear model, what should you look for in the scatter?",
    options: ["If the points are all the same color", "If the scatter is constant (even) across the whole range of X", "If there are more than 100 points", "If the line passes through (0,0)"],
    correctAnswer: 1,
    explanation: "A linear model is most appropriate when the scatter is constant and there's no obvious curve in the points."
  },
  {
    id: 'm5',
    difficulty: 'Merit',
    text: "What is the best way to justify a 'strong' relationship in a Merit-level answer?",
    options: ["Just say it looks strong", "Refer to both the r-value and how close the points are to the trend line", "Count the number of points", "Check the Y-intercept"],
    correctAnswer: 1,
    explanation: "A good justification uses both the statistical measure (r) and visual evidence (closeness of points to the line)."
  },
  {
    id: 'm6',
    difficulty: 'Merit',
    text: "If you find a cluster of points that are all 'Electric Cars' in a dataset of 'Car Prices vs Age', what should you do?",
    options: ["Ignore them as outliers", "Discuss why Electric Cars might have a different trend or price range", "Delete the data", "Change the X-axis"],
    correctAnswer: 1,
    explanation: "Clusters often represent sub-groups that behave differently; discussing them adds depth and context to your analysis."
  },
  {
    id: 'm7',
    difficulty: 'Merit',
    text: "How does a small sample size (e.g., n=10) affect the reliability of your conclusion?",
    options: ["It makes the conclusion more certain", "It makes the conclusion less reliable as it might not represent the whole population", "It has no effect", "It makes the r-value higher"],
    correctAnswer: 1,
    explanation: "Small samples are more prone to being influenced by random chance and might not capture the true population trend."
  },
  {
    id: 'm8',
    difficulty: 'Merit',
    text: "In context, what does a Y-intercept of -50 in a 'Study Time vs Test Score' model likely mean?",
    options: ["You get -50 marks for 0 hours of study", "The model might not be valid for low study times (as you can't get negative marks)", "Everyone starts with -50 marks", "The test is very hard"],
    correctAnswer: 1,
    explanation: "Often, the Y-intercept has no practical meaning if it's outside the sensible range of the data (like negative scores)."
  },
  {
    id: 'm9',
    difficulty: 'Merit',
    text: "If the points show a clear curve, why is a linear r-value misleading?",
    options: ["The r-value will always be 0", "r only measures the strength of a *linear* relationship, not a curved one", "Calculators can't do curves", "Curves are always weak"],
    correctAnswer: 1,
    explanation: "The correlation coefficient 'r' is specifically for straight-line relationships. A high r might hide a better-fitting curve."
  },
  {
    id: 'm10',
    difficulty: 'Merit',
    text: "When making a prediction, what 'range' should you provide to show uncertainty?",
    options: ["The maximum and minimum Y values", "A visual estimate of the spread of points at that X value", "The r-value", "The slope plus or minus 1"],
    correctAnswer: 1,
    explanation: "Providing a range (e.g., 'between 50 and 70') based on the scatter at that point shows you understand prediction uncertainty."
  },

  // EXCELLENCE
  {
    id: 'e1',
    difficulty: 'Excellence',
    text: "If you find a strong correlation between Ice Cream sales and Drowning incidents, does this mean Ice Cream causes drowning?",
    options: ["Yes, the r-value proves it", "No, there is likely a 'lurking variable' like Temperature that causes both to increase", "Maybe, we need more data", "Only if the r-value is 1.0"],
    correctAnswer: 1,
    explanation: "Correlation does not equal causation. A third variable (like hot weather) often explains why two unrelated things move together."
  },
  {
    id: 'e2',
    difficulty: 'Excellence',
    text: "How would you evaluate the 'usefulness' of a model that has a high r² but very high scatter for large X values?",
    options: ["It is useful for all values", "It is useful for small X values but less useful for large X values due to increased uncertainty", "It is not useful at all", "Usefulness only depends on the slope"],
    correctAnswer: 1,
    explanation: "A model's utility can vary across its range. High scatter in certain areas makes predictions there much less reliable."
  },
  {
    id: 'e3',
    difficulty: 'Excellence',
    text: "What is the impact of a 'high leverage' outlier (a point far out on the X-axis that follows the trend)?",
    options: ["It weakens the r-value", "It can artificially strengthen the r-value and 'pull' the trend line towards it", "It has no impact", "It makes the intercept zero"],
    correctAnswer: 1,
    explanation: "Points far out on the X-axis have a lot of 'leverage' and can make a relationship look stronger than it really is."
  },
  {
    id: 'e4',
    difficulty: 'Excellence',
    text: "When comparing two groups (e.g., Males vs Females), what indicates that a single model for both is inappropriate?",
    options: ["If the groups have different colors", "If the groups have clearly different slopes or intercepts", "If one group has more points", "If the r-values are the same"],
    correctAnswer: 1,
    explanation: "If two groups follow different trends, combining them into one model can lead to biased or incorrect predictions."
  },
  {
    id: 'e5',
    difficulty: 'Excellence',
    text: "Why might you choose a non-linear (e.g., exponential) model over a linear one?",
    options: ["Because it looks cooler", "If the rate of change is increasing/decreasing rather than constant", "If the r-value is negative", "If there are outliers"],
    correctAnswer: 1,
    explanation: "Non-linear models are used when the relationship doesn't follow a constant 'step' (slope) but instead changes at different rates."
  },
  {
    id: 'e6',
    difficulty: 'Excellence',
    text: "How does the 'sampling method' (e.g., convenience sampling at a gym) limit your bivariate conclusions?",
    options: ["It doesn't limit them", "The findings can only be generalized to people similar to those in the sample (e.g., gym-goers)", "It makes the r-value invalid", "It changes the units of measurement"],
    correctAnswer: 1,
    explanation: "Statistical conclusions are only as good as the sample. If the sample is biased, the model might not apply to the wider population."
  },
  {
    id: 'e7',
    difficulty: 'Excellence',
    text: "What does a 'residual plot' with a clear 'U' shape suggest about your linear model?",
    options: ["The linear model is perfect", "The linear model is inappropriate and a non-linear model should be considered", "The data is random", "The slope is too steep"],
    correctAnswer: 1,
    explanation: "A pattern in the residuals (errors) means the linear model is missing a key part of the relationship, usually a curve.",
    graphType: 'residual',
    graphData: [
      { x: 10, y: 5 }, { x: 20, y: 2 }, { x: 30, y: -1 }, { x: 40, y: -3 }, 
      { x: 50, y: -1 }, { x: 60, y: 2 }, { x: 70, y: 5 }
    ]
  },
  {
    id: 'e8',
    difficulty: 'Excellence',
    text: "Discussing 'causal' links requires:",
    options: ["A high r-value", "A controlled experiment or a very strong theoretical/biological reason", "A large sample size", "A positive slope"],
    correctAnswer: 1,
    explanation: "To claim one thing *causes* another, you need more than just a graph; you need a logical mechanism or experimental proof."
  },
  {
    id: 'e9',
    difficulty: 'Excellence',
    text: "If a relationship is strong but the data only covers a very narrow range of X, what is the main concern?",
    options: ["The r-value is too high", "We don't know if the relationship holds over a wider, more practical range", "The scatter is too low", "The intercept is wrong"],
    correctAnswer: 1,
    explanation: "A narrow range limits the 'scope' of the model. We can't be sure the trend exists outside that small window."
  },
  {
    id: 'e10',
    difficulty: 'Excellence',
    text: "Synthesizing an Excellence answer involves:",
    options: ["Listing all the features one by one", "Connecting features (trend, scatter, outliers) to the real-world context and discussing reliability", "Using the most complex words possible", "Drawing a perfect graph"],
    correctAnswer: 1,
    explanation: "Excellence is about 'statistical insight'—linking the data patterns to what they actually mean for the real-world situation."
  }
];
