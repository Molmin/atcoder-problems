Score : $600$ points

## Problem Statement

There is a rooted tree with $N$ vertices, Vertex $1$ being the root.
For each $i = 1, 2, \ldots, N-1$, the $i$-th edge connects Vertex $u_i$ and Vertex $v_i$.
Each vertex other than the root has a positive integer written on it: for each $i = 2, 3, \ldots, N$, the integer written on Vertex $i$ is $A_i$.
Takahashi and Aoki will use this rooted tree and a piece to play the following game against each other.

The piece starts on Vertex $1$. Until the game ends, they repeat the following procedure.

1. First, Aoki chooses a non-root vertex and replaces the integer written on that vertex with $0$.
2. Next, Takahashi moves the piece to a (direct) child of the vertex the piece is on.
3. Then, the game ends if the piece is on a leaf. Even if that is not the case, Takahashi can choose to end the game immediately.

At the end of the game, Takahashi's score will be the integer written at that time on the vertex the piece is on.
Takahashi wants to make his score as large as possible, while Aoki wants to make it as small as possible.
Print the score Takahashi will get when both players play optimally for their respective purposes.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq u_i, v_i \leq N$
- The given graph is a tree.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_2$ $\ldots$ $A_N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

Print the answer.

```input1
7
2 4 6 5 6 10
1 2
1 3
2 4
2 5
5 6
5 7
```

```output1
5
```

Here is a possible progression of the game when both players play optimally.

1. The piece starts on Vertex $1$.
2. Aoki changes the integer written on Vertex $7$ from $10$ to $0$.
3. Takahashi moves the piece from Vertex $1$ to Vertex $2$.
4. Aoki changes the integer written on Vertex $4$ from $6$ to $0$.
5. Takahashi moves the piece from Vertex $2$ to Vertex $5$.
6. Takahashi chooses to end the game.

At the end of the game, the piece is on Vertex $5$, on which the integer $5$ is written at that time, so Takahashi's score will be $5$.

```input2
30
29 27 79 27 30 4 93 89 44 88 70 75 96 3 78 39 97 12 53 62 32 38 84 49 93 53 26 13 25
13 15
14 22
17 24
12 3
4 3
5 8
26 15
3 2
2 9
4 25
4 13
2 10
28 15
6 4
2 5
19 9
2 7
2 14
23 30
17 2
7 16
21 13
13 23
13 20
1 2
6 18
27 6
21 29
11 8
```

```output2
70
```