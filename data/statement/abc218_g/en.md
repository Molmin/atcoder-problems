Score : $600$ points

## Problem Statement

We have a tree with $N$ vertices numbered $1$ through $N$. The $i$-th edge $(1 \leq i \leq N-1)$ connects Vertex $u_i$ and Vertex $v_i$, and Vertex $i$ $(1 \leq i \leq N)$ has an even number $A_i$ written on it. Taro and Jiro will play a game using this tree and a piece.

Initially, the piece is on Vertex $1$. With Taro going first, the players alternately move the piece to a vertex directly connected to the vertex on which the piece lies. However, the piece must not revisit a vertex it has already visited. The game ends when the piece gets unable to move.

Taro wants to maximize the median of the (multi-)set of numbers written on the vertices visited by the piece before the end of the game (including Vertex $1$), and Jiro wants to minimize this value. Find the median of this set when both players play optimally.

What is median?

The median of a (multi-)set of $K$ numbers is defined as follows:

- the $\frac{K+1}{2}$-th smallest number, if $K$ is odd;
- the average of the $\frac{K}{2}$-th and $(\frac{K}{2}+1)$-th smallest numbers, if $K$ is even.

For example, the median of $\{ 2,2,4 \}$ is $2$, and the median of $\{ 2,4,6,6\}$ is $5$.

## Constraints

- $2 \leq N \leq 10^5$
- $2 \leq A_i \leq 10^9$
- $A_i$ is even.
- $1 \leq u_i &lt; v_i \leq N$
- The given graph is a tree.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

Print the median of the (multi-)set of numbers written on the vertices visited by the piece when both players play optimally.

```input1
5
2 4 6 8 10
4 5
3 4
1 5
2 4
```

```output1
7
```

When both players play optimally, the game goes as follows.

- Taro moves the piece from Vertex $1$ to Piece $5$.
- Jiro moves the piece from Vertex $5$ to Piece $4$.
- Taro moves the piece from Vertex $4$ to Piece $3$.
- Jiro cannot move the piece, so the game ends.

Here, the set of numbers written on the vertices visited by the piece is $\{2,10,8,6\}$. The median of this set is $7$, which should be printed.

```input2
5
6 4 6 10 8
1 4
1 2
1 5
1 3
```

```output2
8
```

When both players play optimally, the game goes as follows.

- Taro moves the piece from Vertex $1$ to Piece $4$.
- Jiro cannot move the piece, so the game ends.

Here, the set of numbers written on the vertices visited by the piece is $\{6,10\}$. The median of this set is $8$, which should be printed.

```input3
6
2 2 6 4 6 6
1 2
2 3
4 6
2 5
2 6
```

```output3
2
```