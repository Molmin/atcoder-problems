Score : $300$ points

## Problem Statement

Person $0$, Person $1$, $\ldots$, and Person $(N-1)$ are sitting around a turntable in their counterclockwise order, evenly spaced.  Dish $p_i$ is in front of Person $i$ on the table.<br>
You may perform the following operation $0$ or more times:

- Rotate the turntable by one $N$-th of a counterclockwise turn.  As a result, the dish that was in front of Person $i$ right before the rotation is now in front of Person $(i+1) \bmod N$.

When you are finished, Person $i$ is happy if Dish $i$ is in front of Person $(i-1) \bmod N$, Person $i$, or Person $(i+1) \bmod N$.<br>
Find the maximum possible number of happy people.

 What is $a \bmod m$?  For an integer $a$ and a positive integer $m$, $a \bmod m$ denotes the integer $x$ between $0$ and $(m-1)$ (inclusive) such that $(a-x)$ is a multiple of $m$.  (It can be proved that such $x$ is unique.)

## Constraints

- $3 \leq N \leq 2 \times 10^5$
- $0 \leq p_i \leq N-1$
- $p_i \neq p_j$ if $i \neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $p_0$ $\ldots$ $p_{N-1}$

## Output

Print the answer.

```input1
4
1 2 0 3
```

```output1
4
```

The figure below shows the table after one operation.

![](https://img.atcoder.jp/abc268/70536a7b7fad87d6a49ad00df89a4a30.png)

Here, there are four happy people:

- Person $0$ is happy because Dish $0$ is in front of Person $3\ (=(0-1) \bmod 4)$;
- Person $1$ is happy because Dish $1$ is in front of Person $1\ (=1)$;
- Person $2$ is happy because Dish $2$ is in front of Person $2\ (=2)$;
- Person $3$ is happy because Dish $3$ is in front of Person $0\ (=(3+1) \bmod 4)$.

There cannot be five or more happy people, so the answer is $4$.

```input2
3
0 1 2
```

```output2
3
```

```input3
10
3 9 6 1 7 2 8 0 5 4
```

```output3
5
```