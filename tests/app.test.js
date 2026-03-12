const { add, subtract } = require('../src/index');

describe('Tests unitaires - Fonctions mathématiques', () => {
  
  describe('Fonction add()', () => {
    test('devrait additionner deux nombres positifs', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('devrait additionner un nombre positif et un nombre négatif', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('devrait additionner deux nombres négatifs', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('devrait retourner le même nombre si on ajoute 0', () => {
      expect(add(10, 0)).toBe(10);
    });
  });

  describe('Fonction subtract()', () => {
    test('devrait soustraire deux nombres positifs', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('devrait soustraire un nombre négatif', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('devrait retourner un nombre négatif si nécessaire', () => {
      expect(subtract(3, 10)).toBe(-7);
    });

    test('devrait retourner 0 si les nombres sont identiques', () => {
      expect(subtract(5, 5)).toBe(0);
    });
  });

});
