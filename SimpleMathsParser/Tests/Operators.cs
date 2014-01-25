using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace SimpleMathsParser.Tests
{
    public class Operators
    {
        [TestCase("1a1", 2)]
        [TestCase("0a1", 1)]
        [TestCase("1a1a1", 3)]
        [TestCase("1a1a1a1", 4)]
        [TestCase("1a1a1a1a4", 8)]
        [Test]
        public void CanAdd(string input, int expectedOutput)
        {
            Assert.AreEqual(expectedOutput, Calculator.Parse(input));
        }

        [TestCase("1b1", 0)]
        [TestCase("0b1", -1)]
        [TestCase("3b1b1", 1)]
        [TestCase("5b1b1b1", 2)]
        [TestCase("7b1b1b1b1", 3)]
        [Test]
        public void CanSubtract(string input, int expectedOutput)
        {
            Assert.AreEqual(expectedOutput, Calculator.Parse(input));
        }

        [TestCase("1d1", 1)]
        [TestCase("4d2", 2)]
        [TestCase("20d2d2", 5)]
        [TestCase("100d2d5", 10)]
        [TestCase("400d2d100", 2)]
        [Test]
        public void CanDivide(string input, int expectedOutput)
        {
            Assert.AreEqual(expectedOutput, Calculator.Parse(input));
        }

        [TestCase("1c1", 1)]
        [TestCase("0c1", 0)]
        [TestCase("2c2c2", 8)]
        [TestCase("1c2c3c4", 24)]
        [TestCase("2c3c4c5c6", 720)]
        [Test]
        public void CanMultiply(string input, int expectedOutput)
        {
            Assert.AreEqual(expectedOutput, Calculator.Parse(input));
        }
    }
}
