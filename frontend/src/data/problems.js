export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));`,
      python: `def twoSum(nums, target):
    pass

print(twoSum([2, 7, 11, 15], 9))
print(twoSum([3, 2, 4], 6))
print(twoSum([3, 3], 6))`,
      java: `import java.util.*;
class Solution {
    public static int[] twoSum(int[] nums, int target) {
        return new int[0];
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
vector<int> twoSum(vector<int>& nums, int target) {
    return {};
}
int main() {
    vector<int> nums1 = {2,7,11,15};
    vector<int> r1 = twoSum(nums1,9);
    for(int i:r1) cout<<i<<" ";
    cout<<endl;
    vector<int> nums2 = {3,2,4};
    vector<int> r2 = twoSum(nums2,6);
    for(int i:r2) cout<<i<<" ";
    cout<<endl;
    vector<int> nums3 = {3,3};
    vector<int> r3 = twoSum(nums3,6);
    for(int i:r3) cout<<i<<" ";
    cout<<endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "0 1\n1 2\n0 1",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  
}
let t1 = ["h","e","l","l","o"];
reverseString(t1);
console.log(t1);
let t2 = ["H","a","n","n","a","h"];
reverseString(t2);
console.log(t2);`,
      python: `def reverseString(s):
    pass

t1 = ["h","e","l","l","o"]
reverseString(t1)
print(t1)
t2 = ["H","a","n","n","a","h"]
reverseString(t2)
print(t2)`,
      java: `import java.util.*;
class Solution {
    public static void reverseString(char[] s) {
    }
    public static void main(String[] args) {
        char[] t1 = {'h','e','l','l','o'};
        reverseString(t1);
        System.out.println(Arrays.toString(t1));
        char[] t2 = {'H','a','n','n','a','h'};
        reverseString(t2);
        System.out.println(Arrays.toString(t2));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
void reverseString(vector<char>& s) {
}
int main() {
    vector<char> s1 = {'h','e','l','l','o'};
    reverseString(s1);
    for(char c:s1) cout<<c<<" ";
    cout<<endl;
    vector<char> s2 = {'H','a','n','n','a','h'};
    reverseString(s2);
    for(char c:s2) cout<<c<<" ";
    cout<<endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      cpp: "o l l e h\nh a n n a H",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "true" },
      { input: 's = "race a car"', output: "false" },
      { input: 's = " "', output: "true" },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));`,
      python: `def isPalindrome(s):
    pass

print(isPalindrome("A man, a plan, a canal: Panama"))
print(isPalindrome("race a car"))
print(isPalindrome(" "))`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        return false;
    }
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println(isPalindrome("race a car"));
        System.out.println(isPalindrome(" "));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
bool isPalindrome(string s) {
    return false;
}
int main() {
    cout<<boolalpha<<isPalindrome("A man, a plan, a canal: Panama")<<endl;
    cout<<boolalpha<<isPalindrome("race a car")<<endl;
    cout<<boolalpha<<isPalindrome(" ")<<endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "nums = [1]", output: "1" },
      { input: "nums = [5,4,-1,7,8]", output: "23" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));`,
      python: `def maxSubArray(nums):
    pass

print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
print(maxSubArray([1]))
print(maxSubArray([5,4,-1,7,8]))`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
        System.out.println(maxSubArray(new int[]{1}));
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int maxSubArray(vector<int>& nums) {
    return 0;
}
int main() {
    vector<int> a = {-2,1,-3,4,-1,2,1,-5,4};
    cout<<maxSubArray(a)<<endl;
    vector<int> b = {1};
    cout<<maxSubArray(b)<<endl;
    vector<int> c = {5,4,-1,7,8};
    cout<<maxSubArray(c)<<endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      cpp: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n.",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
      ],
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));`,
      python: `def maxArea(height):
    pass

print(maxArea([1,8,6,2,5,4,8,3,7]))
print(maxArea([1,1]))`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        System.out.println(maxArea(new int[]{1,1}));
    }
}`,
      cpp: `#include <bits/stdc++.h>
using namespace std;
int maxArea(vector<int>& h) {
    return 0;
}
int main() {
    vector<int> a = {1,8,6,2,5,4,8,3,7};
    cout<<maxArea(a)<<endl;
    vector<int> b = {1,1};
    cout<<maxArea(b)<<endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "49\n1",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: { name: "JavaScript", icon: "/javascript.png", monacoLang: "javascript" },
  python: { name: "Python", icon: "/python.png", monacoLang: "python" },
  java: { name: "Java", icon: "/java.png", monacoLang: "java" },
  cpp: { name: "C++", icon: "/cpp.png", monacoLang: "cpp" },
};
