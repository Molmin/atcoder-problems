Score : $600$ points

## Problem Statement

Takahashi has Christmas decoration consisting of $N$ balls and $\frac{N(N-1)}{2}$ ropes. The balls are numbered $1$ to $N$, and for any two different balls, there is exactly one rope that connects them.

![](https://img.atcoder.jp/arc131/f18d2d54777d013bec4a137f048d4609.png)

He decides to light up each rope in red, blue, or white.

For better appearance, he wants to satisfy all of the following conditions.

**Condition 1** the numbers of ropes lighted in red, blue, and white are all equal.

**Condition 2** there is no triple of integers $a, b, c$ $(1 \leq a &lt; b &lt; c \leq N)$ such that all of the following three ropes have different colors:

- the rope connecting $a$ and $b$,
- the rope connecting $b$ and $c$,
- the rope connecting $a$ and $c$.

Create a way to light up the ropes to satisfy the conditions. If there is no such way, report so.

## Constraints

- $3 \leq N \leq 50$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If there is no way to light up the ropes to satisfy the conditions, print `No`.

If such a way exists, print it in the following format:

> Yes
> 
> $c_{1,2}$$c_{1,3}$$c_{1,4}$$\ldots$$c_{1,N}$
> 
> $c_{2,3}$$c_{2,4}$$\ldots$$c_{2,N}$
> 
>  $:$
> 
> $c_{N-1,N}$

Here, the character $c_{i, j}$ $(1 \leq i &lt; j \leq N)$ should be the following:

- $c_{i, j} =$ `R` when lighting up the rope connecting Balls $i$ and $j$ red,
- $c_{i, j} =$ `B` when lighting up the rope connecting Balls $i$ and $j$ blue,
- $c_{i, j} =$ `W` when lighting up the rope connecting Balls $i$ and $j$ white.

```input1
4
```

```output1
No
```

For $N=4$, there is no way to light up the ropes to satisfy the conditions, so the output `No` is correct.

Below is an example of an output in the `Yes` case, **which is incorrect in this case.** This is because, for $(a, b, c) = (1, 2, 3)$ in **Condition 2**, the rope connecting $a, b$ is red, the rope connecting $b, c$ is white, and the rope connecting $a, c$ is blue, all of which have different colors.

```output1
Yes
RBW
WB
R
```