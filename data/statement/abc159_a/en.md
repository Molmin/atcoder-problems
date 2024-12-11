Score : $100$ points

## Problem Statement

We have $N+M$ balls, each of which has an integer written on it.<br>
It is known that:  

- The numbers written on $N$ of the balls are even.
- The numbers written on $M$ of the balls are odd.

Find the number of ways to choose two of the $N+M$ balls (disregarding order) so that the sum of the numbers written on them is even.<br>
It can be shown that this count does not depend on the actual values written on the balls.

## Constraints

- $0 \leq N,M \leq 100$
- $2 \leq N+M$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
2 1
```

```output1
1
```

For example, let us assume that the numbers written on the three balls are $1,2,4$.

- If we choose the two balls with $1$ and $2$, the sum is odd;
- If we choose the two balls with $1$ and $4$, the sum is odd;
- If we choose the two balls with $2$ and $4$, the sum is even.

Thus, the answer is $1$.

```input2
4 3
```

```output2
9
```

```input3
1 1
```

```output3
0
```

```input4
13 3
```

```output4
81
```

```input5
0 3
```

```output5
3
```