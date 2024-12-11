Score : $700$ points

## Problem Statement

Given positive integers $N, K$ and $M$, solve the following problem for every integer $x$ between $1$ and $N$ (inclusive):

- Find the number, modulo $M$, of non-empty multisets containing between $0$ and $K$ (inclusive) instances of each of the integers $1, 2, 3 \cdots, N$ such that the average of the elements is $x$.

## Constraints

- $1 \leq N, K \leq 100$
- $10^8 \leq M \leq 10^9 + 9$
- $M$ is prime.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $M$

## Output

Use the following format:

> $c_1$
> 
> $c_2$
> 
> $:$
> 
> $c_N$

Here, $c_x$ should be the number, modulo $M$, of multisets such that the average of the elements is $x$.

```input1
3 1 998244353
```

```output1
1
3
1
```

Consider non-empty multisets containing between $0$ and $1$ instance(s) of each of the integers between $1$ and $3$. Among them, there are:

- one multiset such that the average of the elements is $k = 1$: $\{1\}$;
- three multisets such that the average of the elements is $k = 2$: $\{2\}, \{1, 3\}, \{1, 2, 3\}$;
- one multiset such that the average of the elements is $k = 3$: $\{3\}$.

```input2
1 2 1000000007
```

```output2
2
```

Consider non-empty multisets containing between $0$ and $2$ instances of each of the integers between $1$ and $1$. Among them, there are:

- two multisets such that the average of the elements is $k = 1$: $\{1\}, \{1, 1\}$.

```input3
10 8 861271909
```

```output3
8
602
81827
4054238
41331779
41331779
4054238
81827
602
8
```