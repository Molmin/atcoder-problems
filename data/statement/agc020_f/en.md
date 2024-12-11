Score : $2100$ points

## Problem Statement

You have a circle of length $C$, and you are placing $N$ arcs on it. Arc $i$ has length $L_i$.

Every arc $i$ is placed on the circle uniformly at random:
a random real point on the circle is chosen, then an arc of length $L_i$ centered at this point appears.

Note that the arcs are placed independently. For example, they may intersect or contain each other.

What is the probability that every real point of the circle will be covered by at least one arc?
Assume that an arc covers its ends.

## Constraints

- $2 \leq N \leq 6$
- $2 \leq C \leq 50$
- $1 \leq L_i &lt; C$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $C$
> 
> $L_1$ $L_2$ $...$ $L_N$

## Output

Print the probability that every real point of the circle will be covered by at least one arc.
Your answer will be considered correct if its absolute error doesn't exceed $10^{-11}$.

```input1
2 3
2 2
```

```output1
0.3333333333333333
```

The centers of the two arcs must be at distance at least $1$. The probability of this on a circle of length $3$ is $1 / 3$.

```input2
4 10
1 2 3 4
```

```output2
0.0000000000000000
```

Even though the total length of the arcs is exactly $C$ and it's possible that every real point of the circle is covered by at least one arc,
the probability of this event is $0$.

```input3
4 2
1 1 1 1
```

```output3
0.5000000000000000
```

```input4
3 5
2 2 4
```

```output4
0.4000000000000000
```

```input5
4 6
4 1 3 2
```

```output5
0.3148148148148148
```

```input6
6 49
22 13 27 8 2 19
```

```output6
0.2832340720702695
```