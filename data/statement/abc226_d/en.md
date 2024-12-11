Score : $400$ points

## Problem Statement

The Republic of AtCoder lies on a Cartesian coordinate plane.<br>
It has $N$ towns, numbered $1,2,\dots,N$. Town $i$ is at $(x_i, y_i)$, and no two different towns are at the same coordinates.

There are teleportation spells in the nation. A spell is identified by a pair of integers $(a,b)$, and casting a spell $(a, b)$ at coordinates $(x, y)$ teleports you to $(x+a, y+b)$.

Snuke is a great magician who can learn the spell $(a, b)$ for any pair of integers $(a, b)$ of his choice. The number of spells he can learn is also unlimited.<br>
To be able to travel between the towns using spells, he has decided to learn some number of spells so that it is possible to do the following for every pair of different towns $(i, j)$.

- Choose **just one spell** among the spells learned. Then, repeatedly use **just** the chosen spell to get from Town $i$ to Town $j$.

At least how many spells does Snuke need to learn to achieve the objective above?

## Constraints

- $2 \leq N \leq 500$
- $0 \leq x_i \leq 10^9$ $(1 \leq i \leq N)$
- $0 \leq y_i \leq 10^9$ $(1 \leq i \leq N)$
- $(x_i, y_i) \neq (x_j, y_j)$ if $i \neq j$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_N$ $y_N$

## Output

Print the minimum number of spells Snuke needs to learn.

```input1
3
1 2
3 6
7 4
```

```output1
6
```

The figure below illustrates the positions of the towns (along with the coordinates of the four corners).

![image](https://img.atcoder.jp/ghi/b46a8c9c960614f791e09e6f2b7b14f9.png)

If Snuke learns the six spells below, he can get from Town $i$ to Town $j$ by using one of the spells once for every pair $(i,j)$ $(i \neq j)$, achieving his objective.

- $(2, 4)$
- $(-2, -4)$
- $(4, -2)$
- $(-4, 2)$
- $(-6, -2)$
- $(6, 2)$

Another option is to learn the six spells below. In this case, he can get from Town $i$ to Town $j$ by using one of the spells twice for every pair $(i,j)$ $(i \neq j)$, achieving his objective.

- $(1, 2)$
- $(-1, -2)$
- $(2, -1)$
- $(-2, 1)$
- $(-3, -1)$
- $(3, 1)$

There is no combination of spells that consists of less than six spells and achieve the objective, so we should print $6$.

```input2
3
1 2
2 2
4 2
```

```output2
2
```

The optimal choice is to learn the two spells below:

- $(1, 0)$
- $(-1, 0)$

```input3
4
0 0
0 1000000000
1000000000 0
1000000000 1000000000
```

```output3
8
```