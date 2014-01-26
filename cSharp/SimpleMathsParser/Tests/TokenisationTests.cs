using NUnit.Framework;

namespace SimpleMathsParser.Tests
{
    public class TokenisationTests
    {
        [TestCase("1a1", new[]{"1", "a", "1"})]
        [TestCase("1a1c1", new[] { "1", "a", "1", "c", "1" })]
        [TestCase("1a1ce1b2f4", new[] { "1", "a", "1", "c", "e", "1", "b", "2", "f", "4" })]
        [Test]
        public void CanTokeniseAsExpected(string input, string[] expectedTokens)
        {
            Assert.AreEqual(expectedTokens, input.Tokenise());
        }
    }
}
