Score : $300$ points

## Problem Statement

You are given integers $L,R$ ($L &lt; R$).

Snuke is looking for a pair of integers $(x,y)$ that satisfy both of the conditions below.

- $L \leq x &lt; y \leq R$
- $\gcd(x,y)=1$

Find the maximum possible value of $(y-x)$ in a pair that satisfies the conditions.
It can be proved that at least one such pair exists under the Constraints.

## Constraints

- $1 \leq L &lt; R \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $L$ $R$

## Output

Print the answer.

```input1
2 4
```

```output1
1
```

For $(x,y)=(2,4)$, we have $\gcd(x,y)=2$, which violates the condition.
For $(x,y)=(2,3)$, the conditions are satisfied. Here, the value of $(y-x)$ is $1$.
There is no such pair with a greater value of $(y-x)$, so the answer is $1$.

```input2
14 21
```

```output2
5
```

```input3
1 100
```

```output3
99
```