Score : $300$ points

## Problem Statement

You are given a string $S$ of length $N$.  Let $S_i\ (1\leq i \leq N)$ be the $i$-th character of $S$ from the left.

You may perform the following two kinds of operations zero or more times in any order:

- <p>Pay $A$ yen (the currency in Japan).  Move the leftmost character of $S$ to the right end.  In other words, change $S_1S_2\ldots S_N$ to $S_2\ldots S_NS_1$.</p>
- <p>Pay $B$ yen.  Choose an integer $i$ between $1$ and $N$, and replace $S_i$ with any lowercase English letter.</p>

How many yen do you need to pay to make $S$ a palindrome?

What is a palindrome?
A string $T$ is a palindrome if and only if the $i$-th character from the left and the $i$-th character from the right are the same for all integers $i$ ($1 \le i \le |T|$), where $|T|$ is the length of $T$.

## Constraints

- $1\leq N \leq 5000$
- $1\leq A,B\leq 10^9$
- $S$ is a string of length $N$ consisting of lowercase English letters.
- All values in the input except for $S$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $B$
> 
> $S$

## Output

Print the answer as an integer.

```input1
5 1 2
rrefa
```

```output1
3
```

First, pay $2$ yen to perform the operation of the second kind once: let $i=5$ to replace $S_5$ with `e`.  $S$ is now `rrefe`.

Then, pay $1$ yen to perform the operation of the first kind once.  $S$ is now `refer`, which is a palindrome.

Thus, you can make $S$ a palindrome for $3$ yen.  Since you cannot make $S$ a palindrome for $2$ yen or less, $3$ is the answer.

```input2
8 1000000000 1000000000
bcdfcgaa
```

```output2
4000000000
```

Note that the answer may not fit into a $32$-bit integer type.