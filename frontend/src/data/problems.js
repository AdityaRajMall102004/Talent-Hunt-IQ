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
      javascript: ``,
      python: ``,
      java: ``,
      cpp: ``,
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
      javascript: ``,
      python: ``,
      java: ``,
      cpp: ``,
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
      javascript: ``,
      python: ``,
      java: ``,
      cpp: ``,
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
      javascript: ``,
      python: ``,
      java: ``,
      cpp: ``,
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
      javascript: ``,
      python: ``,
      java: ``,
      cpp: ``,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "49\n1",
    },
  },
  "nxtprmttin": {
    id: "nxtprmttin",
    title: "Next Permutation",
    difficulty: "Medium",
    category: "Arrays • Data Structures • Two Pointer",
    description: { "text": "Given an array of integers that represents a permutation of numbers, transform the permutation into the lexicographically next greater permutation. If such permutation does not exist (the array is sorted in descending order), rearrange it as the lowest possible order (ascending). The replacement must be in-place and use only constant extra memory.", "notes": ["Standard in-place algorithm: find pivot, swap with right successor, reverse suffix."] },
examples: [
      { "input": "[1,2,3]", "output": "[1,3,2]", "explanation": "Next permutation after 1,2,3 is 1,3,2." },
      { "input": "[3,2,1]", "output": "[1,2,3]", "explanation": "Highest permutation — return lowest." }
    ],
    constraints: ["1 <= nums.length <= 1000","-10^9 <= nums[i] <= 10^9"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Modify array in-place to next permutation.", "python": "Modify list in-place to next permutation.", "java": "Modify int[] in-place to next permutation.", "cpp": "Modify vector<int> in-place to next permutation." }
  },
  "3smprblm": {
    id: "3smprblm",
    title: "3-Sum Problem",
    difficulty: "Medium",
    category: "Arrays • Sorting • Two Pointer • Data Structures • Hashing",
    description: { "text": "Given an array of integers, find all unique triplets in the array which gives the sum of zero. The solution set must not contain duplicate triplets.", "notes": ["Sort + two-pointer technique to avoid duplicates."] },
examples: [
      { "input": "[-1,0,1,2,-1,-4]", "output": "[[-1,-1,2],[-1,0,1]]", "explanation": "All unique triplets summing to 0." }
    ],
    constraints: ["0 <= nums.length <= 3000","-10^5 <= nums[i] <= 10^5"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return array of triplet arrays.", "python": "Return list of triplet lists.", "java": "Return List<List<Integer>>.", "cpp": "Return vector<vector<int>>." }
  },
  "kdnslgrithm": {
    id: "kdnslgrithm",
    title: "Kadane's Algorithm",
    difficulty: "Easy",
    category: "Arrays • Data Structures",
    description: { "text": "Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.", "notes": ["Use Kadane's algorithm: running max and global max."] },
examples: [
      { "input": "[-2,1,-3,4,-1,2,1,-5,4]", "output": "6", "explanation": "[4,-1,2,1] has the maximum sum = 6." }
    ],
    constraints: ["1 <= nums.length <= 10^5","-10^4 <= nums[i] <= 10^4"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return integer max subarray sum.", "python": "Return int max subarray sum.", "java": "Return int.", "cpp": "Return int." }
  },
  "mjritylmntn3tims": {
    id: "mjritylmntn3tims",
    title: "Majority Element (n/3 times)",
    difficulty: "Medium",
    category: "Arrays • Hashing • Data Structures",
    description: { "text": "Find all elements that appear more than n/3 times in the given array. The algorithm should run in linear time and use constant extra space (Boyer–Moore majority vote extension) or use hashing.", "notes": ["At most two elements can appear more than n/3 times."] },
examples: [
      { "input": "[3,2,3]", "output": "[3]", "explanation": "3 appears twice (> 3/3)." },
      { "input": "[1]", "output": "[1]", "explanation": "Single element." }
    ],
    constraints: ["1 <= nums.length <= 5 * 10^4","-10^9 <= nums[i] <= 10^9"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return array of majority elements.", "python": "Return list of majority elements.", "java": "Return List<Integer>.", "cpp": "Return vector<int>." }
  },
  "cntnmbrfsbrryswithgivnxrk": {
    id: "cntnmbrfsbrryswithgivnxrk",
    title: "Count number of subarrays with given xor K",
    difficulty: "Hard",
    category: "Arrays • Hashing • Data Structures",
    description: { "text": "Given an array of non-negative integers and an integer K, count the number of subarrays whose XOR equals K. Typical solution uses prefix-xor and a hashmap to count previous prefixes.", "notes": ["Use prefix xor and frequency map: for each prefix p, look for p ^ K in map."] },
examples: [
      { "input": "nums = [4,2,2,6,4], K = 6", "output": "4", "explanation": "Subarrays: [4,2], [2,2,6], [6], [2,6,4]? (example depends)" }
    ],
    constraints: ["1 <= nums.length <= 2 * 10^5","0 <= nums[i], K <= 10^9"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return integer count.", "python": "Return int count.", "java": "Return long or int depending.", "cpp": "Return long long or int depending." }
  },
  "findthrptingndmissingnmbr-i": {
    id: "findthrptingndmissingnmbr-i",
    title: "Find the repeating and missing number",
    difficulty: "Hard",
    category: "Arrays • Maths • Hashing • Data Structures",
    description: { "text": "Given an unsorted array of size n containing numbers from 1 to n with one number repeated and one number missing, find the repeating and the missing number. Multiple approaches: XOR, sum/difference, or hashing.", "notes": ["Return pair (repeating, missing)."] },
examples: [
      { "input": "[3,1,3]", "output": "repeating = 3, missing = 2", "explanation": "3 repeats, 2 missing." }
    ],
    constraints: ["2 <= n <= 10^6","1 <= nums[i] <= n"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return object/pair {repeating, missing}.", "python": "Return tuple (repeating, missing).", "java": "Return int[] of size 2.", "cpp": "Return pair<int,int> or vector<int> of size 2." }
  },
  "cntinvrsins": {
    id: "cntinvrsins",
    title: "Count Inversions",
    difficulty: "Hard",
    category: "Sorting • Arrays • Data Structures",
    description: { "text": "Count the number of inversions in the array (pairs i < j with arr[i] > arr[j]). Use modified merge sort to count inversions in O(n log n).", "notes": ["Naive O(n^2) approach times out for large n."] },
examples: [
      { "input": "[2,4,1,3,5]", "output": "3", "explanation": "Inversions: (2,1),(4,1),(4,3)." }
    ],
    constraints: ["1 <= n <= 2 * 10^5","-10^9 <= arr[i] <= 10^9"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return long long inversion count.", "python": "Return int/long inversion count.", "java": "Return long.", "cpp": "Return long long." }
  },
  "mximmprdctsbrry": {
    id: "mximmprdctsbrry",
    title: "Maximum Product Subarray",
    difficulty: "Easy",
    category: "Arrays • Data Structures",
    description: { "text": "Find the contiguous subarray within an array (containing at least one number) which has the largest product. Handle negatives by tracking both max and min at every step.", "notes": ["Watch for zeros and negative numbers."] },
examples: [
      { "input": "[2,3,-2,4]", "output": "6", "explanation": "[2,3] gives product 6." }
    ],
    constraints: ["1 <= nums.length <= 10^5","-10 <= nums[i] <= 10"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return integer/long max product.", "python": "Return int max product.", "java": "Return int/long.", "cpp": "Return long long or int depending." }
  },
  "srchinrttdsrtdrryii": {
    id: "srchinrttdsrtdrryii",
    title: "Search in Rotated Sorted Array II",
    difficulty: "Medium",
    category: "Arrays • Binary Search",
    description: { "text": "Search target in a rotated sorted array which may contain duplicates. Return true if found, otherwise false. Use modified binary search handling duplicates by shrinking boundaries when necessary.", "notes": ["Duplicates complicate identification of sorted half; handle nums[l]==nums[mid]==nums[r]."] },
examples: [
      { "input": "nums = [2,5,6,0,0,1,2], target = 0", "output": "true", "explanation": "0 exists." }
    ],
    constraints: ["1 <= nums.length <= 10^4","-10^4 <= nums[i] <= 10^4"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return boolean.", "python": "Return bool.", "java": "Return boolean.", "cpp": "Return bool." }
  },
  "findminimminrttdsrtdrry": {
    id: "findminimminrttdsrtdrry",
    title: "Find minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Arrays • Data Structures",
    description: { "text": "Given a rotated sorted array, find the minimum element. Use binary search to find rotation point in O(log n).", "notes": ["Array contains distinct elements unless specified otherwise."] },
examples: [
      { "input": "[3,4,5,1,2]", "output": "1", "explanation": "Minimum is 1." }
    ],
    constraints: ["1 <= nums.length <= 10^5","-10^9 <= nums[i] <= 10^9"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return integer minimum.", "python": "Return int minimum.", "java": "Return int.", "cpp": "Return int." }
  },
  "findpklmnt": {
    id: "findpklmnt",
    title: "Find peak element",
    difficulty: "Hard",
    category: "Arrays • Binary Search",
    description: { "text": "A peak element is an element that is strictly greater than its neighbors. Given an array, find a peak element and return its index. Array may contain multiple peaks; return any. Use binary search to achieve O(log n).", "notes": ["Edges: consider virtual -inf outside bounds."] },
examples: [
      { "input": "[1,2,3,1]", "output": "2", "explanation": "Index 2 (value 3) is a peak." }
    ],
    constraints: ["1 <= nums.length <= 10^5","-10^9 <= nums[i] <= 10^9"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return any peak index (int).", "python": "Return int index.", "java": "Return int.", "cpp": "Return int." }
  },
  "kktingbnns": {
    id: "kktingbnns",
    title: "Koko Eating Bananas",
    difficulty: "Hard",
    category: "Arrays • Binary Search • Data Structures",
    description: { "text": "Koko loves to eat bananas. Given piles of bananas and H hours, find the minimum integer K (bananas/hour) such that Koko can eat all bananas within H hours. For each pile of size p, it takes ceil(p/K) hours.", "notes": ["Binary search on answer (K) between 1 and max(pile)."] },
examples: [
      { "input": "piles=[3,6,7,11], H=8", "output": "4", "explanation": "Eating speed 4 works." }
    ],
    constraints: ["1 <= piles.length <= 10^4","1 <= piles[i] <= 10^9","1 <= H <= 10^9"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return int K.", "python": "Return int K.", "java": "Return int.", "cpp": "Return int." }
  },
  "ggrssivcws": {
    id: "ggrssivcws",
    title: "Aggressive Cows",
    difficulty: "Hard",
    category: "Arrays • Binary Search • Data Structures",
    description: { "text": "Place C cows in stalls at given positions to maximize the minimum distance between any two cows. Return the largest minimum distance. Use binary search on distance and greedy placement to check feasibility.", "notes": ["Classic binary-search-on-answer problem."] },
examples: [
      { "input": "stalls=[1,2,4,8,9], C=3", "output": "3", "explanation": "Place cows at 1,4,8 -> min distance 3." }
    ],
    constraints: ["2 <= stalls.length <= 10^5","0 <= stalls[i] <= 10^9","2 <= C <= stalls.length"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return int largest min distance.", "python": "Return int.", "java": "Return int.", "cpp": "Return int." }
  },
  "bkllctinprblm": {
    id: "bkllctinprblm",
    title: "Book Allocation Problem",
    difficulty: "Hard",
    category: "Arrays • Data Structures • Binary Search",
    description: { "text": "Allocate books (each with pages) to M students such that each student gets contiguous books and the maximum pages assigned to a student is minimized. Return the minimized maximum pages. Use binary search on answer and greedy check.", "notes": ["If M > number of books, allocation not possible (can return -1 depending on statement)."] },
examples: [
      { "input": "pages=[12,34,67,90], M=2", "output": "113", "explanation": "Minimum possible maximum pages is 113 (12+34+67, 90)." }
    ],
    constraints: ["1 <= pages.length <= 10^5","1 <= pages[i] <= 10^6","1 <= M <= 10^5"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return int minimal maximum pages.", "python": "Return int.", "java": "Return int.", "cpp": "Return int." }
  },
  "mdinf2srtdrrys": {
    id: "mdinf2srtdrrys",
    title: "Median of 2 sorted arrays",
    difficulty: "Hard",
    category: "Arrays • Binary Search • Data Structures",
    description: { "text": "Given two sorted arrays, find the median of the combined sorted array in O(log(min(m,n))) time using binary search on partition positions.", "notes": ["Careful handling of even/odd total length."] },
examples: [
      { "input": "nums1=[1,3], nums2=[2]", "output": "2.0", "explanation": "Combined [1,2,3], median 2." }
    ],
    constraints: ["0 <= m,n <= 10^6","-10^9 <= elements <= 10^9"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return float median.", "python": "Return float.", "java": "Return double.", "cpp": "Return double." }
  },
  "minimizmxdistnctgssttin": {
    id: "minimizmxdistnctgssttin",
    title: "Minimize Max Distance to Gas Station",
    difficulty: "Hard",
    category: "Arrays • Binary Search • Data Structures",
    description: { "text": "Given positions of existing gas stations and number of new stations K to add, minimize the maximum distance between adjacent gas stations after adding K. Binary search on distance with greedy insertion check.", "notes": ["Return smallest possible maximum distance (floating point)."] },
examples: [
      { "input": "stations=[1,2,3,4,5,6,7,8,9], K=1", "output": "0.5", "explanation": "Add one station to reduce largest gap." }
    ],
    constraints: ["1 <= stations.length <= 10^5","0 <= stations[i] <= 10^9","0 <= K <= 10^9"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return float minimal max distance.", "python": "Return float.", "java": "Return double.", "cpp": "Return double." }
  },
  "middlflinkdlisttrtishrmthd": {
    id: "middlflinkdlisttrtishrmthd",
    title: "Middle of a LinkedList [TortoiseHare Method]",
    difficulty: "Easy",
    category: "Linked List • Data Structures",
    description: { "text": "Return the middle node of a singly linked list. If there are two middle nodes, return the second one. Use slow and fast pointers (tortoise-hare).", "notes": ["One pass O(n) time and O(1) space."] },
examples: [
      { "input": "[1,2,3,4,5]", "output": "3", "explanation": "Middle node value is 3." },
      { "input": "[1,2,3,4,5,6]", "output": "4", "explanation": "Second middle for even length is 4." }
    ],
    constraints: ["1 <= list length <= 10^5"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return reference to middle node.", "python": "Return ListNode.", "java": "Return ListNode.", "cpp": "Return ListNode* or node reference." }
  },
  "dtctlpinll": {
    id: "dtctlpinll",
    title: "Detect a loop in LL",
    difficulty: "Medium",
    category: "Linked List • Data Structures",
    description: { "text": "Detect whether a singly linked list has a cycle. Return true if a cycle exists, otherwise false. Use Floyd's cycle-finding algorithm (slow and fast pointers).", "notes": ["Can also find the start node of the cycle by resetting one pointer to head and moving both at same speed."] },
examples: [
      { "input": "head -> 3 -> 2 -> 0 -> -4 (tail links to node 2)", "output": "true", "explanation": "Cycle exists." }
    ],
    constraints: ["1 <= number of nodes <= 10^5"],
    starterCode: { "javascript": "", "python": "", "java": "", "cpp": "" },
    expectedOutput: { "javascript": "Return boolean cycleExists.", "python": "Return bool.", "java": "Return boolean.", "cpp": "Return bool." }
  }
};
export const LANGUAGE_CONFIG = {
  javascript: { name: "JavaScript", icon: "/javascript.png", monacoLang: "javascript" },
  python: { name: "Python", icon: "/python.png", monacoLang: "python" },
  java: { name: "Java", icon: "/java.png", monacoLang: "java" },
  cpp: { name: "C++", icon: "/cpp.png", monacoLang: "cpp" },
};