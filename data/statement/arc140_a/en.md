Score : $300$ points

## Problem Statement

For a string $T$ consisting of lowercase English letters, consider the question below, and let $f(T)$ be the answer.

    Find the number of different strings obtained by performing the following operation any number of times: delete the first character from $T$ and append it to the end.

You are given a string $S$ of length $N$ consisting of lowercase English letters. You can perform the operation below at most $K$ times (possibly zero).

- Choose a character of $S$ and change it to any lowercase English letter.

Find the minimum possible value of $f(S)$ after your operations.

## Constraints

- $1 \le N \le 2000$
- $0 \le K \le N$
- $S$ is a string of length $N$ consisting of lowercase English letters.
- $N$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the answer.

```input1
4 1
abac
```

```output1
2
```

If you change the fourth character `c` to `b` in the first operation, you get $S=$ `abab`, with $f(S)=2$.

$f(S)$ cannot be made $1$ or less in one or fewer operations, so the answer is $2$.

```input2
10 0
aaaaaaaaaa
```

```output2
1
```

```input3
6 1
abcaba
```

```output3
3
```