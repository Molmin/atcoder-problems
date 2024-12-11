Score : $700$ points

## Problem Statement

There is a sequence $X$ of length $N$, where every element is initially $0$. Let $X_i$ denote the $i$-th element of $X$.

You are given a sequence $A$ of length $N$. The $i$-th element of $A$ is $A_i$. Determine if we can make $X$ equal to $A$ by repeating the operation below. If we can, find the minimum number of operations required.

- Choose an integer $i$ such that $1\leq i\leq N-1$. Replace the value of $X_{i+1}$ with the value of $X_i$ plus $1$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq 10^9(1\leq i\leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$
> 
> $:$
> 
> $A_N$

## Output

If we can make $X$ equal to $A$ by repeating the operation, print the minimum number of operations required. If we cannot, print $-1$.

```input1
4
0
1
1
2
```

```output1
3
```

We can make $X$ equal to $A$ as follows:

- Choose $i=2$. $X$ becomes $(0,0,1,0)$.
- Choose $i=1$. $X$ becomes $(0,1,1,0)$.
- Choose $i=3$. $X$ becomes $(0,1,1,2)$.

```input2
3
1
2
1
```

```output2
-1
```

```input3
9
0
1
1
0
1
2
2
1
2
```

```output3
8
```