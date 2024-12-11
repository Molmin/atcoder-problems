Score : $400$ points

## Problem Statement

There are $N$ buildings along AtCoder road. Initially, the $i$-th building from the left has $A_i$ stories.

Takahashi, the president of ARC Wrecker, Inc., can do the following operation any number of times, possibly zero:

- Choose a positive integer $X$ that he likes and shoot a cannonball at that height, which decreases by $1$ the number of stories in each building with $X$ or more stories.

Find the number of possible final sceneries of buildings, modulo ($10^{9} + 7$).

We consider two sceneries A and B different when the following holds:

- let $P_i$ be the number of stories of the $i$-th building from the left in scenery A;
- let $Q_i$ be the number of stories of the $i$-th building from the left in scenery B;
- we consider sceneries A and B different when $P_i \neq Q_i$ for one or more indices $i$.

## Constraints

- $1 \leq N \leq 100000$
- $1 \leq A_i \leq 10^{9}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
2
1 2
```

```output1
4
```

There are four possible combinations of heights of the buildings, as follows:

- (Building $1$, Building $2$) = $(0, 0)$
- (Building $1$, Building $2$) = $(0, 1)$
- (Building $1$, Building $2$) = $(1, 1)$
- (Building $1$, Building $2$) = $(1, 2)$

```input2
6
5 3 4 1 5 2
```

```output2
32
```

```input3
7
314 159 265 358 979 323 846
```

```output3
492018656
```

There are $20192492160000$ possible final sceneries. The correct output is that number modulo $10^{9} + 7$, which is $492018656$.