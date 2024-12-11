Score : $300$ points

## Problem Statement

In a flower bed, there are $N$ flowers, numbered $1,2,......,N$. Initially, the heights of all flowers are $0$.
You are given a sequence $h=\{h_1,h_2,h_3,......\}$ as input. You would like to change the height of Flower $k$ to $h_k$ for all $k$ $(1 \leq k \leq N)$, by repeating the following "watering" operation:

- Specify integers $l$ and $r$. Increase the height of Flower $x$ by $1$ for all $x$ such that $l \leq x \leq r$.

Find the minimum number of watering operations required to satisfy the condition.

## Constraints

- $1 \leq N \leq 100$
- $0 \leq h_i \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $h_1$ $h_2$ $h_3$ $......$ $h_N$

## Output

Print the minimum number of watering operations required to satisfy the condition.

```input1
4
1 2 2 1
```

```output1
2
```

The minimum number of watering operations required is $2$.
One way to achieve it is:

- Perform the operation with $(l,r)=(1,3)$.
- Perform the operation with $(l,r)=(2,4)$.

```input2
5
3 1 2 3 1
```

```output2
5
```

```input3
8
4 23 75 0 23 96 50 100
```

```output3
221
```