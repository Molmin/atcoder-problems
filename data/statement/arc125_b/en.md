Score : $500$ points

## Problem Statement

You are given an integer $N$.
Find the number of pairs of integers $(x, y)$ that satisfy the following conditions, modulo $998244353$.

- <p>$1 \leq x,y \leq N$.</p>
- <p>$x^2-y$ is a square number. (Assume $0$ is also a square number.)</p>

## Constraints

- $1 \leq N \leq 10^{12}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
3
```

```output1
2
```

We have the following two pairs.

- <p>$x=1,y=1$</p>
- <p>$x=2,y=3$</p>

```input2
10
```

```output2
8
```

```input3
10000000000
```

```output3
52583544
```