Score : $900$ points

## Problem Statement

Let $r &gt; 1$ be a rational number, and $p$ and $q$ be the numerator and denominator of $r$, respectively. That is, $p$ and $q$ are positive integers such that $r = \frac{p}{q}$ and $\gcd(p,q) = 1$.

Let the **base-$\boldsymbol{r}$ expansion** of a positive integer $n$ be the integer sequence $(a_1, \ldots, a_k)$ that satisfies all of the following conditions.

- $a_i$ is an integer between $0$ and $p-1$.
- $a_1\neq 0$.
- $n = \sum_{i=1}^k a_ir^{k-i}$.

It can be proved that any positive integer $n$ has a unique base-$r$ expansion.

You are given positive integers $p$, $q$, $N$, $L$, and $R$. Here, $p$ and $q$ satisfy $1.01 \leq \frac{p}{q}$.

Consider sorting all positive integers not greater than $N$ in ascending lexicographical order of their base-$\frac{p}{q}$ expansions. Find the $L$-th, $(L+1)$-th, $\ldots$, $R$-th positive integers in this list.

As usual, decimal notations are used in the input and output of positive integers.

 What is lexicographical order on sequences?

A sequence $A = (A_1, \ldots, A_{|A|})$ is said to be **lexicographically smaller** than $B = (B_1, \ldots, B_{|B|})$ when 1. or 2. below is satisfied. Here, $|A|$ and $|B|$ denote the lengths of $A$ and $B$, respectively.

1. $|A|&lt;|B|$ and $(A_{1},\ldots,A_{|A|}) = (B_1,\ldots,B_{|A|})$.
2. There is an integer $1\leq i\leq \min\{|A|,|B|\}$ that satisfies both of the following.
1.    - $(A_{1},\ldots,A_{i-1}) = (B_1,\ldots,B_{i-1})$.
2.    - $A_i &amp;lt; B_i$.

## Constraints

- $1\leq p, q \leq 10^9$
- $\gcd(p,q) = 1$
- $1.01 \leq \frac{p}{q}$
- $1\leq N\leq 10^{18}$
- $1\leq L\leq R\leq N$
- $R - L + 1\leq 3\times 10^5$

## Input

The input is given from Standard Input in the following format:

> $p$ $q$ $N$ $L$ $R$

## Output

Print $R-L+1$ lines. The $i$-th line should contain the $(L + i - 1)$-th positive integer in the list of all positive integers not greater than $N$ sorted in ascending lexicographical order of their base-$\frac{p}{q}$ expansions.

Use decimal notations to print positive integers.

```input1
3 1 9 1 9
```

```output1
1
3
9
4
5
2
6
7
8
```

The base-$3$ expansions of the positive integers not greater than $9$ are as follows.

```output1
1: (1),        2: (2),        3: (1, 0),
4: (1, 1),     5: (1, 2),     6: (2, 0),
7: (2, 1),     8: (2, 2),     9: (1, 0, 0).
```

```input2
3 2 9 1 9
```

```output2
1
2
3
4
6
9
7
8
5
```

The base-$\frac32$ expansions of the positive integers not greater than $9$ are as follows.

```output2
1: (1),        2: (2),        3: (2, 0),     
4: (2, 1),     5: (2, 2),     6: (2, 1, 0),  
7: (2, 1, 1),  8: (2, 1, 2),  9: (2, 1, 0, 0).
```

One can see that the base-$\frac32$ expansion of $6$ is $(2,1,0)$, for instance, from $2\cdot \bigl(\frac32\bigr)^2 + 1\cdot \frac32 + 0\cdot 1 = 6$.

```input3
3 2 9 3 8
```

```output3
3
4
6
9
7
8
```

This is the $3$-rd through $8$-th lines of the output to Sample Input 2.

```input4
10 9 1000000000000000000 123456789123456789 123456789123456799
```

```output4
806324968563249278
806324968563249279
725692471706924344
725692471706924345
725692471706924346
725692471706924347
725692471706924348
725692471706924349
653123224536231907
653123224536231908
653123224536231909
```