Score : $400$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters, and a positive integer $K$.

Determine whether there is a string $S'$ of length $K$ that satisfies the following conditions.

- The concatenation of $S$ and $S'$ in this order is a palindrome.
- The concatenation of $S'$ and $S$ in this order is a palindrome.

You have $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 10^5$
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq 10^{18}$
- $S$ is a string of length $N$ consisting of lowercase English letters.
- All numbers in the input are integers.
- In each input file, the sum of $N$ over the test cases is at most $2 \times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is in the following format:

> $N$ $K$
> 
> $S$

## Output

Print $T$ lines. The $i$-th line should contain `Yes` if there is a string $S'$ that satisfies the conditions for the $i$-th test case, and `No` otherwise.

```input1
2
6 2
abbaab
5 3
abcbb
```

```output1
Yes
No
```

For the first test case, if we let $S' = {}$`ba`, for instance, the concatenation of $S$ and $S'$ in this order will be `abbaabba`, which is a palindrome. Here, the concatenation of $S'$ and $S$ in this order is `baabbaab`, which is also a palindrome. Thus, $S' = {}$`ba` satisfies the condition, so the answer is `Yes`.

For the second test case, we can prove that no string satisfies the conditions.

```input2
3
12 400378271514996652
njvhhvjnnjvh
10 884633988115575508
rrhiyvrrur
36 71630165869626180
vsxmxajrrduhhudrrjaxmxsvvsxmxajrrduh
```

```output2
Yes
No
Yes
```