Score: $800$ points

## Problem Statement

You are given a string $S$ consisting of characters `A` and `B`.

On this string, you can repeatedly perform the following operation:

- Choose three consecutive characters in $S$ that are equal to `AAB` or `BAA`, and delete those three characters from $S$ (after deletion, the remaining characters are concatenated).

Find the maximum number of times you can perform this operation.

$T$ test cases are given; solve each of them.

## Constraints

- $1\leq T\leq 10^5$
- $S$ is a string consisting of `A` and `B`.
- $1\leq |S|\leq 10^6$
- The sum of $|S|$ over all test cases in a single input is at most $10^6$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each test case is given in the following format:

> $S$

## Output

Print $T$ lines. The $i$-th line should contain the maximum number of operations that can be performed for the $i$-th test case.

```input1
10
AABAAAB
BAAAAABBA
A
B
ABA
BAA
AAAAAA
AAAABB
AABABBAABBABAAAABBAA
BBAAAAABAAAAABABAABA
```

```output1
2
3
0
0
0
1
0
2
5
6
```

For each of the first and second test cases, here is a possible way to perform the maximum number of operations:

- `AABAAAB` → `AAAB` → `A`
- `BAAAAABBA` → `BAAABA` → `BAA` → (empty string)