
public class Solution {

    public int minNumber(int[] inputOne, int[] inputTwo) {
        int inputOneBitmask = 0;
        for (int n : inputOne) {
            inputOneBitmask ^= (1 << n);
        }
        int inputTwoBitmask = 0;
        for (int n : inputTwo) {
            inputTwoBitmask ^= (1 << n);
        }

        int bitwiseAnd = inputOneBitmask & inputTwoBitmask;
        if (bitwiseAnd != 0) {
            return findMinimumDigit(bitwiseAnd);
        }

        int digitOne = findMinimumDigit(inputOneBitmask);
        int digitTwo = findMinimumDigit(inputTwoBitmask);
        return 10 * Math.min(digitOne, digitTwo) + Math.max(digitOne, digitTwo);
    }

    private int findMinimumDigit(int bitmask) {
        int minDigit = 0;
        while ((bitmask & 1) == 0) {
            bitmask = (bitmask >> 1);
            ++minDigit;
        }
        return minDigit;
    }
}
