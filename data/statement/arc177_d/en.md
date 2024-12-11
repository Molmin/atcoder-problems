Score: $700$ points

## Problem Statement

AtCoder Street is a road represented by a straight line on flat ground. There are $N$ utility poles of height $H$ standing on this road. The poles are numbered $1, 2, \dots, N$ in chronological order. Pole $i$ ($1 \leq i \leq N$) is vertically positioned at coordinate $X_i$. **The base of each pole is fixed to the ground.** Assume that the poles are sufficiently thin.

The street will experience $N$ earthquakes. During the $i$-th earthquake $(1 \leq i \leq N)$, the following events occur:

1. If pole $i$ has not yet fallen, it falls to the left or the right on the number line, each with a probability of $\frac{1}{2}$.
2. If a falling pole collides with another pole that has not yet fallen (including collision at the base of the pole), the latter pole will also fall in the same direction. This may trigger a chain reaction.

The direction in which a pole falls during step 1 is independent of the direction in which other poles have fallen.

The following figure is an example of how poles might fall during one earthquake:

![](https://img.atcoder.jp/arc177/099e3b6e0b64fbbb71e3519707cc7908.png)

For earthquake preparedness, for each $t = 1, 2, \dots, N$, find the probability that all poles have fallen by exactly the $t$-th earthquake. Multiply it by $2^N$ and print the result modulo $998244353$. It can be proved that the values to be printed are integers.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq H \leq 10^9$
- $0 \leq X_i \leq 10^9 \ (1 \leq i \leq N)$
- $X_1, X_2, \dots, X_N$ are all distinct.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $H$
> 
> $X_1$ $X_2$ $\cdots$ $X_N$

## Output

Print the answers for $t = 1, 2, \dots, N$ in this order, separated by spaces.

```input1
3 2
0 3 1
```

```output1
4 2 2
```

The following figure shows the possible ways the poles can fall for this sample input. The fractions in the figure indicate the probability of each state occurring.

![](https://img.atcoder.jp/arc177/0ca8ef9552065d079b964857fd96a584.png)

Therefore, the probabilities that all poles have fallen by exactly the $1$-st, $2$-nd, $3$-rd earthquakes are $\frac{1}{2}$, $\frac{1}{4}$, $\frac{1}{4}$, respectively. Multiply these by $8$ to get $4, 2, 2$ for output.

```input2
4 10
10 55 20 45
```

```output2
0 4 4 8
```

The following figure shows the possible ways the poles can fall for this sample input. The fractions in the figure indicate the probability of each state occurring.

![](https://img.atcoder.jp/arc177/15420872507930a610017b9ea0f22280.png)

Therefore, the probabilities that all poles have fallen by exactly the $1$-st, $2$-nd, $3$-rd, $4$-th earthquakes are $0$, $\frac{1}{4}$, $\frac{1}{4}$, $\frac{1}{2}$, respectively. Multiply these by $16$ to get $0, 4, 4, 8$ for output.

```input3
8 1
5 0 6 3 8 1 7 2
```

```output3
0 64 32 48 24 28 28 32
```

The probabilities that all poles have fallen by exactly the $1$-st, $2$-nd, $3$-rd, $4$-th, $5$-th, $6$-th, $7$-th, $8$-th earthquakes are $0$, $\frac{1}{4}$, $\frac{1}{8}$, $\frac{3}{16}$, $\frac{3}{32}$, $\frac{7}{64}$, $\frac{7}{64}$, $\frac{1}{8}$, respectively.

```input4
40 20
695 793 11 502 114 861 559 4 212 609 894 435 429 94 91 258 161 45 33 605 673 634 629 163 283 826 409 84 507 548 31 248 588 340 357 168 926 949 322 912
```

```output4
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 41942627 41942627 360709869
```

Not all poles will have fallen by the $37$-th earthquake. The probabilities that all poles have fallen by exactly the $38$, $39$, $40$-th earthquakes are $\frac{3}{8}$, $\frac{3}{8}$, $\frac{1}{4}$, respectively.