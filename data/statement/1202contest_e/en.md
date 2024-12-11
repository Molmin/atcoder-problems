Score : $100$ points

## Problem Statement

You are given a string $S$ consisting of lowercase letters. 
For each contiguous substring of $S$ (there are $|S|(|S|+1)/2$ such substrings), solve the following problem, and compute the sum of the answers.

Problem: You are given a string $T$ consisting of lowercase letters. 
Compute the minimum possible length of a string that can be obtained from $T$ by repeatedly applying the following operation an arbitrary number of times.

- Take a prefix of $T$ that is a palindrome of odd length. Let the length be $2k+1$. Remove the first $k$ letters of $T$.

## Constraints

- $1\leq |S|\leq 10^6$
- $S$ consists of lowercase letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
abab
```

```output1
16
```

If $T$ is `a` or `b`, the answer is $1$.

If $T$ is `ab` or `ba`, the answer is $2$.

If $T$ is `aba` or `bab`, applying the operation with $k=1$ once is optimal, and the answer is $2$.

If $T$ is `abab`, applying the operation with $k=1$ twice is optimal, and the answer is $2$.

Therefore, the whole answer is $1\times 4 + 2\times 3 + 2\times 2 + 2\times 1 = 16$.

```input2
abacaba
```

```output2
67
```

```input3
tabatadebatabata
```

```output3
739
```