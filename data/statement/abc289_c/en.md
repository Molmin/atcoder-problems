Score : $300$ points

## Problem Statement

There are $M$ sets, called $S_1, S_2, \dots, S_M$, consisting of integers between $1$ and $N$.<br>
$S_i$ consists of $C_i$ integers $a_{i, 1}, a_{i, 2}, \dots, a_{i, C_i}$.

There are $(2^M-1)$ ways to choose one or more sets from the $M$ sets.<br>
How many of them satisfy the following condition?

- For all integers $x$ such that $1 \leq x \leq N$, there is at least one chosen set containing $x$.

## Constraints

- $1 \leq N \leq 10$
- $1 \leq M \leq 10$
- $1 \leq C_i \leq N$
- $1 \leq a_{i,1} \lt a_{i,2} \lt \dots \lt a_{i,C_i} \leq N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $C_1$
> 
> $a_{1,1}$ $a_{1,2}$ $\dots$ $a_{1,C_1}$
> 
> $C_2$
> 
> $a_{2,1}$ $a_{2,2}$ $\dots$ $a_{2,C_2}$
> 
> $\vdots$
> 
> $C_M$
> 
> $a_{M,1}$ $a_{M,2}$ $\dots$ $a_{M,C_M}$

## Output

Print the number of ways to choose sets that satisfy the conditions in the Problem Statement.

```input1
3 3
2
1 2
2
1 3
1
2
```

```output1
3
```

The sets given in the input are $S_1 = \lbrace 1, 2 \rbrace, S_2 = \lbrace 1, 3 \rbrace, S_3 = \lbrace 2 \rbrace$.<br>
The following three ways satisfy the conditions in the Problem Statement:

- choosing $S_1, S_2$;
- choosing $S_1, S_2, S_3$;
- choosing $S_2, S_3$.

```input2
4 2
2
1 2
2
1 3
```

```output2
0
```

There may be no way to choose sets that satisfies the conditions in the Problem Statement.

```input3
6 6
3
2 3 6
3
2 4 6
2
3 6
3
1 5 6
3
1 3 6
2
1 4
```

```output3
18
```