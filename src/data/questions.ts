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
  {
    id: 'a11',
    difficulty: 'Achieved',
    text: "What is the response variable in a bivariate study?",
    options: ["The variable on the X-axis", "The variable on the Y-axis", "The variable that explains the change", "The variable that is kept constant"],
    correctAnswer: 1,
    explanation: "The response variable is the outcome we are measuring, plotted on the Y-axis."
  },
  {
    id: 'a12',
    difficulty: 'Achieved',
    text: "If a trend line is horizontal, what does it suggest about the relationship?",
    options: ["Strong positive", "Strong negative", "No relationship", "Perfect linear"],
    correctAnswer: 2,
    explanation: "A horizontal line means that changes in X do not result in any predicted change in Y, suggesting no relationship."
  },
  {
    id: 'a13',
    difficulty: 'Achieved',
    text: "Which of these r-values represents the weakest relationship?",
    options: ["0.9", "-0.8", "0.1", "-0.5"],
    correctAnswer: 2,
    explanation: "The closer the r-value is to 0, the weaker the relationship."
  },
  {
    id: 'a14',
    difficulty: 'Achieved',
    text: "In the equation Y = 2X + 5, what is the Y-intercept?",
    options: ["2", "X", "5", "Y"],
    correctAnswer: 2,
    explanation: "The Y-intercept is the constant term (5) where the line crosses the Y-axis."
  },
  {
    id: 'a15',
    difficulty: 'Achieved',
    text: "What does a negative correlation look like on a graph?",
    options: ["Points go up from left to right", "Points go down from left to right", "Points form a circle", "Points are in a horizontal line"],
    correctAnswer: 1,
    explanation: "Negative correlation means as X increases, Y decreases, so the points trend downwards."
  },
  {
    id: 'a16',
    difficulty: 'Achieved',
    text: "If r = 1.0, how would you describe the relationship?",
    options: ["Strong positive", "Perfect positive linear", "Moderate positive", "Weak positive"],
    correctAnswer: 1,
    explanation: "An r-value of exactly 1.0 means all points lie perfectly on a straight line with a positive slope."
  },
  {
    id: 'a17',
    difficulty: 'Achieved',
    text: "What is the explanatory variable?",
    options: ["The variable we are trying to predict", "The variable we think causes or explains the change", "The variable on the Y-axis", "The variable that represents the error"],
    correctAnswer: 1,
    explanation: "The explanatory variable is the one used to explain changes in the response variable, plotted on the X-axis."
  },
  {
    id: 'a18',
    difficulty: 'Achieved',
    text: "If points are widely spread out vertically from the trend line, the relationship is:",
    options: ["Strong", "Weak", "Linear", "Positive"],
    correctAnswer: 1,
    explanation: "Large vertical spread (scatter) indicates a weak relationship because the points don't follow the trend closely."
  },
  {
    id: 'a19',
    difficulty: 'Achieved',
    text: "Which of these is a common 'form' of a bivariate relationship?",
    options: ["Blue", "Linear", "Heavy", "Fast"],
    correctAnswer: 1,
    explanation: "Form refers to the shape of the trend, such as linear or non-linear."
  },
  {
    id: 'a20',
    difficulty: 'Achieved',
    text: "What is the purpose of a line of best fit?",
    options: ["To connect all the dots", "To show the general trend of the data", "To make the graph look colorful", "To hide outliers"],
    correctAnswer: 1,
    explanation: "The line of best fit (trend line) summarizes the relationship between the variables."
  },
  {
    id: 'a21',
    difficulty: 'Achieved',
    text: "If r = -0.4, the relationship is:",
    options: ["Strong negative", "Moderate negative", "Weak negative", "No relationship"],
    correctAnswer: 2,
    explanation: "An r-value of -0.4 is generally considered a weak negative relationship."
  },
  {
    id: 'a22',
    difficulty: 'Achieved',
    text: "What is the range of possible values for the correlation coefficient (r)?",
    options: ["0 to 1", "-1 to 1", "0 to 100", "Any number"],
    correctAnswer: 1,
    explanation: "The r-value always falls between -1 (perfect negative) and 1 (perfect positive)."
  },
  {
    id: 'a23',
    difficulty: 'Achieved',
    text: "If r² = 0.64, what is the value of r (assuming positive trend)?",
    options: ["0.64", "0.32", "0.8", "0.4"],
    correctAnswer: 2,
    explanation: "r is the square root of r². √0.64 = 0.8."
  },
  {
    id: 'a24',
    difficulty: 'Achieved',
    text: "A scatter plot with points forming a straight line has:",
    options: ["High scatter", "No scatter", "Random scatter", "Circular scatter"],
    correctAnswer: 1,
    explanation: "If points form a perfect line, there is no vertical deviation (scatter) from the trend."
  },
  {
    id: 'a25',
    difficulty: 'Achieved',
    text: "What does 'bivariate' mean?",
    options: ["One variable", "Two variables", "Many variables", "No variables"],
    correctAnswer: 1,
    explanation: "Bivariate data involves the relationship between two different variables."
  },
  {
    id: 'a26',
    difficulty: 'Achieved',
    text: "If as X increases, Y stays roughly the same, the trend is:",
    options: ["Positive", "Negative", "Zero/None", "Curved"],
    correctAnswer: 2,
    explanation: "No change in Y as X changes indicates a zero or non-existent trend."
  },
  {
    id: 'a27',
    difficulty: 'Achieved',
    text: "Which of these is NOT a feature used to describe a scatter plot?",
    options: ["Direction", "Strength", "Form", "Color"],
    correctAnswer: 3,
    explanation: "Direction, Strength, and Form are the standard features; color is usually not a primary statistical feature."
  },
  {
    id: 'a28',
    difficulty: 'Achieved',
    text: "A 'moderate' relationship means the points are:",
    options: ["Exactly on the line", "Somewhat close to the line", "Very far from the line", "In a circle"],
    correctAnswer: 1,
    explanation: "Moderate strength means there is a visible trend, but with some noticeable scatter."
  },
  {
    id: 'a29',
    difficulty: 'Achieved',
    text: "If r = -1.0, the relationship is:",
    options: ["Perfect negative linear", "Strong positive", "Weak negative", "Moderate negative"],
    correctAnswer: 0,
    explanation: "An r-value of -1.0 means all points lie perfectly on a line with a negative slope."
  },
  {
    id: 'a30',
    difficulty: 'Achieved',
    text: "What is the Y-axis usually called in a bivariate graph?",
    options: ["Horizontal axis", "Vertical axis", "X-axis", "Z-axis"],
    correctAnswer: 1,
    explanation: "The Y-axis is the vertical axis."
  },
  {
    id: 'a31',
    difficulty: 'Achieved',
    text: "If a graph shows 'Age of Car' vs 'Price', what is the likely direction?",
    options: ["Positive", "Negative", "No trend", "Curved up"],
    correctAnswer: 1,
    explanation: "Generally, as a car gets older, its price decreases, which is a negative trend."
  },
  {
    id: 'a32',
    difficulty: 'Achieved',
    text: "What is the symbol for the correlation coefficient?",
    options: ["x", "y", "r", "m"],
    correctAnswer: 2,
    explanation: "The letter 'r' is used to represent the correlation coefficient."
  },
  {
    id: 'a33',
    difficulty: 'Achieved',
    text: "If r² = 0.49, what percentage of variation is explained?",
    options: ["4.9%", "49%", "70%", "0.49%"],
    correctAnswer: 1,
    explanation: "r² represents the proportion of variation; 0.49 is 49%."
  },
  {
    id: 'a34',
    difficulty: 'Achieved',
    text: "What is an 'independent variable' usually plotted on?",
    options: ["X-axis", "Y-axis", "Legend", "Title"],
    correctAnswer: 0,
    explanation: "The independent (explanatory) variable goes on the X-axis."
  },
  {
    id: 'a35',
    difficulty: 'Achieved',
    text: "If points are in a 'cloud' with no clear direction, r is likely close to:",
    options: ["1", "-1", "0", "100"],
    correctAnswer: 2,
    explanation: "A lack of direction or pattern results in an r-value close to 0."
  },
  {
    id: 'a36',
    difficulty: 'Achieved',
    text: "What does 'linear' mean in statistics?",
    options: ["Circular", "Straight line", "Square", "Random"],
    correctAnswer: 1,
    explanation: "Linear refers to a relationship that follows a straight line pattern."
  },
  {
    id: 'a37',
    difficulty: 'Achieved',
    text: "Which of these r-values is impossible?",
    options: ["0.5", "-0.9", "1.2", "-1.0"],
    correctAnswer: 2,
    explanation: "r-values must be between -1 and 1. 1.2 is impossible."
  },
  {
    id: 'a38',
    difficulty: 'Achieved',
    text: "What is the 'strength' of a relationship?",
    options: ["How high the Y values go", "How close the points are to the trend line", "The color of the points", "The number of variables"],
    correctAnswer: 1,
    explanation: "Strength describes how closely the data points follow the trend line."
  },
  {
    id: 'a39',
    difficulty: 'Achieved',
    text: "If r = 0.85, the relationship is:",
    options: ["Strong positive", "Weak positive", "Strong negative", "Moderate negative"],
    correctAnswer: 0,
    explanation: "0.85 is close to 1, indicating a strong positive relationship."
  },
  {
    id: 'a40',
    difficulty: 'Achieved',
    text: "What is the first step in analyzing bivariate data?",
    options: ["Calculate r", "Draw a scatter plot", "Write a conclusion", "Find the average"],
    correctAnswer: 1,
    explanation: "Visualizing the data with a scatter plot is always the first step to see the pattern."
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
  {
    id: 'm11',
    difficulty: 'Merit',
    text: "What is the impact of a single extreme outlier on the slope of the trend line?",
    options: ["No impact", "It can pull the line towards it, changing the slope significantly", "It always makes the slope zero", "It makes the line perfectly horizontal"],
    correctAnswer: 1,
    explanation: "A single point far from the trend can 'pull' the line, especially if it's at the ends of the X-range."
  },
  {
    id: 'm12',
    difficulty: 'Merit',
    text: "Interpreting r² = 0.81 in context means:",
    options: ["81% of the data points are on the line", "81% of the variation in Y is explained by the relationship with X", "The slope is 0.81", "The prediction is 81% accurate"],
    correctAnswer: 1,
    explanation: "r² measures the proportion of the variation in the response variable that is explained by the model."
  },
  {
    id: 'm13',
    difficulty: 'Merit',
    text: "Why is 'interpolation' generally more reliable than 'extrapolation'?",
    options: ["It uses smaller numbers", "We have data on both sides of the prediction point, confirming the trend exists there", "It doesn't require a calculator", "The r-value is higher for interpolation"],
    correctAnswer: 1,
    explanation: "Interpolation happens within the range of observed data, where we know the trend is valid."
  },
  {
    id: 'm14',
    difficulty: 'Merit',
    text: "If a scatter plot of 'Height vs Age' for children shows a curve, what does this imply about the growth rate?",
    options: ["Growth rate is constant", "Growth rate is changing (e.g., slowing down as they get older)", "Children don't grow", "The data is wrong"],
    correctAnswer: 1,
    explanation: "A curve indicates that the rate of change (slope) is not constant over the range."
  },
  {
    id: 'm15',
    difficulty: 'Merit',
    text: "What is a 'lurking variable'?",
    options: ["A variable that is hidden in the background", "A third variable that influences both X and Y, creating a false correlation", "The Y-intercept", "An outlier"],
    correctAnswer: 1,
    explanation: "Lurking variables can make it look like X causes Y when actually both are caused by Z."
  },
  {
    id: 'm16',
    difficulty: 'Merit',
    text: "If the r-value is 0.9 but the graph shows a clear curve, is the linear model appropriate?",
    options: ["Yes, because r is high", "No, because the visual evidence of a curve overrides the high r-value", "Yes, r is all that matters", "Maybe, if the sample size is large"],
    correctAnswer: 1,
    explanation: "Visual evidence of a non-linear form means a linear model (and its r-value) is not the best fit."
  },
  {
    id: 'm17',
    difficulty: 'Merit',
    text: "How do you justify a 'moderate' relationship visually?",
    options: ["Points are in a perfect line", "Points follow a trend but have a noticeable vertical spread", "Points are completely random", "Points are in two separate groups"],
    correctAnswer: 1,
    explanation: "Moderate strength is shown by a clear direction but with some scatter around the trend line."
  },
  {
    id: 'm18',
    difficulty: 'Merit',
    text: "What does a 'fan-shaped' scatter suggest about the model's reliability?",
    options: ["Reliability is constant", "Reliability decreases as X increases because the spread of points increases", "Reliability increases as X increases", "The model is perfect"],
    correctAnswer: 1,
    explanation: "Increasing scatter (fan shape) means predictions become less certain for higher X values."
  },
  {
    id: 'm19',
    difficulty: 'Merit',
    text: "Why should you check for clusters in your data?",
    options: ["To make the graph look better", "Clusters might indicate that the data should be analyzed as separate groups", "To find the average", "To calculate r²"],
    correctAnswer: 1,
    explanation: "Clusters suggest that different sub-populations might have different relationships."
  },
  {
    id: 'm20',
    difficulty: 'Merit',
    text: "In the equation Y = 10X + 100, if X is 'Years of Experience' and Y is 'Salary', what does 100 represent?",
    options: ["The maximum salary", "The predicted starting salary (0 years experience)", "The average salary", "The increase per year"],
    correctAnswer: 1,
    explanation: "The constant term (Y-intercept) is the predicted value when X = 0."
  },
  {
    id: 'm21',
    difficulty: 'Merit',
    text: "If you remove an outlier and the r-value jumps from 0.4 to 0.8, what was the outlier doing?",
    options: ["Strengthening the relationship", "Weakening the relationship by not following the trend", "It had no effect", "It was the most important point"],
    correctAnswer: 1,
    explanation: "Outliers that don't follow the trend increase scatter and lower the r-value."
  },
  {
    id: 'm22',
    difficulty: 'Merit',
    text: "What is 'constant scatter' (homoscedasticity)?",
    options: ["Points are all the same color", "The vertical spread of points is roughly the same across all X values", "The slope is constant", "The r-value is constant"],
    correctAnswer: 1,
    explanation: "Constant scatter means the prediction error is likely to be similar across the whole range."
  },
  {
    id: 'm23',
    difficulty: 'Merit',
    text: "Why is it important to use 'context' in your interpretations?",
    options: ["To get more marks", "To show how the statistical findings relate to the real-world situation", "To fill up space", "Because the teacher said so"],
    correctAnswer: 1,
    explanation: "Statistics is about understanding real-world data; context gives the numbers meaning."
  },
  {
    id: 'm24',
    difficulty: 'Merit',
    text: "If a relationship is 'non-linear', what should you do for a Merit-level answer?",
    options: ["Ignore it and use a line", "Describe the shape of the curve (e.g., 'it levels off' or 'it increases faster')", "Say it's a bad graph", "Change the data"],
    correctAnswer: 1,
    explanation: "Describing the specific nature of the curve shows better understanding than just saying 'it's not a line'."
  },
  {
    id: 'm25',
    difficulty: 'Merit',
    text: "How does a large sample size (e.g., n=500) improve your analysis?",
    options: ["It makes the math easier", "It reduces the impact of random variation and makes the trend more reliable", "It always makes r higher", "It removes all outliers"],
    correctAnswer: 1,
    explanation: "Larger samples provide a more stable and representative view of the population trend."
  },
  {
    id: 'm26',
    difficulty: 'Merit',
    text: "What is the difference between 'correlation' and 'causation'?",
    options: ["They are the same thing", "Correlation is a relationship; causation means one actually *makes* the other happen", "Correlation is for numbers, causation is for words", "Causation is always positive"],
    correctAnswer: 1,
    explanation: "Two things can move together (correlation) without one causing the other (causation)."
  },
  {
    id: 'm27',
    difficulty: 'Merit',
    text: "If r = -0.85, how would you describe the strength and direction?",
    options: ["Strong positive", "Strong negative", "Moderate negative", "Weak positive"],
    correctAnswer: 1,
    explanation: "-0.85 is a strong negative relationship."
  },
  {
    id: 'm28',
    difficulty: 'Merit',
    text: "Why might a Y-intercept of -10 be 'unrealistic' in a model for 'Height vs Weight'?",
    options: ["Weight cannot be negative", "Height cannot be negative", "The slope is too small", "The r-value is too low"],
    correctAnswer: 0,
    explanation: "Physical measurements like weight cannot be negative, making the intercept theoretical only."
  },
  {
    id: 'm29',
    difficulty: 'Merit',
    text: "What does a 'strong' relationship look like visually?",
    options: ["Points are scattered everywhere", "Points are tightly clustered around the trend line", "Points are in a circle", "There are only 5 points"],
    correctAnswer: 1,
    explanation: "Strong relationships have very little scatter from the trend line."
  },
  {
    id: 'm30',
    difficulty: 'Merit',
    text: "If you are asked to 'justify' a prediction, what should you mention?",
    options: ["The r-value, the scatter at that point, and whether it's interpolation", "The color of the graph", "The name of the variables", "The total number of points"],
    correctAnswer: 0,
    explanation: "A good justification considers the model's strength, local scatter, and range."
  },
  {
    id: 'm31',
    difficulty: 'Merit',
    text: "What is the effect of 'grouping' data (e.g., by gender) on a scatter plot?",
    options: ["It makes the graph messy", "It can reveal different trends that were hidden in the combined data", "It has no effect", "It always increases r"],
    correctAnswer: 1,
    explanation: "Sub-groups often behave differently, and identifying this adds depth to the analysis."
  },
  {
    id: 'm32',
    difficulty: 'Merit',
    text: "If r² = 0.25, how much variation is UNEXPLAINED?",
    options: ["25%", "75%", "50%", "0%"],
    correctAnswer: 1,
    explanation: "If 25% is explained (r²), then 100% - 25% = 75% is unexplained."
  },
  {
    id: 'm33',
    difficulty: 'Merit',
    text: "What is the 'explanatory' variable in a study of 'Fertilizer vs Plant Growth'?",
    options: ["Plant Growth", "Fertilizer", "Soil Type", "Time"],
    correctAnswer: 1,
    explanation: "We use the amount of fertilizer to explain the change in growth."
  },
  {
    id: 'm34',
    difficulty: 'Merit',
    text: "How do outliers affect the r-value?",
    options: ["They always increase it", "They usually decrease it by increasing the overall scatter", "They have no effect", "They make it zero"],
    correctAnswer: 1,
    explanation: "Outliers that don't follow the trend add 'noise' and weaken the correlation."
  },
  {
    id: 'm35',
    difficulty: 'Merit',
    text: "What does 'linear form' mean visually?",
    options: ["Points follow a curve", "Points follow a straight line", "Points are random", "Points are in a square"],
    correctAnswer: 1,
    explanation: "Linear form means the relationship is best described by a straight line."
  },
  {
    id: 'm36',
    difficulty: 'Merit',
    text: "If r = 0.6, the relationship is:",
    options: ["Strong", "Moderate", "Weak", "Perfect"],
    correctAnswer: 1,
    explanation: "0.6 is generally considered a moderate strength relationship."
  },
  {
    id: 'm37',
    difficulty: 'Merit',
    text: "Why is it risky to predict for an X-value far beyond the data?",
    options: ["The numbers are too big", "The trend might change or stop entirely", "The r-value becomes 1", "The graph will crash"],
    correctAnswer: 1,
    explanation: "Extrapolation is risky because we have no evidence the trend continues."
  },
  {
    id: 'm38',
    difficulty: 'Merit',
    text: "What is the 'response' variable in 'Price vs Age of Car'?",
    options: ["Age of Car", "Price", "Brand", "Color"],
    correctAnswer: 1,
    explanation: "Price is the outcome we are measuring/predicting."
  },
  {
    id: 'm39',
    difficulty: 'Merit',
    text: "What does a 'negative' direction mean in context?",
    options: ["The data is bad", "As one variable increases, the other decreases", "The values are all negative numbers", "The slope is zero"],
    correctAnswer: 1,
    explanation: "Negative direction means an inverse relationship between the variables."
  },
  {
    id: 'm40',
    difficulty: 'Merit',
    text: "How do you describe 'strength' without using numbers?",
    options: ["By looking at the color", "By looking at how closely the points cluster around the trend line", "By counting the points", "By measuring the slope"],
    correctAnswer: 1,
    explanation: "Visual strength is determined by the density of points around the trend."
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
  },
  {
    id: 'e11',
    difficulty: 'Excellence',
    text: "What is the danger of using a model with a high r-value but very few data points (e.g., n=5)?",
    options: ["The math is too easy", "The high correlation could be entirely due to random chance", "Outliers don't exist in small samples", "The slope is always 1"],
    correctAnswer: 1,
    explanation: "Small samples can show strong patterns by accident that don't exist in the real population."
  },
  {
    id: 'e12',
    difficulty: 'Excellence',
    text: "How does 'measurement error' in the explanatory variable affect the model?",
    options: ["It makes the r-value higher", "It can 'blur' the relationship, making it look weaker than it really is", "It has no effect", "It makes the slope steeper"],
    correctAnswer: 1,
    explanation: "If our X measurements are inaccurate, the relationship with Y will appear more scattered and less certain."
  },
  {
    id: 'e13',
    difficulty: 'Excellence',
    text: "Why might a researcher 'transform' data (e.g., take the log of Y) before linear regression?",
    options: ["To make the numbers smaller", "To turn a curved relationship into a linear one for easier analysis", "To hide outliers", "To change the units"],
    correctAnswer: 1,
    explanation: "Transformations can linearize non-linear data, allowing standard linear tools to be used effectively."
  },
  {
    id: 'e14',
    difficulty: 'Excellence',
    text: "What is 'Simpson's Paradox' in a bivariate context?",
    options: ["A trend appears in different groups but disappears or reverses when the groups are combined", "The r-value is always 0.5", "Outliers are always positive", "The graph is upside down"],
    correctAnswer: 0,
    explanation: "Simpson's Paradox shows how hidden sub-groups can completely change the interpretation of a relationship."
  },
  {
    id: 'e15',
    difficulty: 'Excellence',
    text: "When is it statistically valid to remove an outlier?",
    options: ["Whenever it makes the r-value higher", "Only if it is a confirmed recording error or from a different population", "Never", "If it's more than 2 units away"],
    correctAnswer: 1,
    explanation: "Removing data just to 'improve' results is unethical; there must be a valid reason why the point doesn't belong."
  },
  {
    id: 'e16',
    difficulty: 'Excellence',
    text: "How does 'non-constant scatter' (heteroscedasticity) affect the validity of a linear model?",
    options: ["It makes the slope zero", "It means the prediction error is not uniform, making some predictions much less reliable than others", "It has no effect on validity", "It makes r always negative"],
    correctAnswer: 1,
    explanation: "If the error spread changes, a single 'average' measure of reliability is misleading."
  },
  {
    id: 'e17',
    difficulty: 'Excellence',
    text: "What is the 'regression to the mean' effect?",
    options: ["All points eventually move to the center", "Extreme values are likely to be followed by values closer to the average", "The slope always decreases", "The intercept is the mean"],
    correctAnswer: 1,
    explanation: "Regression to the mean is a common statistical phenomenon often mistaken for a real trend."
  },
  {
    id: 'e18',
    difficulty: 'Excellence',
    text: "Why is 'contextual knowledge' critical for Excellence-level analysis?",
    options: ["To sound smarter", "To identify if a relationship is biologically or logically plausible", "To fill up the word count", "To avoid using numbers"],
    correctAnswer: 1,
    explanation: "Statistical patterns must be grounded in real-world logic to be truly meaningful."
  },
  {
    id: 'e19',
    difficulty: 'Excellence',
    text: "What does a 'high r²' NOT tell you?",
    options: ["The strength of the linear relationship", "Whether the model is actually appropriate (it could be a curve)", "The percentage of variation explained", "The direction of the trend"],
    correctAnswer: 1,
    explanation: "A curved relationship can have a high r², but a linear model would still be the wrong choice."
  },
  {
    id: 'e20',
    difficulty: 'Excellence',
    text: "How do you evaluate the 'robustness' of a conclusion?",
    options: ["By checking if it stays the same when small amounts of data are added or removed", "By looking at the color of the graph", "By asking a friend", "By calculating r three times"],
    correctAnswer: 0,
    explanation: "Robust conclusions are those that aren't easily flipped by a single data point or minor change."
  },
  {
    id: 'e21',
    difficulty: 'Excellence',
    text: "What is the impact of 'autocorrelation' (data points that depend on each other)?",
    options: ["It makes the r-value more accurate", "It violates the assumption of independence, making standard r-values misleading", "It has no impact", "It makes the slope zero"],
    correctAnswer: 1,
    explanation: "If points aren't independent (e.g., time series), standard bivariate tools can give false results."
  },
  {
    id: 'e22',
    difficulty: 'Excellence',
    text: "How does 'range restriction' affect the correlation coefficient?",
    options: ["It always increases r", "It usually decreases r by hiding the full extent of the relationship", "It has no effect", "It makes r zero"],
    correctAnswer: 1,
    explanation: "Looking at only a small part of the data range can make a strong relationship look weak."
  },
  {
    id: 'e23',
    difficulty: 'Excellence',
    text: "What is the role of 'residuals' in model evaluation?",
    options: ["They are the points on the line", "They are the differences between observed and predicted values, used to check for patterns", "They are the outliers", "They are the total number of points"],
    correctAnswer: 1,
    explanation: "Analyzing residuals is the best way to see if a model is missing something (like a curve)."
  },
  {
    id: 'e24',
    difficulty: 'Excellence',
    text: "Why is 'prediction' the ultimate test of a model?",
    options: ["Because it's fun", "It tests if the model can actually handle new, unseen data accurately", "It's required by the syllabus", "It makes the graph look useful"],
    correctAnswer: 1,
    explanation: "A model that fits old data but can't predict new data is not truly useful."
  },
  {
    id: 'e25',
    difficulty: 'Excellence',
    text: "What is 'overfitting'?",
    options: ["Making the model too simple", "Making the model too complex so it fits random noise instead of the real trend", "Using too much data", "Having too many variables"],
    correctAnswer: 1,
    explanation: "Overfitted models look perfect on the original data but fail miserably on new data."
  },
  {
    id: 'e26',
    difficulty: 'Excellence',
    text: "How do you communicate 'uncertainty' in an Excellence answer?",
    options: ["By saying 'I don't know'", "By using ranges, discussing scatter, and mentioning limitations of the sample", "By using a lot of decimals", "By drawing a thick line"],
    correctAnswer: 1,
    explanation: "Acknowledging and quantifying uncertainty is a hallmark of high-level statistical thinking."
  },
  {
    id: 'e27',
    difficulty: 'Excellence',
    text: "What is the significance of 'theoretical' vs 'empirical' models?",
    options: ["Theoretical is for books, empirical is for real life", "Theoretical is based on logic/science; empirical is based only on the observed data", "They are the same", "Theoretical is always linear"],
    correctAnswer: 1,
    explanation: "Comparing what we expect (theory) with what we see (data) is a key part of advanced analysis."
  },
  {
    id: 'e28',
    difficulty: 'Excellence',
    text: "How does 'sampling bias' invalidate a bivariate model?",
    options: ["It makes the r-value zero", "The model only represents the biased sample, not the intended population", "It changes the X-axis", "It has no effect"],
    correctAnswer: 1,
    explanation: "If the sample doesn't represent the population, the model's conclusions cannot be generalized."
  },
  {
    id: 'e29',
    difficulty: 'Excellence',
    text: "What is the 'coefficient of determination' (r²) actually measuring?",
    options: ["The slope", "The proportion of variance in Y that is predictable from X", "The average error", "The number of points"],
    correctAnswer: 1,
    explanation: "r² tells us how much 'better' our model is than just using the average of Y."
  },
  {
    id: 'e30',
    difficulty: 'Excellence',
    text: "Why is 'causality' so hard to prove with bivariate data alone?",
    options: ["Because r is never 1", "Because there could always be an unmeasured third variable (confounding)", "Because the math is too simple", "Because graphs are just pictures"],
    correctAnswer: 1,
    explanation: "Observational data can show relationships but rarely proves one thing *causes* another."
  },
  {
    id: 'e31',
    difficulty: 'Excellence',
    text: "What is the impact of 'data density' on model reliability?",
    options: ["More points always mean better models", "Reliability is higher in regions with more data points (higher density)", "Density has no effect", "Low density makes r higher"],
    correctAnswer: 1,
    explanation: "We are more certain about trends in areas where we have lots of supporting data."
  },
  {
    id: 'e32',
    difficulty: 'Excellence',
    text: "How do you handle 'multiple clusters' in an Excellence report?",
    options: ["Ignore them", "Analyze each cluster separately and compare their trends", "Average them all together", "Delete the smaller cluster"],
    correctAnswer: 1,
    explanation: "Treating distinct groups separately often leads to much more accurate and insightful models."
  },
  {
    id: 'e33',
    difficulty: 'Excellence',
    text: "What is the 'standard error' of a prediction?",
    options: ["The mistake the researcher made", "A measure of the average distance that the observed values fall from the regression line", "The r-value", "The Y-intercept"],
    correctAnswer: 1,
    explanation: "Standard error quantifies the typical 'miss' of the model's predictions."
  },
  {
    id: 'e34',
    difficulty: 'Excellence',
    text: "Why is 'linearity' often just an approximation?",
    options: ["Because lines are easy to draw", "Most real-world relationships are slightly curved but a line is 'good enough' for a certain range", "Because curves don't exist", "Because r is always 1"],
    correctAnswer: 1,
    explanation: "Linear models are often 'useful simplifications' of more complex real-world patterns."
  },
  {
    id: 'e35',
    difficulty: 'Excellence',
    text: "What is the 'scope' of a bivariate model?",
    options: ["The size of the graph", "The range of values and population for which the model is valid", "The r-value", "The number of variables"],
    correctAnswer: 1,
    explanation: "Defining the scope prevents the model from being used inappropriately."
  },
  {
    id: 'e36',
    difficulty: 'Excellence',
    text: "How does 'extrapolation' violate statistical logic?",
    options: ["It uses too much ink", "It assumes a relationship exists where no data has been observed", "It makes the slope negative", "It's too easy"],
    correctAnswer: 1,
    explanation: "Predicting where you have no data is essentially guessing that the past pattern continues."
  },
  {
    id: 'e37',
    difficulty: 'Excellence',
    text: "What is 'multicollinearity' (in a broader context)?",
    options: ["When X and Y are the same", "When multiple explanatory variables are highly correlated with each other", "When there are too many lines", "When r is zero"],
    correctAnswer: 1,
    explanation: "If explanatory variables are linked, it's hard to tell which one is actually driving the change."
  },
  {
    id: 'e38',
    difficulty: 'Excellence',
    text: "Why is 'visual inspection' as important as 'statistical calculation'?",
    options: ["Calculators can be wrong", "Visuals catch patterns (like curves or clusters) that a single number (like r) might miss", "It's easier to do", "Graphs are prettier"],
    correctAnswer: 1,
    explanation: "Numbers can be misleading; the graph tells the real story of the data's shape."
  },
  {
    id: 'e39',
    difficulty: 'Excellence',
    text: "What is the 'best' model for a dataset?",
    options: ["The one with the highest r", "The one that is simplest while still capturing the main trend and providing reliable predictions", "The one with the most variables", "The linear one"],
    correctAnswer: 1,
    explanation: "Parsimony (simplicity) and predictive power are the goals of good modeling."
  },
  {
    id: 'e40',
    difficulty: 'Excellence',
    text: "How do you conclude an Excellence-level bivariate analysis?",
    options: ["By stating the r-value again", "By summarizing the key findings, their reliability, and their real-world implications", "By saying 'The end'", "By drawing a new graph"],
    correctAnswer: 1,
    explanation: "A strong conclusion brings all the evidence together into a coherent real-world story."
  }
];
