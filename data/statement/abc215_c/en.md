Score : $300$ points

## Problem Statement

Find the $K$-th lexicographically smallest string among the strings that are permutations of a string $S$.

What is a permutation of a string?A string $A$ is said to be a permutation of a string $B$ when any character occurs the same number of times in $A$ and $B$.

## Constraints

- $1 \le |S| \le 8$
- $S$ consists of lowercase English letters.
- There are at least $K$ distinct strings that are permutations of $S$.

## Input

Input is given from Standard Input in the following format:

> $S$ $K$

## Output

Print the answer.

```input1
aab 2
```

```output1
aba
```

There are three permutations of a string `aab`: $\{$ `aab`, `aba`, `baa` $\}$. The $2$-nd lexicographically smallest of them is `aba`. 

```input2
baba 4
```

```output2
baab
```

```input3
ydxwacbz 40320
```

```output3
zyxwdcba
```