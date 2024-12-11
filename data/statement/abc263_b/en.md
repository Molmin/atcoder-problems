Score : $200$ points

## Problem Statement

There are $N$ people, called Person $1$, Person $2$, $\ldots$, Person $N$.

The parent of Person $i$ $(2 \le i \le N)$ is Person $P_i$. Here, it is guaranteed that $P_i &lt; i$.

How many generations away from Person $N$ is Person $1$? 

## Constraints

- $2 \le N \le 50$
- $1 \le P_i &lt; i(2 \le i \le N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_2$ $P_3$ $\dots$ $P_N$

## Output

Print the answer as a positive integer.

```input1
3
1 2
```

```output1
2
```

Person $2$ is a parent of Person $3$, and thus is one generation away from Person $3$.

Person $1$ is a parent of Person $2$, and thus is two generations away from Person $3$.

Therefore, the answer is $2$.

```input2
10
1 2 3 4 5 6 7 8 9
```

```output2
9
```