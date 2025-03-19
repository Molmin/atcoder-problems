Score: $100$ points

## Problem Statement

You are given a graph $G$ consisting of $N$ vertices numbered $1, 2, \ldots, N$. Initially, $G$ has no edges.

You will add $M$ undirected edges to $G$. The final shape of the graph is predetermined, and the $i$-th edge to be added $(1 \leq i \leq M)$ connects vertices $u_i$ and $v_i$. We will refer to this as edge $i$.<br>
It is guaranteed that the resulting graph will be simple.

Determine if there exists a permutation $(P_1, P_2, \ldots, P_M)$ of $(1, 2, \ldots, M)$ that satisfies the following conditions, and if such a permutation exists, show an example.

**Conditions**

You must be able to add all $M$ edges to $G$ by following this procedure:

- For $i = 1, 2, \dots, M$, repeat the following:-   1. If there is already a cycle in $G$ containing either vertex $u_{P_i}$ or vertex $v_{P_i}$, the condition is not satisfied, and the procedure ends.
-   2. Add edge $P_i$ (the undirected edge connecting $u_{P_i}$ and $v_{P_i}$) to $G$.

You are given $T$ test cases; solve each of them.

What is a cycle?

A cycle in $G$ is defined as a sequence of vertices $(v_0, \dots, v_{L - 1})$ and a sequence of edges $(e_0, \dots, e_{L - 1})$ that satisfy the following conditions:

- $L \ge 1$
- $i \neq j \implies v_i \neq v_j, e_i \neq e_j$
- For $0 \le i \le L - 2$, edge $e_i$ connects vertices $v_i$ and $v_{i+1}$
- Edge $e_{L-1}$ connects vertices $v_{L-1}$ and $v_0$

What does it mean for a graph to be simple?

A graph $G$ is simple if it contains no self-loops or multiple edges.

## Constraints

- All input values are integers.
- $1 \le T \le 2000$
- For each test case:-   - $2 \le N \le 4000$
-   - $1 \le M \le 4000$
-   - $1 \le u_i, v_i \le N\ (1 \leq i \leq M)$
-   - The graph formed by adding all given edges is simple.
- The sum of $N$ over all test cases is at most $4000$.
- The sum of $M$ over all test cases is at most $4000$.

## Subtasks

$30$ points will be awarded for passing the test set satisfying:

- $T \le 50$
- For each test case:-   - $N \le 100$
-   - $M \le 100$
- The sum of $N$ over all test cases is at most $100$.
- The sum of $M$ over all test cases is at most $100$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

Here, $\text{case}_i\ (1 \leq i \leq T)$ represents the $i$-th test case. Each test case is given in the following format:

> $N$ $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$ 
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

For each test case, if a permutation $(P_1, P_2, \ldots, P_M)$ satisfying the conditions exists, output such a $P$ separated by spaces. If no such permutation exists, output `-1`.

```input1
1
4 4
1 2
2 3
3 4
4 2
```

```output1
2 4 1 3
```

The given graph has the following shape:

![](https://img.atcoder.jp/ttpc2024_1/efcd772696bd0c92c27611b554a4d94b.png)

If we add the edges in the order $P = (1, 2, 3, 4)$, the conditions are satisfied as shown below:

![](https://img.atcoder.jp/ttpc2024_1/f639f61a8c21e023b412bb9d1f8c4cca.png)
![](https://img.atcoder.jp/ttpc2024_1/d6307590977040bdaea3733c0df34398.png)

Thus, `1 2 3 4` is one valid output.

However, if we add edges in the order $P = (2, 3, 4, 1)$, a cycle containing vertex $2$ is created before edge $1$ can be added, so the conditions are not satisfied.

![](https://img.atcoder.jp/ttpc2024_1/d7e2277adb8c0aace5f07f25a6cf2569.png)
![](https://img.atcoder.jp/ttpc2024_1/11d01a954d01e5ea030492db5eefd3f8.png)

Other valid outputs include $P = (1, 4, 3, 2)$ or $P = (2, 4, 1, 3)$.

```input2
4
4 5
1 2
2 3
3 4
3 1
1 4
5 3
1 2
2 3
3 4
9 10
3 5
1 8
5 8
4 9
6 7
7 9
1 2
1 4
2 4
4 6
8 10
1 4
3 8
2 5
3 4
1 5
5 8
2 8
5 7
4 5
3 7
```

```output2
-1
3 2 1
4 10 2 8 7 9 6 5 3 1
-1
```

If no valid $P$ exists, output `-1`. Note that the graph is not necessarily connected.