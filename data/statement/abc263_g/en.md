Score : $600$ points

## Problem Statement

There are integers with $N$ different values written on a blackboard. The $i$-th value is $A_i$ and is written $B_i$ times.

You may repeat the following operation as many times as possible:

- Choose two integers $x$ and $y$ written on the blackboard such that $x+y$ is prime. Erase these two integers.

Find the maximum number of times the operation can be performed.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq A_i \leq 10^7$
- $1 \leq B_i \leq 10^9$
- All $A_i$ are distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ 
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the answer.

```input1
3
3 3
2 4
6 2
```

```output1
3
```

We have $2 + 3 = 5$, and $5$ is prime, so you can choose $2$ and $3$ to erase them, but nothing else. Since there are four $2$s and three $3$s, you can do the operation three times.

```input2
1
1 4
```

```output2
2
```

We have $1 + 1 = 2$, and $2$ is prime, so you can choose $1$ and $1$ to erase them. Since there are four $1$s, you can do the operation twice.