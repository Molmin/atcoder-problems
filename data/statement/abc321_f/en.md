Score : $525$ points

## Problem Statement

We have a box, which is initially empty.<br>
Let us perform a total of $Q$ operations of the following two types in the order they are given in the input.

```plain
+ $x$
```

Type $1$: Put into the box a ball with the integer $x$ written on it.

```plain
- $x$
```

Type $2$: Remove from the box a ball with the integer $x$ written on it.<br>
**It is guaranteed that the box contains a ball with the integer $x$ written on it before the operation.**

<br>

For the box after each operation, solve the following problem.

Find the number, modulo $998244353$, to pick up some number of balls from the box so that the integers written on them sum to $K$.<br>
All balls in the box are distinguishable.

## Constraints

- All input values are integers.
- $1 \le Q \le 5000$
- $1 \le K \le 5000$
- For each type-$1$ operation, $1 \le x \le 5000$.
- All the operations satisfy the condition in the problem statement.

## Input

The input is given from Standard Input in the following format, where $\mathrm{Query}_i$ represents the $i$-th operation:

> $Q$ $K$
> 
> $\rm{Query}$$_{1}$
> 
> $\rm{Query}$$_{2}$
> 
> $\vdots$
> 
> $\rm{Query}$$_{Q}$

## Output

Print $Q$ lines.<br>
The $i$-th line should contain the answer when the first $i$ operations have been done.

```input1
15 10
+ 5
+ 2
+ 3
- 2
+ 5
+ 10
- 3
+ 1
+ 3
+ 3
- 5
+ 1
+ 7
+ 4
- 3
```

```output1
0
0
1
0
1
2
2
2
2
2
1
3
5
8
5
```

This input contains $15$ operations.

After the last operation, the box contains the balls $(5,10,1,3,1,7,4)$.<br>
There are five ways to pick up balls for a sum of $10$:

- $5+1+3+1$ (the $1$-st, $3$-rd, $4$-th, $5$-th balls)
- $5+1+4$ (the $1$-st, $3$-rd, $7$-th balls)
- $5+1+4$ (the $1$-st, $5$-th, $7$-th balls)
- $10$ (the $2$-nd ball)
- $3+7$ (the $4$-th, $6$-th balls)