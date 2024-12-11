Score : $2200$ points

## Problem Statement

We have two indistinguishable pieces placed on a number line.
Both pieces are initially at coordinate $0$. (They can occupy the same position.)

We can do the following two kinds of operations:

- Choose a piece and move it to the right (the positive direction) by $1$.
- Move the piece with the smaller coordinate to the position of the piece with the greater coordinate.
If two pieces already occupy the same position, nothing happens, but it still counts as doing one operation.

We want to do a total of $N$ operations of these kinds in some order so that one of the pieces will be at coordinate $A$ and the other at coordinate $B$.
Find the number of ways to move the pieces to achieve it.
The answer can be enormous, so compute the count modulo $998244353$.

Two ways to move the pieces are considered different if and only if there exists an integer $i$ ($1 \leq i \leq N$) such that the set of the coordinates occupied by the pieces after the $i$-th operation is different in those two ways.

## Constraints

- $1 \leq N \leq 10^7$
- $0 \leq A \leq B \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$

## Output

Print the number of ways to move the pieces to achieve our objective, modulo $998244353$.

```input1
5 1 3
```

```output1
4
```

Shown below are the four ways to move the pieces, where $(x,y)$ represents the state where the two pieces are at coordinates $x$ and $y$.

- $(0,0) \to (0,0) \to (0,1) \to (0,2) \to (0,3) \to (1,3)$
- $(0,0) \to (0,0) \to (0,1) \to (0,2) \to (1,2) \to (1,3)$
- $(0,0) \to (0,0) \to (0,1) \to (1,1) \to (1,2) \to (1,3)$
- $(0,0) \to (0,1) \to (1,1) \to (1,1) \to (1,2) \to (1,3)$

```input2
10 0 0
```

```output2
1
```

```input3
10 4 6
```

```output3
197
```

```input4
1000000 100000 200000
```

```output4
758840509
```