Score : $600$ points

## Problem Statement

You are given multisets with $N$ non-negative integers each: $A=\{ a_1,\ldots,a_N \}$ and $B=\{ b_1,\ldots,b_N \}$.<br>
You can perform the operations below any number of times in any order.

- Choose a non-negative integer $x$ in $A$. Delete one instance of $x$ from $A$ and add one instance of $2x$ instead.
- Choose a non-negative integer $x$ in $A$. Delete one instance of $x$ from $A$ and add one instance of $\left\lfloor \frac{x}{2} \right\rfloor$ instead. ($\lfloor x \rfloor$ is the greatest integer not exceeding $x$.)

Your objective is to make $A$ and $B$ equal (as multisets).<br>
Determine whether it is achievable, and find the minimum number of operations needed to achieve it if it is achievable.

## Constraints

- $1 \leq N \leq 10^5$
- $0 \leq a_1 \leq \ldots \leq a_N \leq 10^9$
- $0 \leq b_1 \leq \ldots \leq b_N \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $\ldots$ $a_N$
> 
> $b_1$ $\ldots$ $b_N$

## Output

If the objective is achievable, print the minimum number of operations needed to achieve it; otherwise, print `-1`.

```input1
3
3 4 5
2 4 6
```

```output1
2
```

You can achieve the objective in two operations as follows.

- Choose $x=3$ to delete one instance of $x\, (=3)$ from $A$ and add one instance of $2x\, (=6)$ instead. Now we have $A=\{4,5,6\}$.
- Choose $x=5$ to delete one instance of $x\, (=5)$ from $A$ and add one instance of $\left\lfloor \frac{x}{2} \right\rfloor \, (=2)$ instead. Now we have $A=\{2,4,6\}$.

```input2
1
0
1
```

```output2
-1
```

You cannot turn $\{ 0 \}$ into $\{ 1 \}$.