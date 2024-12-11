Score : $700$ points

## Problem Statement

Let us define the **beauty** of the string as the number of positions where two adjacent characters are the same.
For example, the beauty of `00011` is $3$, and the beauty of `10101` is $0$.

Let $S_{n,m}$ be the set of all strings of length $n+m$ formed of $n$ `0`s and $m$ `1`s.

For $s_1,s_2 \in S_{n,m}$, let us define the **distance** of $s_1$ and $s_2$, $d(s_1,s_2)$, as the minimum number of swaps needed when rearranging the string $s_1$ to $s_2$ by swaps of two adjacent characters.

Additionally, for $s_1,s_2,s_3\in S_{n,m}$, $s_2$ is said to be **between** $s_1$ and $s_3$ when $d(s_1,s_3)=d(s_1,s_2)+d(s_2,s_3)$.

Given $s,t\in S_{n,m}$, print the greatest beauty of a string between $s$ and $t$.

## Constraints

- $2 \le n + m\le 3\times 10^5$
- $0 \le n,m$
- Each of $s$ and $t$ is a string of length $n+m$ formed of $n$ `0`s and $m$ `1`s.

## Input

Input is given from Standard Input in the following format:

> $n$ $m$
> 
> $s$
> 
> $t$

## Output

Print the greatest beauty of a string between $s$ and $t$.

```input1
2 3
10110
01101
```

```output1
2
```

Between `10110` and `01101`, whose distance is $2$, we have the following strings: `10110`, `01110`, `01101`, `10101`.
Their beauties are $1$, $2$, $1$, $0$, respectively, so the answer is $2$.

```input2
4 2
000011
110000
```

```output2
4
```

Between `000011` and `110000`, whose distance is $8$, the strings with the greatest beauty are `000011` and `110000`, so the answer is $4$.

```input3
12 26
01110111101110111101001101111010110110
10011110111011011001111011111101001110
```

```output3
22
```