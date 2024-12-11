Score: $550$ points

## Problem Statement

The Kingdom of AtCoder has $N$ towns: towns $1$, $2$, $\ldots$, $N$.
To move from town $i$ to town $j$, you must pay a toll of $C \times |i-j|$ yen.

Takahashi, a merchant, is considering participating in zero or more of $M$ upcoming markets.

The $i$-th market $(1 \leq i \leq M)$ is described by the pair of integers $(T_i, P_i)$, where the market is held in town $T_i$ and he will earn $P_i$ yen if he participates.

For all $1 \leq i &lt; M$, the $i$-th market ends before the $(i+1)$-th market begins.
The time it takes for him to move is negligible.

He starts with $10^{10^{100}}$ yen and is initially in town $1$.
Determine the maximum profit he can make by optimally choosing which markets to participate in and how to move.

Formally, let $10^{10^{100}} + X$ be his final amount of money if he maximizes the amount of money he has after the $M$ markets. Find $X$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq C \leq 10^9$
- $1 \leq M \leq 2 \times 10^5$
- $1 \leq T_i \leq N$ $(1 \leq i \leq M)$
- $1 \leq P_i \leq 10^{13}$ $(1 \leq i \leq M)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $C$
> 
> $M$
> 
> $T_1$ $P_1$
> 
> $T_2$ $P_2$
> 
> $\vdots$
> 
> $T_M$ $P_M$

## Output

Print the answer.

```input1
6 3
4
5 30
2 10
4 25
2 15
```

```output1
49
```

For example, Takahashi can increase his money by $49$ yen by acting as follows:

- Move to town $5$. His money becomes $10^{10^{100}} - 12$ yen.
- Participate in the first market. His money becomes $10^{10^{100}} + 18$ yen.
- Move to town $4$. His money becomes $10^{10^{100}} + 15$ yen.
- Participate in the third market. His money becomes $10^{10^{100}} + 40$ yen.
- Move to town $2$. His money becomes $10^{10^{100}} + 34$ yen.
- Participate in the fourth market. His money becomes $10^{10^{100}} + 49$ yen.

It is impossible to increase his money to $10^{10^{100}} + 50$ yen or more, so print `49`.

```input2
6 1000000000
4
5 30
2 10
4 25
2 15
```

```output2
0
```

The toll fee is so high that it is optimal for him not to move from town $1$.

```input3
50 10
15
37 261
28 404
49 582
19 573
18 633
3 332
31 213
30 377
50 783
17 798
4 561
41 871
15 525
16 444
26 453
```

```output3
5000
```

```input4
50 1000000000
15
30 60541209756
48 49238708511
1 73787345006
24 47221018887
9 20218773368
34 40025202486
14 28286410866
24 82115648680
37 62913240066
14 92020110916
24 20965327730
32 67598565422
39 79828753874
40 52778306283
40 67894622518
```

```output4
606214471001
```

Note that the output value may exceed the range of a $32$-bit integer.