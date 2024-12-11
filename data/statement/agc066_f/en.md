Score: $1600$ points

## Problem Statement

A string is called a **beautiful string** if and only if it satisfies the following conditions:

- Every character is `A`, `B`, or `C`.
- No two adjacent characters are the same.

For example, `AB` and `BCAC` are beautiful strings, while `BB` and `CBAAC` are not.

You are given a beautiful string $S$. On this string, you can repeatedly perform the following operation.

- Operation: Swap two adjacent characters in $S$. Here, $S$ must still be a beautiful string after the swap.

Find the lexicographically smallest string that $S$ can become.

$T$ test cases are given; solve each of them.

## Constraints

- $1\leq T\leq 10^5$
- $S$ is a beautiful string.
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

Print $T$ lines. The $i$-th line should contain the lexicographically smallest string that $S$ can become for the $i$-th test case.

```input1
8
CAB
ACBCB
B
AC
BACBA
BABABA
ABCBCAC
CBABACABCBABABC
```

```output1
ABC
ABCBC
B
AC
ABABC
BABABA
ABCACBC
ABABACBCACBCBAB
```

For each of the first and second test cases, here is a possible way to lexicographically minimize $S$:

- `CAB` → `ACB` → `ABC`
- `ACBCB` → `CABCB` → `CBACB` → `BCACB` → `BCABC` → `BACBC` → `ABCBC`