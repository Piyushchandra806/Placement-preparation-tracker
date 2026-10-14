/**
 * Mission 90 — Weighted Daily Scoring Utility
 *
 * Daily Category Weights:
 * - DSA: 45%
 * - Quantitative Aptitude: 15%
 * - Logical Reasoning: 15%
 * - English Speaking: 15%
 * - Revision: 10%
 *
 * Rules:
 * - Calculate each category's completion percentage using completed tasks / total assigned tasks.
 * - Calculate the daily score using the category weights.
 * - If a category has no tasks assigned, handle it explicitly without silently awarding full completion points.
 * - Only completed tasks earn completion credit.
 */

export const CATEGORY_WEIGHTS = {
  dsa: 45,
  quant: 15,
  reasoning: 15,
  english: 15,
  revision: 10,
};

/**
 * Calculates weighted daily score (0 to 100).
 *
 * @param {Record<string, { total: number, completed: number }>} categoryStats
 * @returns {number} Integer between 0 and 100
 */
export function calculateWeightedDailyScore(categoryStats = {}) {
  let weightedScore = 0;

  for (const [category, weight] of Object.entries(CATEGORY_WEIGHTS)) {
    const stats = categoryStats[category];
    const total = stats?.total || 0;
    const completed = stats?.completed || 0;

    if (total > 0) {
      // Completed tasks / total assigned tasks for this category
      const categoryCompletionRate = Math.min(
        Math.max(completed / total, 0),
        1
      );
      weightedScore += categoryCompletionRate * weight;
    } else {
      // Explicitly handle unassigned category: 0 points awarded
      weightedScore += 0;
    }
  }

  return Math.min(Math.max(Math.round(weightedScore), 0), 100);
}

/**
 * Group list of tasks by normalized subject category and compute stats.
 *
 * @param {Array<{ subject: string, completed: boolean }>} tasks
 * @returns {Record<string, { total: number, completed: number, percentage: number }>}
 */
export function groupTaskStatsByCategory(tasks = []) {
  const result = {
    dsa: { total: 0, completed: 0, percentage: 0 },
    quant: { total: 0, completed: 0, percentage: 0 },
    reasoning: { total: 0, completed: 0, percentage: 0 },
    english: { total: 0, completed: 0, percentage: 0 },
    revision: { total: 0, completed: 0, percentage: 0 },
  };

  for (const task of tasks) {
    let cat = (task.subject || '').toLowerCase().trim();
    if (cat === 'aptitude') cat = 'quant';

    if (result[cat]) {
      result[cat].total += 1;
      if (task.completed) {
        result[cat].completed += 1;
      }
    }
  }

  for (const cat of Object.keys(result)) {
    const item = result[cat];
    item.percentage =
      item.total > 0 ? Math.round((item.completed / item.total) * 100) : 0;
  }

  return result;
}
