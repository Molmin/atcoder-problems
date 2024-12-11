Score : $500$ points

## Problem Statement

Takahashi and Aoki will play a game using a rooted tree with $n$ vertices, numbered $1$ through $n$.
The root of the tree is Vertex $1$. For each $v=2,\dots,n$, the parent of Vertex $v$ is $p_v$.
Initially, there is one coin on each vertex. Additionally, there is a piece on Vertex $1$.

Takahashi and Aoki will alternately do the following operation, with Takahashi going first:

- If there is a coin on the vertex occupied by the piece: get the coin and end his turn.
- If there is no coin on the vertex occupied by the piece: move the piece (or end the game) as follows.-   - If there are vertices with coins on them among the children of the vertex occupied by the piece, choose one such vertex, move the piece to that vertex, and end his turn.
-   - Otherwise, if the piece is on the root, end the game; if not, move the piece to the parent of the vertex occupied by the piece and end his turn.

Both Takahashi and Aoki will play optimally to maximize the number of coins they will get. Find the number of coins Takahashi will get.

## Constraints

- $2\le n \le 10^5$
- $1\le p_v \lt v$

## Input

Input is given from Standard Input in the following format:

> $n$
> 
> $p_2$ $\dots$ $p_n$

## Output

Print the number of coins Takahashi will get when the two players play optimally.

```input1
10
1 2 3 4 5 6 7 8 9
```

```output1
10
```

There is no choice for the players, and the game will always go as follows, so Takahashi will get every coin.

- Takahashi gets the coin on Vertex $1$.
- Aoki moves the piece to Vertex $2$.
- Takahashi gets the coin on Vertex $2$.
- Aoki moves the piece to Vertex $3$.
- $\vdots$
- Takahashi gets the coin on Vertex $10$.
- Aoki moves the piece to Vertex $9$.
- Takahashi moves the piece to Vertex $8$.
- Aoki moves the piece to Vertex $7$.
- $\vdots$
- Takahashi moves the piece to Vertex $2$.
- Aoki moves the piece to Vertex $1$.
- The game ends.

```input2
5
1 2 3 1
```

```output2
2
```

First, Takahashi gets the coin on Vertex $1$.
Then, Aoki can move the piece to Vertex $2$ or Vertex $5$.
If he moves it to Vertex $2$, Aoki will eventually get just the coin on Vertex $5$.
On the other hand, if he moves it to Vertex $5$, Aoki will eventually get the coins on Vertex $2$, $3$, and $4$.
Since Aoki will play optimally to maximize the number of coins he will get, he will choose to move the piece to Vertex $5$.
Thus, Takahashi will get two coins.

```input3
10
1 1 3 1 3 6 7 6 6
```

```output3
5
```