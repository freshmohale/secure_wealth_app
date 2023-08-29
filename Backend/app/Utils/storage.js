const QA = require('./3D')

function recommendProduct(answers) {
    const recommendedProducts = [];
  
    if (answers.has_dependents && answers.financial_burden_concern && answers.is_primary_breadwinner) {
      recommendedProducts.push(QA.Questions[0]);
    }
  
    if (answers.planning_for_child_education && answers.tax_efficient_savings_plan) {
      recommendedProducts.push(QA.Questions[1]);
    }
  
    if (answers.physically_demanding_job && !answers.sufficient_emergency_savings) {
      recommendedProducts.push(QA.Questions[2]);
    }
  
    if (answers.willing_to_accept_risk && answers.specific_financial_goals) {
      recommendedProducts.push(QA.Questions[3]);
    }
  
    if (answers.planning_for_retirement && answers.concerns_about_outliving_savings && answers.retirement_plan_with_tax_benefits) {
      recommendedProducts.push(QA.Questions[4]);
    }
  
    return recommendedProducts;
  }
  
  module.exports = {
    recommendProduct,
  };
  