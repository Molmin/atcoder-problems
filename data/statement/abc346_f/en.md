Score: $525$ points

## Problem Statement

For a string $X$ of length $n$, let $f(X,k)$ denote the string obtained by repeating $k$ times the string $X$, and $g(X,k)$ denote the string obtained by repeating $k$ times the first character, the second character, $\dots$, the $n$-th character of $X$, in this order. For example, if $X=$ `abc`, then $f(X,2)=$ `abcabc`, and $g(X,3)=$ `aaabbbccc`. Also, for any string $X$, both $f(X,0)$ and $g(X,0)$ are empty strings.

You are given a positive integer $N$ and strings $S$ and $T$. Find the largest non-negative integer $k$ such that $g(T,k)$ is a (not necessarily contiguous) subsequence of $f(S,N)$. Note that $g(T,0)$ is always a subsequence of $f(S,N)$ by definition.

What is a subsequence?
A (not necessarily contiguous) subsequence of a string $X$ is a string obtained by removing zero or more characters from $X$ and then concatenating the remaining elements without changing the order.  
For example, `ac`, `atcoder`, and ` ` (empty string) are all subsequences of `atcoder`, but `ta` is not. 

## Constraints

- $N$ is an integer.
- $1\leq N\leq 10^{12}$
- $S$ and $T$ are strings consisting of lowercase English letters with lengths between $1$ and $10^5$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

Print the largest non-negative integer $k$ such that $g(T,k)$ is a (not necessarily contiguous) subsequence of $f(S,N)$.

```input1
3
abc
ab
```

```output1
2
```

We have $f(S,3)=$ `abcabcabc`.
$g(T,2)=$ `aabb` is a subsequence of $f(S,3)$, but $g(T,3)=$ `aaabbb` is not, so print $2$.

```input2
3
abc
arc
```

```output2
0
```

```input3
1000000000000
kzazkakxkk
azakxk
```

```output3
344827586207
```