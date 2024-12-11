Score : $300$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting only of lowercase English letters.

Find the number of strings obtained by permuting the characters of $S$ (including the string $S$ itself) that **do not contain** a palindrome of length $K$ as a substring.

Here, a string $T$ of length $N$ is said to "contain a palindrome of length $K$ as a substring" if and only if there exists a non-negative integer $i$ not greater than $(N-K)$ such that $T_{i+j} = T_{i+K+1-j}$ for every integer $j$ with $1 \leq j \leq K$.<br>
Here, $T_k$ denotes the $k$-th character of the string $T$.

## Constraints

- $2 \leq K \leq N \leq 10$
- $N$ and $K$ are integers.
- $S$ is a string of length $N$ consisting only of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the number of strings obtained by permuting $S$ that do not contain a palindrome of length $K$ as a substring.

```input1
3 2
aab
```

```output1
1
```

The strings obtained by permuting `aab` are `aab`, `aba`, and `baa`. Among these, `aab` and `baa` contain the palindrome `aa` of length $2$ as a substring.<br>
Thus, the only string that satisfies the condition is `aba`, so print $1$.

```input2
5 3
zzyyx
```

```output2
16
```

There are $30$ strings obtained by permuting `zzyyx`, $16$ of which do not contain a palindrome of length $3$. Thus, print $16$.

```input3
10 5
abcwxyzyxw
```

```output3
440640
```