Score : $600$ points

## Problem Statement

We have a tree with $N$ vertices, numbered $1, 2, \dots, N$. The $i$-th edge $(1 \leq i \leq N-1)$ connects Vertex $A_i$ and Vertex $B_i$.

A boy E869120 found this tree and wants to write an integer in each vertex to surprise another boy square1001. For that, the following conditions need to be satisfied, where $E_i$ is the integer written on Vertex $i$.

**Condition 1:** $E_i \geq 1$ $(1 \leq i \leq N)$ holds.<br>
**Condition 2:** $|E_i - E_j| \geq dist(i, j)$ holds for every pair $(i, j)$ $(1 \leq i &lt; j \leq N)$.<br>
**Condition 3:** the value $\max(E_1, E_2, \dots, E_N)$ should be minimized while satisfying Conditions 1 and 2.

Here, $dist(i, j)$ is:

- the length of the simple path (the path without repetition of the same vertex) from Vertex $i$ to $j$.
- In other words, it is the value $L$ where the simple path is $q_0 \to q_1 \to q_2 \to \cdots \to q_L$ ($q_0 = i, q_L = j$).

Construct one way to write integers that surprises square1001.

## Constraints

- $2 \leq N \leq 200000$
- $1 \leq A_i &lt; B_i \leq N$
- The given graph is a tree.
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
> $A_{N-1}$ $B_{N-1}$

## Output

Print a line containing integers $E_1, E_2, \cdots, E_N$ to write on the vertices, in this order, with space as separator.

If there are multiple ways to write integers that satisfy the conditions in the Problem Statement, any of them will be accepted.

> $E_1$ $E_2$ $\cdots$ $E_{N}$

```input1
2
1 2
```

```output1
2 1
```

If we write an integer $2$ on Vertex $1$ and an integer $1$ on Vertex $2$, we have $dist(1, 2) = 1$ and $|E_1 - E_2| = 1$, satisfying Condition 2.

The other conditions are also satisfied, so we can surprise square1001 this way. 

$(E_1, E_2) = (1, 2)$ will also be accepted.

```input2
4
1 2
1 4
2 3
```

```output2
3 2 1 4
```

$(E_1, E_2, E_3, E_4) = (2, 3, 4, 1)$ will also be accepted.