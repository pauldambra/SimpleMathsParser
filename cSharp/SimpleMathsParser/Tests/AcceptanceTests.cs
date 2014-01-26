using NUnit.Framework;

namespace SimpleMathsParser.Tests
{
    [TestFixture]
    public class AcceptanceTests
    {
        [TestCase("3a2c4", 20)]
        [TestCase("32a2d2", 17)]
        [TestCase("500a10b66c32", 14208)]
        [TestCase("3ae4c66fb32", 235)]
        [TestCase("3c4d2aee2a4c41fc4f", 990)]
        [Test]
        public void ProveTheSolutionWorks(string input, int expectedResult)
        {
            var result = Calculator.Parse(input);
            Assert.AreEqual(expectedResult, result);
        }

    }
}
