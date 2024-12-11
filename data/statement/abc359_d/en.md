Score : $450$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of characters `A`, `B`, and `?`.

You are also given a positive integer $K$.
A string $T$ consisting of `A` and `B` is considered a **good string** if it satisfies the following condition:

- **No** contiguous substring of length $K$ in $T$ is a palindrome.

Let $q$ be the number of `?` characters in $S$.
There are $2^q$ strings that can be obtained by replacing each `?` in $S$ with either `A` or `B`. Find how many of these strings are good strings.

The count can be very large, so find it modulo $998244353$.

## Constraints

- $2 \leq K \leq N \leq 1000$
- $K \leq 10$
- $S$ is a string consisting of `A`, `B`, and `?`.
- The length of $S$ is $N$.
- $N$ and $K$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the answer.

```input1
7 4
AB?A?BA
```

```output1
1
```

The given string has two `?`s.
There are four strings obtained by replacing each `?` with `A` or `B`:

- `ABAAABA`
- `ABAABBA`
- `ABBAABA`
- `ABBABBA`

Among these, the last three contain the contiguous substring `ABBA` of length 4, which is a palindrome, and thus are not good strings.

Therefore, you should print `1`.

```input2
40 7
????????????????????????????????????????
```

```output2
116295436
```

Ensure to find the number of good strings modulo $998244353$.

```input3
15 5
ABABA??????????
```

```output3
0
```

It is possible that there is no way to replace the `?`s to obtain a good string.

```input4
40 8
?A?B??B?B?AA?A?B??B?A???B?BB?B???BA??BAA
```

```output4
259240
```