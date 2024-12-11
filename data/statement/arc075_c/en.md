Score : $600$ points

## Problem Statement

You are given an integer sequence of length $N$, $a =$ {$a_1, a_2, \cdots , a_N$}, and an integer $K$.

$a$ has $N(N+1)/2$ non-empty contiguous subsequences, {$a_l, a_{l+1}, \cdots , a_r$} $(1 \leq l \leq r \leq N)$. Among them, how many have an arithmetic mean that is greater than or equal to $K$?

## Constraints

- All input values are integers.
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq 10^9$
- $1 \leq a_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $a_1$
> 
> $a_2$
> 
> $:$
> 
> $a_N$

## Output

Print the number of the non-empty contiguous subsequences with an arithmetic mean that is greater than or equal to $K$.

```input1
3 6
7
5
7
```

```output1
5
```

All the non-empty contiguous subsequences of $a$ are listed below:

- {$a_1$} = {$7$}
- {$a_1, a_2$} = {$7, 5$}
- {$a_1, a_2, a_3$} = {$7, 5, 7$}
- {$a_2$} = {$5$}
- {$a_2, a_3$} = {$5, 7$}
- {$a_3$} = {$7$}

Their means are $7$, $6$, $19/3$, $5$, $6$ and $7$, respectively, and five among them are $6$ or greater. Note that {$a_1$} and {$a_3$} are indistinguishable by the values of their elements, but we count them individually.

```input2
1 2
1
```

```output2
0
```

```input3
7 26
10
20
30
40
30
20
10
```

```output3
13
```