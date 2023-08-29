/**
 * @swagger
 * tags:
 *   name: Recommendations
 *   description: API for product recommendations with kid-friendly explanations
 */

/**
 * @swagger
 * /api/recommendations:
 *   post:
 *     tags: [Recommendations]
 *     summary: Get product recommendations with kid-friendly explanations based on user inputs.
 *     description: Retrieve product recommendations and explanations based on user answers.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answers:
 *                 type: object
 *                 # Add the properties and their types as per your actual input requirements
 *     responses:
 *       200:
 *         description: A JSON array of recommended products with kid-friendly explanations.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recommendedProducts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       explanation:
 *                         type: string
 */


// controllers/recommendations.js
const { recommendInsuranceProduct } = require('../GPTServices/gpt');
const { getKidFriendlyExplanation } = require('../GPTServices/openai');

async function getRecommendations(req, res) {
  const userAnswers = req.body.answers;

  try {
    // Get recommended products based on user answers
    const recommendedProducts = recommendInsuranceProduct(userAnswers);

    // Get kid-friendly explanations for recommended products
    const productExplanations = await Promise.all(
      recommendedProducts.map(title => getKidFriendlyExplanation(title))
    );

    // Filter out titles without explanations
    const productsWithExplanations = recommendedProducts.reduce((acc, title, index) => {
      if (productExplanations[index]) {
        acc.push({
          title,
          explanation: productExplanations[index],
        });
      }
      return acc;
    }, []);

    res.json({ recommendedProducts: productsWithExplanations });
  } catch (error) {
    console.error('Error fetching recommendations:', error.message);
    res.status(500).json({ error: 'Error fetching recommendations' });
  }
}


//Second Method
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API for product recommendations with kid-friendly explanations
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     tags: [Recommendations]
 *     summary: Get product recommendations with kid-friendly explanations based on user inputs.
 *     description: Retrieve product recommendations and explanations based on user answers.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answers:
 *                 type: object
 *                 # Add the properties and their types as per your actual input requirements
 *     responses:
 *       200:
 *         description: A JSON array of recommended products with kid-friendly explanations.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recommendedProducts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       explanation:
 *                         type: string
 */


// controllers/recommendations.js
const { recommendProduct } = require('../Utils/Storage');
const { generateInsuranceProduct } = require('../GPTServices/openai');

async function getProducts(req, res) {
  const userAnswers = req.body.answers;

  try {
    // Get recommended products based on user answers
    const products = recommendProduct(userAnswers);

    // Get kid-friendly explanations for recommended products
    const prductsdefined = await Promise.all(
      products.map(title => generateInsuranceProduct(title))
    );

    // Filter out titles without explanations
    const insuranceProducts = products.reduce((acc, title, index) => {
      if (prductsdefined[index]) {
        acc.push({
          // title,
          explanation: prductsdefined[index],
        });
      }
      return acc;
    }, []);

    res.json({ products: insuranceProducts });
  } catch (error) {
    console.error('Error fetching recommendations:', error.message);
    res.status(500).json({ error: 'Error fetching recommendations' });
  }
}

/**
 * @swagger
 * tags:
 *   name: Word Meaning
 *   description: API for searching the meaning of words one at a time using OPENAI.
 */

/**
 * @swagger
 * /api/meaning:
 *   post:
 *     tags: [Word Meaning]
 *     summary: Get kid-friendly explanation for a given word.
 *     description: Retrieve kid-friendly explanation for a provided word.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               word:
 *                 type: string
 *     responses:
 *       200:
 *         description: A JSON object containing the word and its kid-friendly explanation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 word:
 *                   type: string
 *                 explanation:
 *                   type: string
 *       500:
 *         description: An error occurred while fetching the meaning of the word.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

const { getExplanationForWord } = require('../GPTServices/openai');

async function getMeaningOfWord(req, res) {
  const word = req.body.word;

  try {
    // Get the kid-friendly explanation for the provided word
    const explanation = await getExplanationForWord(word);

    res.json({ word, explanation });
  } catch (error) {
    console.error('Error fetching the meaning of the word:', error.message);
    res.status(500).json({ error: 'Error fetching the meaning of the word' });
  }
}


module.exports = {
  getRecommendations,
  getProducts,
  getMeaningOfWord
};


