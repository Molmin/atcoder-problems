Score : $700$ points

## Problem Statement

You are given an integer $N$. Determine if there exists a tree with $2N$ vertices numbered $1$ to $2N$ satisfying the following condition, and show one such tree if the answer is yes.

- Assume that, for each integer $i$ between $1$ and $N$ (inclusive), Vertex $i$ and $N+i$ have the weight $i$. Then, for each integer $i$ between $1$ and $N$, the bitwise XOR of the weights of the vertices on the path between Vertex $i$ and $N+i$ (including themselves) is $i$.

## Constraints

- $N$ is an integer.
- $1 \leq N \leq 10^{5}$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If there exists a tree satisfying the condition in the statement, print `Yes`; otherwise, print `No`.
Then, if such a tree exists, print the $2N-1$ edges of such a tree in the subsequent $2N-1$ lines, in the following format:

> $a_{1}$ $b_{1}$
> 
> $\vdots$
> 
> $a_{2N-1}$ $b_{2N-1}$

Here each pair ($a_i$, $b_i$) means that there is an edge connecting Vertex $a_i$ and $b_i$. The edges may be printed in any order.

```input1
3
```

```output1
Yes
1 2
2 3
3 4
4 5
5 6
```

- The sample output represents the following graph:
<div style="text-align: center;">
![d004b05438497d50637b534e89f7a511.png](https://img.atcoder.jp/agc035/d004b05438497d50637b534e89f7a511.png)
</div>

```input2
1
```

```output2
No
```

- There is no tree satisfying the condition.