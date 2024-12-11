Score : $1000$ points

## Problem Statement

There are $N$ servals on a bridge of length $L$.

The $i$-th serval is located at position $A_{i}$ from the left end of the bridge.

Here, $0 &lt; A_{1} &lt; A_{2} &lt; \cdots &lt; A_{N} &lt; L$ holds.

For each $i = 1, 2, \dots, N$, answer the following question:

The servals will perform the following three actions in order:

- Action $1$: The $N - 1$ servals other than the $i$-th serval face left or right.
- Action $2$: The $i$-th serval faces left or right.
- Action $3$: All servals start moving simultaneously. All servals move at a constant speed of exactly $1$ unit distance per unit time. When a serval reaches the end of the bridge, it leaves the bridge. If two servals collide, they both reverse their direction and continue moving.

The $i$-th serval is smart and loves this bridge, so when choosing a direction in Action $2$, it will observe the directions of the other $N-1$ servals and choose the direction that allows it to stay on the bridge the longer during Action $3$.
There are $2^{N-1}$ possible combinations of directions for the $N-1$ servals in Action $1$. Find the sum, modulo $998244353$, over all these combinations, of the durations the $i$-th serval can stay on the bridge. It can be proved that the output value is an integer.

## Constraints

- $1 \leq N \leq 10^{5}$
- $0 &lt; A_{1} &lt; A_{2} &lt; \cdots &lt; A_{N} &lt; L \leq 10^{9}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $L$
> 
> $A_{1}$ $A_{2}$ $\cdots$ $A_{N}$

## Output

Print $N$ lines. The $k$-th line should contain the answer for $i=k$.

```input1
2 167
9 24
```

```output1
182
301
```

For $i = 1$, it is always optimal to face right.

For $i = 2$, it is optimal to face the opposite direction from the first serval.

```input2
1 924
167
```

```output2
757
```

```input3
10 924924167
46001560 235529797 272749755 301863061 359726177 470023587 667800476 696193062 741860924 809211293
```

```output3
112048251
409175578
167800512
997730745
278651538
581491882
884751575
570877705
747965896
80750577
```