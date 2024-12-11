Score : $575$ points

## Problem Statement

There is an octopus-shaped robot and $N$ treasures on a number line.
The $i$-th treasure $(1\leq i\leq N)$ is located at coordinate $X_i$.<br>
The robot has one head and $N$ legs, and the $i$-th leg $(1\leq i\leq N)$ has a length of $L_i$.

Find the number of **integers** $k$ such that the robot can grab all $N$ treasures as follows.

- Place the head at coordinate $k$.
- Repeat the following for $i=1,2,\ldots,N$ in this order: if there is a treasure that has not been grabbed yet within a distance of $L_i$ from the head, that is, at a coordinate $x$ satisfying $k-L_i\leq x\leq k+L_i$, choose one such treasure and grab it.

## Constraints

- $1 \leq N\leq 200$
- $-10^{18} \leq X_1&lt;X_2&lt;\cdots&lt;X_N\leq 10^{18}$
- $1\leq L_1\leq L_2\leq\cdots\leq L_N\leq 10^{18}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $X_2$ $\ldots$ $X_N$
> 
> $L_1$ $L_2$ $\ldots$ $L_N$

## Output

Print the number of integers $k$ that satisfy the condition in the statement.

```input1
3
-6 0 7
3 5 10
```

```output1
6
```

$k=-3,-2,-1,2,3,4$ satisfy the condition. For example, when $k=-3$, the robot can grab all three treasures as follows.

- The first leg can grab treasures at coordinates $x$ satisfying $-6\leq x\leq 0$. Among them, grab the first treasure at coordinate $-6$.
- The second leg can grab treasures at coordinates $x$ satisfying $-8\leq x\leq 2$. Among them, grab the second treasure at coordinate $0$.
- The third leg can grab treasures at coordinates $x$ satisfying $-13\leq x\leq 7$. Among them, grab the third treasure at coordinate $7$.

```input2
1
0
1000000000000000000
```

```output2
2000000000000000001
```

All integers $k$ from $-10^{18}$ to $10^{18}$ satisfy the condition.

```input3
2
-100 100
1 1
```

```output3
0
```

No $k$ satisfies the conditions.