using System;
using System.Collections.Generic;
using System.Linq;

namespace SimpleMathsParser
{
    public static class Calculator
    {
        private const string OpenBracket = "e";
        private const string CloseBracket = "f";

        public static int Parse(string input)
        {
            var tokens = input.Tokenise();
            tokens = ProcessBracketsWithPrecedence(tokens);
            var total = CalculateTotalFromTokens(tokens);
            return total;
        }

        private static string[] ProcessBracketsWithPrecedence(string[] tokens)
        {
            var openBracketIndex = GetInnerMostOpenBracketIndex(tokens);
            while (openBracketIndex != -1)
            {
                var closeIndex = GetInnerMostCloseBracket(tokens);
                var length = closeIndex - openBracketIndex - 1;

                var bracketArray = GetTokensWithinBrackets(length, tokens, openBracketIndex);
                var innerTotal = CalculateTotalFromTokens(bracketArray);

                tokens = RemoveBracketRange(tokens, openBracketIndex, closeIndex, innerTotal).ToArray();

                openBracketIndex = GetInnerMostOpenBracketIndex(tokens);
            }
            return tokens;
        }

        private static string[] GetTokensWithinBrackets(int length, string[] tokens, int openBracketIndex)
        {
            var bracketArray = new string[length];
            Array.Copy(tokens, openBracketIndex + 1, bracketArray, 0, length);
            return bracketArray;
        }

        private static int GetInnerMostCloseBracket(string[] tokens)
        {
            return Array.IndexOf(tokens, CloseBracket);
        }

        private static int GetInnerMostOpenBracketIndex(string[] tokens)
        {
            return Array.LastIndexOf(tokens, OpenBracket);
        }

        private static IEnumerable<string> RemoveBracketRange(string[] tokens, int startIndex, int closeIndex, int replacement)
        {
            for (var i = 0; i < tokens.Count(); i++)
            {
                if (i < startIndex || i > closeIndex)
                {
                    yield return tokens[i];
                }
                if (i == startIndex)
                {
                    yield return replacement.ToString();
                }
            }
        }

        private static int CalculateTotalFromTokens(IList<string> tokens)
        {
            var total = int.Parse(tokens[0]);
            for (var i = 1; (i + 1) < tokens.Count(); i += 2)
            {
                var right = int.Parse(tokens[i + 1]);

                switch (tokens[i])
                {
                    case "a" :
                        total += right;
                        break;
                    case "b" :
                        total -= right;
                        break;
                    case "c" :
                        total *= right;
                        break;
                    case "d" :
                        total /= right;
                        break;
                }
            }
            return total;
        }
    }
}