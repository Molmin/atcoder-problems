Score : $400$ points

## Problem Statement

Let $S$ be a set composed of all integers from $1$ through $N$.

$f$ is a function from $S$ to $S$. You are given the values $f(1), f(2), \cdots, f(N)$ as $f_1, f_2, \cdots, f_N$.

Find the number, modulo $998244353$, of non-empty subsets $T$ of $S$ satisfying both of the following conditions:

- <p>For every $a \in T$, $f(a) \in T$.</p>
- <p>For every $a, b \in T$, $f(a) \neq f(b)$ if $a \neq b$.</p>

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq f_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $f_1$ $f_2$ $\ldots$ $f_N$

## Output

Print the number of non-empty subsets of $S$ satisfying both of the conditions, modulo $998244353$.

```input1
2
2 1
```

```output1
1
```

We have $f(1) = 2, f(2) = 1$. Since $f(1) \neq f(2)$, the second condition is always satisfied, but the first condition requires $T$ to contain $1$ and $2$ simultaneously.

```input2
2
1 1
```

```output2
1
```

We have $f(1) = f(2) = 1$. The first condition requires $T$ to contain $1$, and the second condition forbids $T$ to contain $2$.

```input3
3
1 2 3
```

```output3
7
```

We have $f(1) = 1, f(2) = 2, f(3) = 3$. Both of the conditions are always satisfied, so all non-empty subsets of $T$ count.