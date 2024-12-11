Score : $500$ points

## Problem Statement

We have a grid with $H$ rows and $W$ columns.

We choose $K$ cells in this grid uniformly at random.  The score is the number of cells in the minimum rectangle (whose edges are parallel to the axes of the grid) that contains all of the chosen cells.

Find the expected score modulo $998244353$.

What is rational number modulo $998244353$?

We can prove that the sought expected value is always a rational number.  
Moreover, under the Constraints of this problem, when the value is represented as $\frac{P}{Q}$ by two coprime integers $P$ and $Q$, we can prove that there is a unique integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$.  Find such $R$.

## Constraints

- $1\leq H,W \leq 1000$
- $1\leq K \leq HW$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $K$

## Output

Print the answer.

```input1
2 2 2
```

```output1
665496238
```

The score equals $4$ in the following two cases: if cells $(1,1)$ and $(2,2)$ are chosen, or cells $(1,2)$ and $(2,1)$ are chosen.  The other four cases yield a score of $2$.

Thus, the expected score equals $\frac{4 \times 2 + 2 \times 4} {6} = \frac{8}{3}$.  Since $665496238 \times 3 \equiv 8\pmod{998244353}$, you should print $665496238$.

```input2
10 10 1
```

```output2
1
```

```input3
314 159 2653
```

```output3
639716353
```