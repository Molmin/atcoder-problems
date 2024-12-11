Score : $300$ points

## Problem Statement

Given is a string $S$ consisting of lowercase English letters.
Determine whether adding some number of `a`'s (possibly zero) at the beginning of $S$ can make it a palindrome.

Here, a string of length $N$, $A=A_1A_2\ldots A_N$, is said to be a palindrome when $A_i=A_{N+1-i}$ for every $1\leq i\leq N$.

## Constraints

- $1 \leq \lvert S \rvert \leq 10^6$
- $S$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If adding some number of `a`'s (possibly zero) at the beginning of $S$ can make it a palindrome, print `Yes`; otherwise, print `No`.

```input1
kasaka
```

```output1
Yes
```

By adding one `a` at the beginning of `kasaka`, we have `akasaka`, which is a palindrome, so `Yes` should be printed.

```input2
atcoder
```

```output2
No
```

Adding any number of `a`'s at the beginning of `atcoder` does not make it a palindrome.

```input3
php
```

```output3
Yes
```

`php` itself is a palindrome. Adding zero `a`'s at the beginning of $S$ is allowed, so `Yes` should be printed.