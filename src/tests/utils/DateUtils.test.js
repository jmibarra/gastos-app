import DateUtils from '../../utils/DateUtils';

describe('DateUtils', () => {
  describe('getMonthName', () => {
    it('returns the correct month name', () => {
      const monthName = DateUtils.getMonthName(1);
      expect(monthName).toBe('enero');
    });
  });

  describe('getCurrentYear', () => {
    it('returns the current year', () => {
      const currentYear = DateUtils.getCurrentYear();
      expect(currentYear).toEqual(new Date().getFullYear());
    });
  });

  describe('getCurrentMonth', () => {
    it('returns the current month with 2 digits', () => {
      const currentMonth = DateUtils.getCurrentMonth();
      expect(currentMonth).toMatch(/^\d{2}$/);
    });
  });
});
