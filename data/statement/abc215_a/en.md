Score : $100$ points

## Problem Statement

Given a string $S$, print `AC` if it perfectly matches `Hello,World!`; otherwise, print `WA`.

What is a perfect match?Strings $A$ is said to perfectly match $B$ when the length of $A$ is equal to that of $B$, and the $i$-th character of $A$ is the same as the $i$-th character of $B$ for every integer $i$ such that $1 \le i \le |A|$.

## Constraints

- $1 \le |S| \le 15$
- $S$ consists of English lowercase letters, English uppercase letters, `,`, and `!`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
Hello,World!
```

```output1
AC
```

The string $S$ perfectly matches `Hello,World!`.

```input2
Hello,world!
```

```output2
WA
```

The seventh character from the beginning should be an uppercase `W` in `Hello,World!`, but $S$ has a lowercase `w` in that position. Thus, $S$ does not match `Hello,World!`.

```input3
Hello!World!
```

```output3
WA
```