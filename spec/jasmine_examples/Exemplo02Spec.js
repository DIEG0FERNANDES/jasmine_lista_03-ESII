//Exe 2
// Faça uma suíte de teste para validar a média dos alunos da 3ª série, na qual são utilizadas as notas n1, n2, n3 e n4.
// Crie ainda um segundo teste (it) para validar que as notas válidas estão entre 0 e 10.
describe("Faça uma suíte de teste para validar a média dos alunos da 3ª série, na qual são utilizadas as notas n1, n2, n3 e n4", function () {
    var n1 = 6;
    var n2 = 8;
    var n3 = 2;
    var n4 = 3;
    var media = (n1 + n2 + n3 + n4) / 2;
    it("deve validar a média de notas dos alunos", function () {
      expect(media).toBe(9.5);
      // expect(media).toBe(8)
    });
    it("deve estar entre 0 e 10", function () {
      expect(n1).toBeGreaterThan(0);
      expect(n1).toBeLessThan(10);
      expect(n2).toBeGreaterThan(0);
      expect(n2).toBeLessThan(10);
      expect(n3).toBeGreaterThan(0);
      expect(n3).toBeLessThan(10);
      expect(n4).toBeGreaterThan(0);
      expect(n4).toBeLessThan(10);
    });
  });