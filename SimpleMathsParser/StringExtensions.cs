using System.Linq;
using System.Text.RegularExpressions;

namespace SimpleMathsParser
{
    public static class StringExtensions
    {
        public static string[] Tokenise(this string input)
        {
            return Regex.Split(input, "([abcdef])").Where(s => !string.IsNullOrWhiteSpace(s)).ToArray();
        }
    }
}